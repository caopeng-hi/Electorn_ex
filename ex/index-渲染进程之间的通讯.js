
const { BrowserWindow, getCurrentWindow } = require('@electron/remote') // 正确引入
const { ipcRenderer } = require('electron')
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn')
    const btn_03 = document.querySelector('#btn-03')
    btn.addEventListener('click', () => {
        let subWin = new BrowserWindow({
            width: 400,
            height: 300,
            parent: getCurrentWindow(),// 指定父窗口，创建子窗口在父窗口里面
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false  // 可以消除require不存在的警告
            }
        })
        subWin.loadFile('sub.html')
        subWin.openDevTools() // 打开开发者工具
        subWin.on('close', () => {
            subWin = null
        })
    })
    btn_03.addEventListener('click', () => {
        ipcRenderer.send('msg8', 'hello world')
    })
    ipcRenderer.on('msg7', (ev, data) => {
        console.log(data)
    })
})


