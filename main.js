
const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
    console.log('ready----cp');

    const mainWin = new BrowserWindow({
        width: 600,
        hasShadow: 400
    })

    mainWin.loadFile('index.html')


    mainWin.on('close', () => {
        console.log('close----cp');
        mainWin = null
    })

    mainWin.webContents.on('did-finish-load', () => {
        console.log('did-finish-load----cp');
    })
    mainWin.webContents.on('dom-ready', () => {
        console.log('dom-ready----cp');
    })
})
app.on('before-quit', () => {
    console.log('before-quit----cp');
})
app.on('will-quit', () => {
    console.log('will-quit----cp');
})
app.on('quit', () => {
    console.log('quit----cp');
})
app.on('window-all-closed', () => {
    console.log('window-all-closed----cp');
    app.quit()
})