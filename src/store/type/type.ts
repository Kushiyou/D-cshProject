//定义小仓库的数据类型
//引入路由的类型
import type { RouteRecordRaw } from "vue-router"
export interface userState {
    token:null|string,
    menuRouter:RouteRecordRaw[],
    userName:string,
    avatar:string
}