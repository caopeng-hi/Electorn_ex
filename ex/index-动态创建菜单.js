
const { BrowserWindow,getCurrentWindow ,Menu,MenuItem} = require('@electron/remote') // 正确引入

window.addEventListener('DOMContentLoaded', () => {
    const create_btn = document.querySelector('#menu-creat')
    const add_btn = document.querySelector('#add-menu')
    const inp = document.querySelector('#inp')
    let custom_menu = new Menu()
    create_btn.addEventListener('click',()=>{
        const menuFile =new MenuItem({label:'file',type:'normal'})
        const menuEdit =new MenuItem({label:'edit',type:'normal'})
        const cusMenu =new MenuItem({label:'custom_menu',submenu:custom_menu})

        let menu = new Menu()
        menu.append(menuFile)
        menu.append(menuEdit)
        menu.append(cusMenu)

        Menu.setApplicationMenu(menu)
    })

    add_btn.addEventListener('click',()=>{

        const value = inp.value.trim()
        if(value !== ''){
            custom_menu.append(new MenuItem({label:value}))
            inp.value = ''
        }
    })
})


