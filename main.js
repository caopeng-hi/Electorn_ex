
const { app, BrowserWindow } = require('electron')
const remoteMain = require('@electron/remote/main') // 引入 remote 主模块

app.whenReady().then(() => {
    console.log('ready----cp');

    const mainWin = new BrowserWindow({
        x: 100, // 左上角的x坐标   =====>不设置居中
        y: 100, // 左上角的y坐标   =====>不设置居中
        show: false, // 是否显示窗口
        width: 600,
        height: 400,
        // maxHeight: 600,
        // maxWidth: 800,
        //minHeight: 200,
        //  minWidth: 300,
        //resizable: true, // 是否可以改变窗口大小
        title: 'cp_electron_ex',
        icon: 'logo.png',
        frame: false, //用户自定义菜单，设置为false 可以将默认的菜单栏隐藏
        //transparent: true, // 窗口是否透明
        // autoHideMenuBar: true, // 是否自动隐藏菜单栏
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false  // 可以消除require不存在的警告
        }

    })
    remoteMain.initialize() // 初始化 remote
    remoteMain.enable(mainWin.webContents) // 为该窗口启用 remote
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