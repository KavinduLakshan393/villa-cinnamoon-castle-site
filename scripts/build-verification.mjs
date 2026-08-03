import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { projectPath, root } from "./tooling.mjs";

const commands = [
  ["typecheck", ["scripts/typecheck.mjs"]],
  ["lint", ["scripts/lint-source.mjs"]],
  ["tests", ["--test", "--test-reporter=spec", "tests/accessibility.test.mjs", "tests/implementation.test.mjs", "tests/inquiry.test.mjs", "tests/media.test.mjs", "tests/motion.test.mjs"]]
];
for (const [name, args] of commands) {
  const result = spawnSync(process.execPath, args, { cwd: root, stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    console.error(`Build verification stopped during ${name}.`);
    process.exit(result.status ?? 1);
  }
}

const files = [
  "src/app/page.tsx",
  "src/components/arrival/ArrivalScene.tsx",
  "src/components/rooms/RoomSequence.tsx",
  "src/components/SiteHeader.tsx",
  "public/assets/css/styles.css",
  "public/assets/images/manifest.json"
];
const manifest = files.map((relative) => {
  const absolute = projectPath(relative);
  const body = fs.readFileSync(absolute);
  return {
    file: relative,
    bytes: body.length,
    sha256: crypto.createHash("sha256").update(body).digest("hex")
  };
});
fs.mkdirSync(projectPath("dist"), { recursive: true });
fs.writeFileSync(projectPath("dist", "verification-manifest.json"), JSON.stringify({ generatedAt: new Date().toISOString(), files: manifest }, null, 2));
console.log("Verification build passed and dist/verification-manifest.json was generated.");
