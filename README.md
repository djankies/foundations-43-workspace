# Foundations VS Code Workspace

This repository contains a Visual Studio Code Workspace that simplifies folder management and allows one to easily access all the Labs, Exercises and Demos from the DevMountain Foundations Course in one click.

## 🖥️ Workspaces in Visual Studio Code

A Workspace is a feature in VS Code that allows you to organize and manage your project's files, folders, configurations, and dependencies within a single package. It provides a convenient way to work on multiple related projects or files simultaneously.

In the context of this repository, the workspace contains all the daily coding challenges, exercises/labs, and lecture demos from the DevMountain Foundations Course organized by week and day. All the code files (_Code Challenges, Exercises/Labs, Demos_), exist within this repository and from here on out you'll only ever need to click on one file to load up all the files you need for the day.

Learn more about workspaces here: [Visual Studio Code Workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces).

## ⬇️ Downloading & Opening the Workspace

1. Click on the green `Code` button and then `Download ZIP`. `$ git clone [URL]` works too.
2. Once the ZIP file is downloaded, extract it to your desired location.
3. Open Visual Studio Code.
4. Click on `File` > `Open WorkSpace from File...` and navigate to inside the extracted folder. Select `foundations.code-workspace` and click `Open`.
5. Alternatively you can just double click the `foundations.code-workspace` file in your file explorer or drag and drop it into a VS Code window.

Ensure you see `FOUNDATIONS (WORKSPACE)` at the top of your side bar.

## 🚨 IMPORTANT

**Don't change the folder location or names unless you also know how to edit the workspace file as well. VS Code will get** _C**o**NF**uS**iOn_.

## 💫 Helpful Extensions

The workspace is pre-configured with a list of extensions that are useful for working with Javascript, HTML and CSS. When you open the workspace, you'll be prompted to install these extensions. You can choose to install all of them, pick the ones you need, or– if you miss feelings of sadness, worthlessness, irritability and despair, none at all! `(ง^︠.^︡)ง`

If you want to install extensions later, you can do so by clicking on the `Extensions` view in the Activity Bar on the side of the window, searching for the extension name, and clicking the `Install` button. You can also disable or uninstall extensions at any time from that same page.

Here's a list of the extensions:

- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag) - Provides auto-completion for HTML tags.
- [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css) - Provides HTML and CSS support.
- [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek) - Allows you to peek into CSS definitions.
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.javascriptsnippets) - Adds code snippets for JavaScript (ES6).
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=visualstudioexptteam.vscodeintellicode) - Provides AI-assisted code completions.
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - Auto-completes file paths in your code.
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Formats your code according to predefined rules.
- [Template String Converter](https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter) - Converts concatenation to template strings in JavaScript.
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) - Run your code with a click of a button.
- [Auto Add Brackets](https://marketplace.visualstudio.com/items?itemName=aliariff.auto-add-brackets) - Automatically adds closing brackets when you type an opening bracket.
- [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap) - Take screenshots of your code to share.
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) - Highlights colors in your code.
- [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) - Adds rainbow colors to indentations in your code.
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - Highlights and displays inline errors and warnings.
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - Make sure your English doesn't have any bugs.
- [Live Share](https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare) - Allows collaborative editing in real-time.
- [VSCode Icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) - Provides icons for files and folders in Visual Studio Code.
- [Auto Open Markdown Preview](https://marketplace.visualstudio.com/items?itemName=hnw.vscode-auto-open-markdown-preview) - Automatically opens the Markdown preview when you open a Markdown file.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) - Launches a local server for web pages.

## ⚙️ Workspace Settings

The workspace settings are configured in the `foundations.code-workspace` file. These settings are automatically applied when you open the workspace in Visual Studio Code. These take precedence over user settings and are mostly just ensure VS Code plays nicely with the recommended extensions. Oh, also– I turned on autosave for you.

Learn more about User and workspace settings here: [Visual Studio Code User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings).

## 📁 Hierarchy

Each week has a dedicated folder. Within each week's folder are seven sub-folders; one for each day of the week. Each day's folder contains 1-3 folders: the Challenge, Lab, and Demo. You'll notice some weeks have missing days. This is because those days don't have any content to download.

The file hierarchy is as follows:

``` plaintext
/ Foundations
    ├── 1week
    ├── 2week
    └── etc...

      ├── 1-monday
      ├── 2-tuesday
      └── etc...

        ├── Challenge <--||These 3 folders are  
        ├── Exercise  <--||the same ones downloaded
        └── Demo      <--||on the course site.
                            
                            

```

## 👩‍💻 Using Git

You can use git how you always do. `cd` to the _challenge_ or _lab_ folder, run `git init`, `git add`, etc.

You can also initialize the entire workspace as a git repository and push it to github. That way you only have to manage one repository for all your Foundations work.

_Content was downloaded from [FRODO](https://ed.devmountain.com) on February 29, 2024._
