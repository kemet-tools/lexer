// main.test.ts
//
// Developed with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import lexer from './main';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TEST ════════════════════════════════════════╗


    describe("lexer", () =>
    {
        it("tokenize basics", () => {
            // https://github.com/no-context/moo
            const rules = lexer.createRules({
                ws              : /[ \t]+/,
                comment         : /\/\/.*?$/,
                nl              : {match: '\n', lineBreaks: true},
                error           : lexer.error
            });

            const tokens = lexer.tokenize(rules, `// comment\n$`);

            expect(tokens).toEqual([
                { type: "comment",      value: "// comment",        pos: { line: 1, col: 1  } },
                { type: "nl",           value: "\n",                pos: { line: 1, col: 11 } },
                { type: "error",        value: "$",                 pos: { line: 2, col: 1  } },
            ]);
        });

    });

// ╚══════════════════════════════════════════════════════════════════════════════════════╝