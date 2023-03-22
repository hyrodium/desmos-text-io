const editor = ace.edit("editor");
editor.getSession().setMode("ace/mode/json");
btn_import.disabled = true

document.getElementById('btn_export').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { message: 'export' }, (content) => {
            editor.setValue(content);
        });
    });
});

document.getElementById('btn_import').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        state_json = editor.getValue();
        chrome.tabs.sendMessage(tabs[0].id, { message: 'import', state_json: state_json }, () => { });
    });
});

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

editor.getSession().on('change', function() {
    state_json = editor.getValue();
    if (isJson(state_json)) {
        btn_import.disabled = false
    } else {
        btn_import.disabled = true
    }
});
