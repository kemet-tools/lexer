import * as moo from 'moo';
import { compile, Lexer } from 'moo';

declare const createRules: typeof compile;
interface Token {
    type: string;
    value: string | null;
    pos: {
        line: number;
        col: number;
    };
}
type Rules = Lexer;
declare const error: moo.ErrorRule;
/**
 * Tokenizes the given source code string according to the lexer rules.
 *
 * @param rules The lexer rules to apply to the source code.
 * @param source_code The source code to tokenize.
 * @returns An array of tokens. If a token is an error, it will be the last token in the array.
*/
declare const tokenize: (rules: Rules, source_code: string) => Token[];

export { type Rules, type Token, createRules, error, tokenize };
