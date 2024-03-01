# Foundations VS Code Workspace

this repository contains a Visual Studio Code workspace that simplifies your folder management and allows you to access all the projects from the DevMountain Foundations Course in one place. All you have to do is open **one** file!

## Workspaces in Visual Studio Code

A VS Code workspace is a concept that allows you to organize and manage your code files, configurations, and dependencies within a single container. It provides a convenient way to work on multiple related projects or files simultaneously.

In the context of this repository, the workspace contains all the daily coding challenges, exercises/labs, and lecture demos from the DevMountain Foundations Course. Each day's work is organized into its own folder. This means that all the code files (_Code Challenges, Exercises/Labs, Demos_), exist within this repository and you only ever need to open one file in Visual Studio Code to access every project.

## Downloading and Opening the Workspace

1. Click on the `Code` button and then `Download ZIP`.
2. Once the ZIP file is downloaded, extract it to your desired location.
3. Open Visual Studio Code.
4. Click on `File` > `Open WorkSpace from File...` and navigate to inside the extracted folder. Select `foundations.code-workspace` and click `Open`.
5. Alternatively you can just double click the `foundations.code-workspace` file in your file explorer.

## Recommended Extensions

The workspace is pre-configured with a list of recommended extensions that are useful for working with Javascript, HTML and CSS. When you open the workspace, you'll be prompted to install these extensions. You can choose to install all of them, pick the ones you need, or if you miss feelings of sadness, worthlessness, irritability and despair, – none at all! (Respect, bro.)

If you want to install the recommended extensions later, you can do so by clicking on the `Extensions` view in the Activity Bar on the side of the window, searching for the extension name, and clicking the `Install` button. You can also disable or uninstall extensions at any time from that same page.

Here's a list of the recommended extensions:

-   [Auto Add Brackets](https://marketplace.visualstudio.com/items?itemName=aliariff.auto-add-brackets) - Automatically adds closing brackets when you type an opening bracket.
-   [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag) - Provides auto-completion for HTML tags.
-   [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap) - Allows you to take screenshots of your code and share them.
-   [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) - Highlights colors in your code.
-   [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek) - Allows you to peek into CSS definitions.
-   [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css) - Provides HTML and CSS support.
-   [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) - Adds rainbow colors to indentations in your code.
-   [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=visualstudioexptteam.vscodeintellicode) - Provides AI-assisted code completions.
-   [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.javascriptsnippets) - Adds code snippets for JavaScript (ES6).
-   [Live Server](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) - Launches a local development server for web pages.
-   [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - Autocompletes file paths in your code.
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Formats your code according to predefined rules.
-   [Template String Converter](https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter) - Converts concatenation to template strings in JavaScript.
-   [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - Highlights errors and warnings in your code.
-   [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - Checks spelling in your code.
-   [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) - Runs code snippets or selected code in various languages.
-   [Live Share](https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare) - Allows collaborative editing and debugging in real-time.
-   [VSCode Icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) - Provides icons for files and folders in Visual Studio Code.

## Workspace Settings

The workspace settings are configured in the `foundations.code-workspace` file. These settings are automatically applied when you open the workspace in Visual Studio Code. These take precedence over user settings and are mostly just ensure VS Code plays nicely with the recommended extensions.

## File Hierarchy

Each week has a dedicated folder. Within each week's folder are seven folders; one for each day of the week. Each day's folder contains 1-3 folders: the Challenge, Lab, and Demo. Some days may not have a Lab or Demo folder since some days don't have a lab or demo. Friday's folder is always empty. (Fill it with your own stuff! Or don't. It's your life. Live it how you want to. You're worth it. You're enough. You're loved. Don't cry, Life will get better in 13 weeks.)

The file hierarchy is as follows:

```
/ Foundations
    ├── 1week
    ├── 2week
    └── etc...

        ├── 1-monday
        ├── 2-tuesday
        └── etc...

            ├── Challenge
            ├── Exercise
            └── Demo    <-- These 3 folders are the same ones downloaded on the course site.

```

<br>

_Content was downloaded from [FRODO](https://ed.devmountain.com) on February 29, 2024._
