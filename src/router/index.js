import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path:"/",
      redirect:"/shouye"
    },
    {
      path:"/shouye",
      name:"shouye",
      component:() => import("../pages/shouye"),
      meta: {
        flag: true,
        requireAuth: false
      }
    },
    {
      path:"/juyuan",
      name:"juyuan",
      component:() => import("../pages/juyuan"),
      meta: {
        flag: true,
        requireAuth: false,
        
      },
      
    },
    {
      path:"/piaojia",
      name:"piaojia",
      component:() => import("../pages/piaojia"),
      meta: {
        flag: true,
<<<<<<< HEAD
        requireAuth: true,
=======
        requireAuth: true
>>>>>>> 861441bce5c3c824620279c1acc9feb7cc894e81
      }
    },
    {
      path:"/mine",
      name:"mine",
      component:() => import("../pages/mine"),
      meta: {
        flag: true,
        requireAuth: true
      }
    },
    {
      path: "/login",
      component: () => import("../pages/login"),
      name: "login",
      meta: {
        flag: false,
        requireAuth: false
      }
    },
    {
<<<<<<< HEAD
      path:'/juyuan_detail',
      name:'juyuan_detail',
      component:() => import("../pages/juyuan_detail"),
    },
    {
      path:'/vip',
      name:'vip',
      component:() => import("../pages/vip"),
=======
      path:"/search",
      name:"search",
      component: ()=>import("../pages/search"),
      meta:{
        flag: false,
        requireAuth: false
      }
>>>>>>> 861441bce5c3c824620279c1acc9feb7cc894e81
    }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path != '/login' && to.meta.requireAuth) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next({ name: "login", params: { to: to.path } })
    }
  } else {
    next();
  }
})

export default router
