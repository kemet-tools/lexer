// src/main.ts
import { compile, error as _Error } from "moo";
var createRules = compile;
var error = _Error;
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
export {
  createRules,
  error,
  tokenize
};
//# sourceMappingURL=main.mjs.map