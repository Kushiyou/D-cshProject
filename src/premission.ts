//路由鉴权
import  router  from "@/router";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

console.log(555)
router.beforeEach((to:any, from:any, next:any) => {
    // to and from are both route objects. must call `next`.
    nprogress.start()
    console.log(111)
    next()
})

router.afterEach((to:any, from:any) => {
    // to and from are both route objects.
    nprogress.done()

    console.log(222)
})