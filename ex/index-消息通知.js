
const path = require('path')
window.addEventListener('DOMContentLoaded', () => {
    const btn_04 = document.querySelector('#btn-04')
    btn_04.addEventListener('click', () => {
        let options = {
            title: '拉钩教育',
            body: '互联网人的教育大学，前端',
            icon: path.resolve(__dirname, 'logo.png')
        }
        let myNotification = new window.Notification(options.title, options)
        myNotification.onclick = () => {
            console.log('点击了通知');
        }
    })
})


