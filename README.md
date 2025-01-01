# Desmos Text I/O

A browser extension to import/export desmos graphs in JSON format

**Demo on YouTube**:\
[![Preview on YouTube](https://img.youtube.com/vi/cwNIwvL-a2U/0.jpg)](https://www.youtube.com/watch?v=cwNIwvL-a2U)

This extension enables the import/export of desmos graphs in JSON format. With this feature, you will have the following benefits:

* Customize your graphs (more colors, high-resolution images)
* Save your graphs locally as text files.
* Create desmos graphs in JSON format from other software.

## Installation

* [Chrome Web Store](https://chrome.google.com/webstore/detail/desmos-text-io/ndjdcebpigpfidnilppdpcdkibidfmaa)
* [Firefox ADD-ONS](https://addons.mozilla.org/en-US/firefox/addon/desmos-text-i-o/)

## Development
The following command creates `dist` and `extension.zip`.
```
git clone https://github.com/hyrodium/DesmosTextIO
cd DesmosTextIO
npm install
npm run build
```

To try the dev-version extension, load the `dist` directory (or `dist/manifest.json` file) from your browser.
`extension.zip` will be used to register the extension to the Chrome Web Store or Firefox ADD-ONS.

## Working with other tools
* [Desmos.jl](https://github.com/hyrodium/Desmos.jl)
    * A Julia package to generate Desmos script (JSON) with Julia language.
* [Graphlang](https://github.com/MasterbuilderMS/GraphLang)
    * A Language that compiles to desmos JSON.

Please send a PR updating the above list if you have other tools that can export Desmos scripts!
