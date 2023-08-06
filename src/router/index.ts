import { createRouter, createWebHashHistory } from 'vue-router';
//引入路由
import { constantRouter } from './routers';

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouter,
    scrollBehavior(){
        return {
            left:0,
            top:0
        }
    }
})

export default router