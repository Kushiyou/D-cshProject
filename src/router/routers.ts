

export const constantRouter = [
    {
        path: '/',
        name: 'home',
        component: import('@/view/home/index.vue'),
        meta: {
            title: "首页",
            show: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: import('@/view/login/index.vue'),
        meta: {
            title: "登录",
            show: true
        },
        children: [{
            path: '/login/01',
            name: '01',
            component: import('@/view/login/index.vue'),
            meta: {
                title: "01",
                show: true
            },
        }]
    },
    {
        path: '/404',
        name: '404',
        component: import('@/view/404/index.vue'),
        meta: {
            title: "404",
            show: true
        },
        children: [{
            path: '/404/test01',
            name: 'test01',
            meta: {
                title: "test01",
                show: true
            },
            children: [{
                path: '/404/test01',
                name: 'test01',
                meta: {
                    title: "test01",
                    show: true
                },
            },
            {
                path: '/404/test02',
                name: 'test02',
                meta: {
                    title: "test02",
                    show: true
                },
            }]
        },
        {
            path: '/404/test02',
            name: 'test02',
            meta: {
                title: "test02",
                show: true
            },
        }]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any',
        meta: {
            title: "其他",
            show: true
        },
    }
]