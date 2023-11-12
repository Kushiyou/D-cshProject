import { createApp } from 'vue'
//import '@/style.css'
import '@/styles/index.scss'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg
import 'virtual:svg-icons-register'

//引入路由
import router from './router';

//引入仓库
import pinia from './store';


const app = createApp(App)

//引入自定义全局组件 注意是插件
import grobalComponents from '@/components/index' 
//挂载自定义全局组件 是插件需要使用use
app.use(grobalComponents)

//引入路由鉴权
import './premission'
app.use(ElementPlus, {
    locale: zhCn
})

//使用路由
app.use(router)
//使用仓库
app.use(pinia)

app.mount('#app')