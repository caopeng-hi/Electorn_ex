const { clipboard, nativeImage } = require('electron')
window.addEventListener('DOMContentLoaded', () => {
    const copy = document.querySelector('#copy')
    const copy_btn = document.querySelector('#copy-btn')
    const peat = document.querySelector('#peat')
    const peat_btn = document.querySelector('#peat-btn')
    const cope_p = document.querySelector('#cope-p')
    let res = null
    copy_btn.addEventListener('click', () => {
        let val = copy.value;
        res = clipboard.writeText(val)
    })
    peat_btn.addEventListener('click', () => {
        peat.value = clipboard.readText(res)
    })
    cope_p.addEventListener('click', () => {
        // 将图片放置于剪切板的时候要求图片类型属于nativeImage类型
        let image = nativeImage.createFromPath('./logo.png')
        clipboard.writeImage(image)


        // 将剪切板中的dom元素显示在界面上
        let img = clipboard.readImage()
        let img_el = new Image()
        img_el.src = img.toDataURL()
        document.body.appendChild(img_el)
    })
})


