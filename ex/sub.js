
const { ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded', () => {

    ipcRenderer.on('msg9', (ev, data) => {
        console.log(data);
    })
    const btn = document.querySelector('#btn-02')

    btn.addEventListener('click', () => {
        ipcRenderer.send('msg6', 'Hello from renderer process')
    })

})


