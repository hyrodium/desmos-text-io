# DesmosTextIO

A browser extension to import/export desmos graphs in json format

Demo on YouTube:
[![Preview on YouTube](https://img.youtube.com/vi/cwNIwvL-a2U/0.jpg)](https://www.youtube.com/watch?v=cwNIwvL-a2U)

This extension enables the import/export of desmos graphs in json format. With this feature, you will have the following benefits:

* Customize graphs (more colors, high-resolution images)
* Save the graphs locally as a text file.
* Create desmos graphs in JSON format from other software.

## Installation

* Chrome Web Store: https://chrome.google.com/webstore/detail/desmos-text-io/ndjdcebpigpfidnilppdpcdkibidfmaa
* Firefox ADD-ONS: https://addons.mozilla.org/en-US/firefox/addon/desmos-text-i-o/

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
