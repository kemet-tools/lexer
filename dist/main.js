"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  createRules: () => createRules,
  error: () => error,
  tokenize: () => tokenize
});
module.exports = __toCommonJS(main_exports);
var import_moo = require("moo");
var createRules = import_moo.compile;
var error = import_moo.error;
var tokenize = function(rules, source_code) {
  const tokens = [];
  let position = 0;
  rules.reset(source_code);
  for (const token of rules) {
    tokens.push({
      type: token.type,
      value: token.value.length ? token.value : null,
      pos: { line: token.line, col: token.col }
    });
    if (token.type === "error") break;
    ++position;
  }
  return tokens;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createRules,
  error,
  tokenize
});
//# sourceMappingURL=main.js.map