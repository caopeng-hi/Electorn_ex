
const { app, BrowserWindow } = require('electron')


// 当app启动之后执行窗口创建等操作

app.whenReady().then(() => {

    const mainWin = new BrowserWindow({
        width: 600,
        hasShadow: 400
    })

    mainWin.loadFile('index.html')


    mainWin.on('close', () => {
        console.log('close----cp');

    })
})

app.on('window-all-closed', () => {

    console.log('close----cp');
    app.quit()
})