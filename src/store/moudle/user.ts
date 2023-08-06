//user相关的仓库
import { defineStore } from "pinia";
//引入相关类型
import type { userState } from "../type/type";
//创建小仓库
let useUserStroe = defineStore('User', {
    //小仓库存储数据的地方
    state: (): userState => {
        return {
            token: ''
        }
    },
    getters: {

    },
    //异步|逻辑的地方
    actions: {
        setToken(v: string) {
            this.$state.token = v
            console.log(this.$state);
        }
    }
})

export default useUserStroe;