import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { findTypeScriptRoot, root } from "./tooling.mjs";

const typescriptRoot = findTypeScriptRoot();
if (!typescriptRoot) {
  console.error("TypeScript compiler not found. Run npm install first.");
  process.exit(1);
}

const hasInstalledFrameworkTypes = fs.existsSync(path.join(root, "node_modules", "@types", "react", "index.d.ts"));
const config = hasInstalledFrameworkTypes ? "tsconfig.json" : "tsconfig.offline.json";
const result = spawnSync(process.execPath, [path.join(typescriptRoot, "bin", "tsc"), "-p", config], {
  cwd: root,
  stdio: "inherit"
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
console.log(`TypeScript check passed using ${config}.`);
