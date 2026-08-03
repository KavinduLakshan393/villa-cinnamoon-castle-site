import fs from "node:fs";
import path from "node:path";
import { listSourceFiles, loadTypeScript, projectPath, root } from "./tooling.mjs";

const ts = await loadTypeScript();
const failures = [];
const sourceFiles = listSourceFiles();

for (const file of sourceFiles) {
  const source = fs.readFileSync(file, "utf8");
  const result = ts.transpileModule(source, {
    fileName: file,
    reportDiagnostics: true,
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      jsx: ts.JsxEmit.ReactJSX,
      isolatedModules: true
    }
  });
  for (const diagnostic of result.diagnostics ?? []) {
    const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
    failures.push(`${path.relative(root, file)}: ${message}`);
  }
  if (/\b(?:TODO|FIXME)\b/.test(source)) failures.push(`${path.relative(root, file)} contains TODO/FIXME text.`);
  if (/console\.log\s*\(/.test(source)) failures.push(`${path.relative(root, file)} contains console.log.`);
}

const cssPath = projectPath("public", "assets", "css", "styles.css");
const css = fs.readFileSync(cssPath, "utf8");
let depth = 0;
for (const char of css.replace(/\/\*[\s\S]*?\*\//g, "")) {
  if (char === "{") depth += 1;
  else if (char === "}") depth -= 1;
  if (depth < 0) failures.push("styles.css closes a block before it is opened.");
}
if (depth !== 0) failures.push(`styles.css has an unmatched brace depth of ${depth}.`);
if (/border-radius:\s*99px/i.test(css)) failures.push("styles.css still contains 99px pill geometry.");
if (/\.scroll-intro/.test(css)) failures.push("styles.css still contains retired ScrollIntro selectors.");
if (/html,\s*body,[^{]+cursor:\s*none/si.test(css)) failures.push("styles.css hides the native cursor globally.");

const magneticUsages = sourceFiles
  .filter((file) => !file.endsWith(`${path.sep}Magnetic.tsx`))
  .filter((file) => /\bMagnetic\b/.test(fs.readFileSync(file, "utf8")));
if (magneticUsages.length) failures.push(`Magnetic remains in active components: ${magneticUsages.map((file) => path.relative(root, file)).join(", ")}`);

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}
console.log(`Source lint passed for ${sourceFiles.length} TypeScript/TSX files and the global stylesheet.`);
