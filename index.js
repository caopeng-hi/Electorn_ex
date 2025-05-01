
const { shell, ipcRenderer } = require('electron')

const path = require('path')
window.addEventListener('DOMContentLoaded', () => {
    const open_url = document.querySelector('#open-url')
    const open_folder = document.querySelector('#open-folder')

    open_url.addEventListener('click', (e) => {
        e.preventDefault()
        let url = e.target.getAttribute('href')
        shell.openExternal(url)
    })
    open_folder.addEventListener('click', (e) => {
        shell.showItemInFolder(path.resolve(__dirname))
    })

    ipcRenderer.on('msg10', (e, data) => {
        console.log(data);
    })
})


