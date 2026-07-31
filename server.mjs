import http from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
import { validateInquiry } from "./lib/inquiry.mjs";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(ROOT, "public");
const DATA_DIR = path.join(ROOT, "data");
const PORT = Number.parseInt(process.env.PORT || "4173", 10);
const HOST = process.env.HOST || "127.0.0.1";
const WEBHOOK_URL = process.env.INQUIRY_WEBHOOK_URL || "";
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const rateLimit = new Map();

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json"
};

function securityHeaders(contentType = "text/plain; charset=utf-8") {
  return {
    "Content-Type": contentType,
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "Cross-Origin-Opener-Policy": "same-origin",
    "Content-Security-Policy": "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; font-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'",
    "Cache-Control": contentType.startsWith("text/html") ? "no-cache" : "public, max-age=604800, immutable"
  };
}

function sendJson(res, status, payload) {
  res.writeHead(status, securityHeaders("application/json; charset=utf-8"));
  res.end(JSON.stringify(payload));
}

function getClientIp(req) {
  return String(req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown").split(",")[0].trim();
}

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (rateLimit.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  rateLimit.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

async function readJson(req) {
  let body = "";
  for await (const chunk of req) {
    body += chunk;
    if (body.length > 30_000) throw new Error("Payload too large");
  }
  return body ? JSON.parse(body) : {};
}

async function handleInquiry(req, res) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return sendJson(res, 429, { ok: false, message: "Too many attempts. Please wait and try again." });
  }

  try {
    const input = await readJson(req);
    const { valid, errors, data } = validateInquiry(input);
    if (!valid) return sendJson(res, 422, { ok: false, errors });

    const record = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...data,
      website: undefined,
      status: "new"
    };

    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.appendFile(path.join(DATA_DIR, "inquiries.ndjson"), `${JSON.stringify(record)}\n`, { mode: 0o600 });

    let forwarded = false;
    if (WEBHOOK_URL) {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(record),
        signal: AbortSignal.timeout(8000)
      });
      forwarded = response.ok;
    }

    return sendJson(res, 201, {
      ok: true,
      inquiryId: record.id,
      forwarded,
      message: "Your inquiry has been received. Dates remain unconfirmed until the host replies."
    });
  } catch (error) {
    console.error("Inquiry error:", error);
    return sendJson(res, 500, {
      ok: false,
      message: "We could not send your inquiry right now. Your entries are still on this page; please try again."
    });
  }
}

function resolveStaticPath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const safe = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  let candidate = path.join(PUBLIC_DIR, safe);
  if (decoded.endsWith("/")) candidate = path.join(candidate, "index.html");
  else if (!path.extname(candidate)) candidate = path.join(candidate, "index.html");
  return candidate;
}

async function serveStatic(req, res) {
  let filePath = resolveStaticPath(req.url || "/");
  try {
    const stat = await fs.stat(filePath);
    if (stat.isDirectory()) filePath = path.join(filePath, "index.html");
    const ext = path.extname(filePath).toLowerCase();
    const content = await fs.readFile(filePath);
    res.writeHead(200, securityHeaders(MIME[ext] || "application/octet-stream"));
    if (req.method === "HEAD") return res.end();
    res.end(content);
  } catch {
    try {
      const content = await fs.readFile(path.join(PUBLIC_DIR, "404.html"));
      res.writeHead(404, securityHeaders("text/html; charset=utf-8"));
      res.end(content);
    } catch {
      res.writeHead(404, securityHeaders());
      res.end("Not found");
    }
  }
}

const server = http.createServer(async (req, res) => {
  if (req.url === "/api/health" && req.method === "GET") {
    return sendJson(res, 200, { ok: true, service: "villa-cinnamoon-castle" });
  }
  if (req.url === "/api/inquiries" && req.method === "POST") return handleInquiry(req, res);
  if (!["GET", "HEAD"].includes(req.method || "")) {
    res.writeHead(405, { Allow: "GET, HEAD, POST", ...securityHeaders() });
    return res.end("Method not allowed");
  }
  return serveStatic(req, res);
});

server.listen(PORT, HOST, () => {
  console.log(`Villa Cinnamoon Castle is running at http://${HOST}:${PORT}`);
});
