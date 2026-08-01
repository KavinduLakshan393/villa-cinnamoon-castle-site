import crypto from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { validateInquiry, type InquiryInput } from "@/lib/inquiry";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const rateLimit = new Map<string, number[]>();

function clientIp(request: NextRequest) {
  return (request.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (rateLimit.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  rateLimit.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json({ ok: false, message: "Too many attempts. Please wait and try again." }, { status: 429 });
  }

  try {
    const raw = await request.text();
    if (raw.length > 30_000) return NextResponse.json({ ok: false, message: "Request is too large." }, { status: 413 });
    const input = (raw ? JSON.parse(raw) : {}) as InquiryInput;
    const { valid, errors, data } = validateInquiry(input);
    if (!valid) return NextResponse.json({ ok: false, errors }, { status: 422 });

    const { website: _website, ...safeData } = data;
    void _website;
    const record = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...safeData, status: "new" };
    const dataDirectory = path.join(process.cwd(), "data");
    await fs.mkdir(dataDirectory, { recursive: true });
    await fs.appendFile(path.join(dataDirectory, "inquiries.ndjson"), `${JSON.stringify(record)}\n`, { mode: 0o600 });

    let forwarded = false;
    const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(record),
        signal: AbortSignal.timeout(8000)
      });
      forwarded = response.ok;
    }

    return NextResponse.json({
      ok: true,
      inquiryId: record.id,
      forwarded,
      message: "Your inquiry has been received. Dates remain unconfirmed until the host replies."
    }, { status: 201 });
  } catch {
    console.error("Inquiry processing failed");
    return NextResponse.json({ ok: false, message: "We could not send your inquiry right now. Your entries are still on this page; please try again." }, { status: 500 });
  }
}
