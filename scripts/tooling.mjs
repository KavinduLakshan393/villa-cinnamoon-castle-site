import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const root = fileURLToPath(new URL("..", import.meta.url));

export function findTypeScriptRoot() {
  const candidates = [
    path.join(root, "node_modules", "typescript"),
    "/usr/local/slides_js/node_modules/typescript"
  ];
  return candidates.find((candidate) => fs.existsSync(path.join(candidate, "lib", "typescript.js")));
}

export async function loadTypeScript() {
  const typescriptRoot = findTypeScriptRoot();
  if (!typescriptRoot) throw new Error("TypeScript is required. Run npm install or provide TYPESCRIPT_ROOT.");
  const module = await import(pathToFileURL(path.join(typescriptRoot, "lib", "typescript.js")).href);
  return module.default ?? module;
}

export function listSourceFiles(directory = path.join(root, "src")) {
  const files = [];
  const visit = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const absolute = path.join(current, entry.name);
      if (entry.isDirectory()) visit(absolute);
      else if (/\.(?:ts|tsx)$/.test(entry.name) && !entry.name.endsWith(".d.ts")) files.push(absolute);
    }
  };
  visit(directory);
  return files.sort();
}

export function projectPath(...parts) {
  return path.join(root, ...parts);
}
