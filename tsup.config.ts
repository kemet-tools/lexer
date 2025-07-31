// tsup.config.ts — Configuration for `tsup`.
//
// repo   : https://github.com/kemet-dev/lexer
// docs   : https://kemet-dev.github.io/lexer
// author : https://github.com/maysara-elshewehy
//
// Developed with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { defineConfig } from 'tsup';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    export default                      defineConfig
    ({
        entry                           : ["src/main.ts"],
        format                          : ["cjs", "esm"],
        dts                             : true,
        splitting                       : false,
        sourcemap                       : true,
        clean                           : true,
    });

// ╚══════════════════════════════════════════════════════════════════════════════════════╝