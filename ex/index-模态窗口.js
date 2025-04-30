
const { BrowserWindow,getCurrentWindow } = require('@electron/remote') // 正确引入

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn')
    btn.addEventListener('click',()=>{
        let subWin =new BrowserWindow({
            width:400,
            height:300,
            parent:getCurrentWindow() ,// 指定父窗口，创建子窗口在父窗口里面
            modal:true // 子窗口没有关闭之前，不允许操作父窗口
        }) 
        subWin.loadFile('sub.html')
        subWin.on('close',()=>{
            subWin = null
        })
    })
})


