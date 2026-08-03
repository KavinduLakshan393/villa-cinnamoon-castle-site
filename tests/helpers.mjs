import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { loadTypeScript, projectPath, root } from "../scripts/tooling.mjs";

const require = createRequire(import.meta.url);

export { projectPath, root };

export function read(relative) {
  return fs.readFileSync(projectPath(relative), "utf8");
}

export async function loadStandaloneTs(relative) {
  const ts = await loadTypeScript();
  const file = projectPath(relative);
  const source = fs.readFileSync(file, "utf8");
  const compiled = ts.transpileModule(source, {
    fileName: file,
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.CommonJS,
      esModuleInterop: true
    }
  }).outputText;
  const module = { exports: {} };
  const context = vm.createContext({
    module,
    exports: module.exports,
    require,
    console,
    URL,
    Date,
    Number,
    Object,
    Array,
    String,
    Boolean,
    Math,
    RegExp,
    Set,
    Map,
    JSON
  });
  vm.runInContext(`(function (exports, module, require, __filename, __dirname) { ${compiled}\n})(exports, module, require, ${JSON.stringify(file)}, ${JSON.stringify(path.dirname(file))});`, context, { filename: file });
  return module.exports;
}
