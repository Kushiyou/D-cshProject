



export const constantRouter = [
    {
        path:'/',
        name:'layout',
        component:()=>import('@/layout/layout.vue'),
        meta:{
            title:'首页',
            show:true,
            icon:'Home'
        },
        children:[{
            path:'/home',
            name:'Home',
            component:()=>import('@/view/home/index.vue'),
            meta:{
                title:'首页',
                show:true,
                icon:'HomeFilled'
            }
        }]
    },
    {
        path: '/login',
        name: 'login',
        component: ()=>import('@/view/login/index.vue'),
        meta: {
            title: "登录",
            show: false,
            icon: "Promotion"
        },
    },
    {
        path: '/404',
        name: '404',
        component: ()=>import('@/view/404/index.vue'),
        meta: {
            title: "404",
            show: false,
            icon: "Promotion"
        },
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any',
        meta: {
            title: "其他",
            show: false,
            icon: "Promotion"
        },
    },
    //数据大屏
    {
        path:'/screen',
        component:()=>import("@/view/screen/index.vue"),
        name:'screen',
        meta:{
            title:'数据大屏',
            show:true,
            icon:'Platform'
        }
    },
    //权限管理
    {
        path:'/acl',
        name:'Acl',
        component:()=>import('@/layout/layout.vue'),
        meta:{
            title:'权限管理',
            show:true,
            icon:'Lock'
        },
        children:[{
            path:'/user',
            name:'User',
            component:()=>import('@/view/acl/user/index.vue'),
            meta:{
                title:'用户管理',
                show:true,
                icon:'User'
            }
        },
        {
            path:'/role',
            name:'Role',
            component:()=>import('@/view/acl/role/index.vue'),
            meta:{
                title:'角色管理',
                show:true,
                icon:'Avatar'
            }
        },
        {
            path:'/permission',
            name:'Permission',
            component:()=>import('@/view/acl/permission/index.vue'),
            meta:{
                title:'菜单管理',
                show:true,
                icon:'Grid'
            }
        }]
    },
    //商品管理
    {
        path:'/product',
        name:'Product',
        component:()=>import('@/layout/layout.vue'),
        meta:{
            title:'商品管理',
            show:true,
            icon:'GoodsFilled'
        },
        children:[{
            path:'/trademark',
            name:'Trademark',
            component:()=>import('@/view/product/trademark/index.vue'),
            meta:{
                title:'品牌管理',
                show:true,
                icon:'ShoppingCart'
            }
        },
        {
            path:'/attr',
            name:'Attr',
            component:()=>import('@/view/product/attr/index.vue'),
            meta:{
                title:'属性管理',
                show:true,
                icon:'Avatar'
            }
        },
        {
            path:'/spu',
            name:'Spu',
            component:()=>import('@/view/product/spu/index.vue'),
            meta:{
                title:'SPU管理',
                show:true,
                icon:'Grid'
            }
        },
        {
            path:'/sku',
            name:'Sku',
            component:()=>import('@/view/product/sku/index.vue'),
            meta:{
                title:'SKU管理',
                show:true,
                icon:'Grid'
            }
        }]
    },
]
