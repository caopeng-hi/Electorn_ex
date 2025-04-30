
const { BrowserWindow,getCurrentWindow ,Menu,MenuItem} = require('@electron/remote') // 正确引入

const contextTemp =[
    {
        label:'Run Code',
        
    },{label:'转到定义'},{type:'separator'},
    {label:'其他功能',click(){
        console.log('其他功能被点击');
        
    }}
]

const menu = Menu.buildFromTemplate(contextTemp)
window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('contextmenu',(e)=>{
        e.preventDefault()
        menu.popup({window:getCurrentWindow()})
    })

},false)


