/*
 * @Author: caopeng
 * @Date: 2025-04-30 20:51:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-05-01 10:06:56
 * @Description: 请填写简介
 */

const { app, BrowserWindow, Menu, ipcMain, globalShortcut } = require('electron')
const remoteMain = require('@electron/remote/main') // 引入 remote 主模块
console.log(process.platform);
let mainWinId = null
app.whenReady().then(() => {

    let mainWin = new BrowserWindow({
        x: 100, // 左上角的x坐标   =====>不设置居中
        y: 100, // 左上角的y坐标   =====>不设置居中
        show: false, // 是否显示窗口
        width: 600,
        height: 400,

        title: 'cp_electron_ex',
        icon: 'logo.png',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false  // 可以消除require不存在的警告
        }

    })

    let menuTemp = [
        {
            label: '文件',
            submenu: [{
                label: '复制',
                click() {
                    console.log('打开复制文件');

                }
            },
            {
                type: 'separator'
            },
            {
                label: '粘贴'
            },
            {
                label: '关于',
                click() {
                    BrowserWindow.getFocusedWindow().webContents.send('msg10', '我是主进程')
                }
            }
            ]
        },
        {
            label: '编辑'
        }
    ]
    let menu = Menu.buildFromTemplate(menuTemp)
    Menu.setApplicationMenu(menu)

    remoteMain.initialize() // 初始化 remote
    remoteMain.enable(mainWin.webContents) // 为该窗口启用 remote
    mainWin.loadFile('index.html')
    mainWin.openDevTools()
    mainWinId = mainWin.id
    // 现在隐藏窗口，等待dom加载完成之后再让窗口显示出来
    mainWin.once('ready-to-show', () => {
        mainWin.show()
    })
    mainWin.on('close', () => {
        console.log('close----cp');
        mainWin = null
    })

    const ret = globalShortcut.register('ctrl+q', () => {
        // todo
        console.log('ctrl+q----cp');
    })
    console.log(ret);
    console.log(globalShortcut.isRegistered('ctrl+q'));

})
app.on('will-quit', () => {
    globalShortcut.unregister('ctrl+q')

    // globalShortcut.unregisterAll()  // 注销所有快捷键
})
app.on('window-all-closed', () => {
    console.log('window-all-closed----cp');
    app.quit()
})