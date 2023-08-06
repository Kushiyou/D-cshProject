

export const constantRouter = [
    {
        path: '/',
        name: 'home',
        component: import('@/view/home/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: import('@/view/login/index.vue')
    },
    {
        path: '/404',
        name: '404',
        component: import('@/view/404/index.vue')
    },
    {
        path:'/:pathMatch(.*)*',
        redirect:'/404',
        name:'any'
    }
]