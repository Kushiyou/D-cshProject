import SvgIcon from '@/components/SvgIcon/index.vue'
import type { App, Component } from 'vue'

type gloablComponents = {
    [name: string]: Component
}


const myComponent: gloablComponents = { SvgIcon }
export default {
    install(app: App) {
        Object.keys(myComponent).forEach((item) => {
            app.component(item, myComponent[item])
        })
    }
}