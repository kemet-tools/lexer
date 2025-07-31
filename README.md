<!----------------------------------- BEG ----------------------------------->
# [@kemet-tools](https://github.com/kemet-tools) :: lexer

> Kemet language lexer module.

- #### 📥 Setup

    ```Bash
    npm i @kemet-tools/lexer
    ```

- #### 🌟 Usage

    ```ts
    import { tokenize } from '@kemet-tools/lexer';

    const tokens = tokenize("// comment\n$..");
    ```

    ```json
    [
        {
            "id"        : 1,
            "type"      : "dslash",
            "value"     : "comment",
            "pos"       : { "line": 1, "col": 1 }
        },
        {
            "id"        : 2,
            "type"      : "nl",
            "value"     : "\n",
            "pos"       : { "line": 1, "col": 11 }
        },
        {
            "id"        : 3,
            "type"      : "error",
            "value"     : "$",
            "pos"       : { "line": 2, "col": 1 }
        }
    ]
    ```

- #### 🚀 Commands

    ```bash
    npm run build
    npm run test
    ```

<!--------------------------------------------------------------------------->



<!----------------------------------- END ----------------------------------->

<br>
<div align="center">
    <img src="https://raw.githubusercontent.com/kemet-zone/.github/refs/heads/main/assets/images/md/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/>
</div>

<br>
<div align="center">
    <a href="https://github.com/maysara-elshewehy">
        <img src="https://img.shields.io/badge/Made with ❤️ by-Maysara-orange"/>
    </a>
</div>

<!--------------------------------------------------------------------------->
