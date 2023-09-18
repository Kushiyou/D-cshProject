import SvgIcon from '@/components/SvgIcon/index.vue'
import type { App, Component } from 'vue'
//引入elemenUI全局图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

type gloablComponents = {
    [name: string]: Component
}


const myComponent: gloablComponents = { SvgIcon }
export default {
    install(app: App) {
        Object.keys(myComponent).forEach((item) => {
            app.component(item, myComponent[item])
        });
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
          }
    }
}