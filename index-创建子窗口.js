
const { BrowserWindow } = require('@electron/remote') // 正确引入
//const currentWindow = require('@electron/remote').getCurrentWindow()


window.addEventListener('DOMContentLoaded', () => {
    console.log('cp-');
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
        // 如何创建窗口
        let indexMin = new BrowserWindow({
            width: 200,
            height: 200,
        })
        indexMin.loadFile('list.html')
        indexMin.on('closed', () => {
            console.log('indexMin closed');
            indexMin = null;
        })
    })
})


