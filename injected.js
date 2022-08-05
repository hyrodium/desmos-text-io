window.addEventListener('execPageFuncExport', arg => {
    const state = Calc.getState();
    window.dispatchEvent(new CustomEvent('getStateResult', { detail: state }));
});

window.addEventListener('execPageFuncImport', arg => {
    state = arg.detail
    Calc.setState(state);
});
