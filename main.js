/*
 * @Author: caopeng
 * @Date: 2025-04-30 20:51:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-30 21:55:54
 * @Description: 请填写简介
 */

const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const remoteMain = require('@electron/remote/main') // 引入 remote 主模块
console.log(process.platform);
let mainWinId = null
app.whenReady().then(() => {
    console.log('ready----cp');

    let mainWin = new BrowserWindow({
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
        //frame: false, //用户自定义菜单，设置为false 可以将默认的菜单栏隐藏
        //transparent: true, // 窗口是否透明
        // autoHideMenuBar: true, // 是否自动隐藏菜单栏
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
                role: 'about'
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


})

app.on('window-all-closed', () => {
    console.log('window-all-closed----cp');
    app.quit()
})

ipcMain.on('msg6', (ev, data) => {
    console.log('msg6', data);
    // 当前需要data经过mainWin转交给index页面 通过窗口id发送
    let mainWin = BrowserWindow.fromId(mainWinId)
    mainWin.webContents.send('msg7', data)
})
ipcMain.on('msg8', (ev, data) => {
    console.log('msg8', data);
    // 需要找到sunWin 发送msg9   sunWin 是子窗口
    let sunWin = BrowserWindow.getAllWindows().find(win =>
        win !== BrowserWindow.fromId(mainWinId))
    if (sunWin) {
        sunWin.webContents.send('msg9', data)
    }


})