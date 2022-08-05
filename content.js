// Load js file to be injected
src = chrome.runtime.getURL('/injected.js')

// Create script element and inject the script
const script = document.createElement('script');
script.src = src;
script.onload = function () {
    console.log("script injected");
    this.remove();
};
document.documentElement.appendChild(script);

// Define global variable to be shared in functions
default_state = {
    "version": 9,
    "randomSeed": "4e3a25cab221859237f9a36937e4abfa",
    "graph": {
        "viewport": {
            "xmin": -10,
            "ymin": -10,
            "xmax": 10,
            "ymax": 10
        }
    },
    "expressions": {
        "list": [
            {
                "type": "expression",
                "id": "1",
                "color": "#c74440"
            }
        ]
    }
}
let result = { export: default_state };

// Get state
function getST() {
    window.dispatchEvent(new CustomEvent('execPageFuncExport', {}));
    console.log(result.export)
    return result.export
}

// Set state
function setST(state) {
    window.dispatchEvent(new CustomEvent('execPageFuncImport', { detail: state }));
    console.log(result.export)
}

window.addEventListener('getStateResult', arg => {
    const state = arg.detail;
    console.log(state);
    result.export = state
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message == "export") {
        state = getST()
        state_json = JSON.stringify(state, null, "  ")
        console.log(state_json)
        sendResponse(state_json);
    } else if (request.message == "import") {
        state_json = request.state_json
        console.log(state_json)
        state = JSON.parse(state_json)
        setST(state)
    }
});
