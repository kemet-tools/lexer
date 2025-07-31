// main.test.ts
//
// Developed with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import * as lexer from './main';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TEST ════════════════════════════════════════╗

    describe("lexer", () =>
    {
        it("tokenize basics", () => {
            const tokens = lexer.tokenize("// comment\n$..");
            expect(tokens).toEqual([
                { type: "dslash",       value: "comment",       pos: { line: 1, col: 1 } },
                { type: "nl",           value: null,            pos: { line: 1, col: 11 } },
                { type: "error",        value: "$",             pos: { line: 2, col: 1 } },
            ]);
        });

        it("tokenizes variable declarations", () => {
            const tokens = lexer.tokenize("let myVar: bool = 42;");
            expect(tokens).toEqual([
                { type: "keyword",      value: "let",           pos: { line: 1, col: 1 } },
                { type: "ws",           value: " ",             pos: { line: 1, col: 4 } },
                { type: "ident",        value: "myVar",         pos: { line: 1, col: 5 } },
                { type: "colon",        value: ":",             pos: { line: 1, col: 10 } },
                { type: "ws",           value: " ",             pos: { line: 1, col: 11 } },
                { type: "keyword",      value: "bool",          pos: { line: 1, col: 12 } },
                { type: "ws",           value: " ",             pos: { line: 1, col: 16 } },
                { type: "assign",       value: "=",             pos: { line: 1, col: 17 } },
                { type: "ws",           value: " ",             pos: { line: 1, col: 18 } },
                { type: "number",       value: "42",            pos: { line: 1, col: 19 } },
                { type: "scolon",       value: ";",             pos: { line: 1, col: 21 } }
            ]);
        });

        it("tokenizes array types", () => {
            const tokens = lexer.tokenize("let arr: [5]bool;");
            expect(tokens).toEqual([
                { type: "keyword",      value: "let",           pos: { line: 1, col: 1 } },
                { type: "ws",           value: " ",             pos: { line: 1, col: 4 } },
                { type: "ident",        value: "arr",           pos: { line: 1, col: 5 } },
                { type: "colon",        value: ":",             pos: { line: 1, col: 8 } },
                { type: "ws",           value: " ",             pos: { line: 1, col: 9 } },
                { type: "lbracket",     value: "[",             pos: { line: 1, col: 10 } },
                { type: "number",       value: "5",             pos: { line: 1, col: 11 } },
                { type: "rbracket",     value: "]",             pos: { line: 1, col: 12 } },
                { type: "keyword",      value: "bool",          pos: { line: 1, col: 13 } },
                { type: "scolon",       value: ";",             pos: { line: 1, col: 17 } }
            ]);
        });

        it("tokenizes comments", () => {
            const tokens = lexer.tokenize("// Single line\n/// Documentation");
            expect(tokens).toEqual([
                { type: "dslash",       value: "Single line",   pos: { line: 1, col: 1 } },
                { type: "nl",           value: null,            pos: { line: 1, col: 15 } },
                { type: "tslash",       value: "Documentation", pos: { line: 2, col: 1 } }
            ]);
        });

        it("handles invalid characters", () => {
            const tokens = lexer.tokenize("let x = $;");
            expect(tokens).toEqual([
                { type: "keyword",      value: "let",           pos: { line: 1, col: 1 } },
                { type: "ws",           value: " ",             pos: { line: 1, col: 4 } },
                { type: "ident",        value: "x",             pos: { line: 1, col: 5 } },
                { type: "ws",           value: " ",             pos: { line: 1, col: 6 } },
                { type: "assign",       value: "=",             pos: { line: 1, col: 7 } },
                { type: "ws",           value: " ",             pos: { line: 1, col: 8 } },
                { type: "error",        value: "$",             pos: { line: 1, col: 9 } }
            ]);
        });
    });

// ╚══════════════════════════════════════════════════════════════════════════════════════╝