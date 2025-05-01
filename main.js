/*
 * @Author: caopeng
 * @Date: 2025-04-30 20:51:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-05-01 11:09:59
 * @Description: 请填写简介
 */
const { app, BrowserWindow } = require('electron')

const isDev = require('electron-is-dev')

let mainWindow = null;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minHeight: 300,
        minWidth: 300,
        webPreferences: {
            nodeIntegration: true, // 允许在渲染进程中使用Node.js API
            contextIsolation: false, // 禁用上下文隔离
        },
    })

    let urlLocation = isDev ? 'http://localhost:8877' : 'myUrl'
    mainWindow.loadURL(urlLocation)
    mainWindow.on('closed', () => {
        mainWindow = null; // 关闭窗口时将mainWindow设置为null
    })
})