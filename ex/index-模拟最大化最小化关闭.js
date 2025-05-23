
const { getCurrentWindow } = require('@electron/remote') // 正确引入


window.addEventListener('DOMContentLoaded', () => {
    window.onbeforeunload = function () {
        console.log(111);
        const isClose = document.querySelector('.is-close')
        if (isClose) {
            isClose.style.display = 'block'
            let yes = isClose.getElementById('isClose')
            let no = isClose.getElementById('noClose')
            yes.addEventListener('click', () => {
                // 当前事件需要关闭窗口
                const mainWin = getCurrentWindow() // 获取当前窗口
                mainWin.destroy()
            })
            no.addEventListener('click', () => {
                isClose.style.display = 'none'
            })
        }
        return false
    }
    const mainWin = getCurrentWindow() // 获取当前窗口
    const min = document.getElementById('min')
    const max = document.getElementById('max')
    const close = document.getElementById('close')
    min.addEventListener('click', () => {
        // 最小化窗口
        if (!mainWin.isMinimized()) {
            mainWin.minimize()
        }

    })
    max.addEventListener('click', () => {
        // 最大化窗口
        if (mainWin.isMaximized()) {
            //  mainWin.unmaximize()
            // 将窗口从 最大化 状态恢复到 之前的大小和位置 只是最大化有用，最小化没有用
            mainWin.restore()
            // 将窗口从 最小化 或 最大化 状态恢复到 之前的大小和位置
        } else {
            mainWin.maximize()
        }

    })
    close.addEventListener('click', () => {
        // 当前事件需要关闭窗口
        mainWin.close()
    })
})


