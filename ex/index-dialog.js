
const { dialog } = require('@electron/remote') // 正确引入
const { ipcRenderer } = require('electron')
window.addEventListener('DOMContentLoaded', () => {
    const btn_03 = document.querySelector('#btn-04')
    const btn_05 = document.querySelector('#btn-05')
    btn_03.addEventListener('click', async () => {


        try {
            let ret = await dialog.showOpenDialog({
                defaultPath: __dirname,
                buttonLabel: '选择文件',
                title: '拉钩教育',
                properties: ['openFile', 'multiSelections'], // multiSelections 多选
                filters: [
                    { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
                    { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
                    { name: 'code file', extensions: ['js', 'css', 'html'] },
                ],
            })
            console.log(ret);
        } catch (error) {
            console.log(error);

        }

    })
    btn_05.addEventListener('click', async () => {


        try {
            dialog.showErrorBox('自定义标题', '当前错误内容')
        } catch (error) {
            console.log(error);

        }

    })

})


