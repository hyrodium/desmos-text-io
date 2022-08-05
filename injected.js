window.addEventListener('execPageFuncExport', arg => {
    const state = Calc.getState();
    console.log(state)
    window.dispatchEvent(new CustomEvent('getStateResult', { detail: state }));
});

window.addEventListener('execPageFuncImport', arg => {
    state = arg.detail
    console.log(arg)
    Calc.setState(state);
});
