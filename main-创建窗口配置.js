
const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
    console.log('ready----cp');

    const mainWin = new BrowserWindow({
        x: 100, // 左上角的x坐标   =====>不设置居中
        y: 100, // 左上角的y坐标   =====>不设置居中
        show: false, // 是否显示窗口
        width: 600,
        height: 400,
        maxHeight: 600,
        maxWidth: 800,
        minHeight: 200,
        minWidth: 300,
        resizable: false, // 是否可以改变窗口大小
    })
    mainWin.loadFile('index.html')
    // 现在隐藏窗口，等待dom加载完成之后再让窗口显示出来
    mainWin.once('ready-to-show', () => {
        mainWin.show()
    })



    mainWin.on('close', () => {
        console.log('close----cp');
        mainWin = null
    })
})

app.on('window-all-closed', () => {
    console.log('window-all-closed----cp');
    app.quit()
})