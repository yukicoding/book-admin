import Vue from 'vue'
import Router from 'vue-router'
import PageTwo from '../views/PageTwo'
import  Find from  '../views/Find'
import  Update from  '../views/Update'
import PageFour from '../views/PageFour'
import Index from '../views/Index'
import  Login from  '../views/Login'
import Home from '../views/Home'
import Register from "../views/Register";
import Userinfo from '../components/Userinfo'
import  aaa from  "../views/aaa"
  Vue.use(Router)


const routes = [
  {
    path: '/',
    name: '书法管理',
    component: Index,
    redirect:'/Login',
    meta:{
      showNavMenu:true,
    },
     // redirect:'/Find',
    children: [
      {
        path: '/Find',
        name: '展示书法',
        component: Find,
        meta:{
          showNavMenu:true,
        }
      },
      {
        path: '/PageTwo',
        name: '添加书法',
        component: PageTwo,
        meta:{
          showNavMenu:true,
        }
      },
      {
        path: '/Update',
        name: '修改书法',
        component: Update,
        meta:{
          showNavMenu:true,
        }
      },
    ]
  },
  {
    path: '/navigation',
    name: '顾客管理',
    component: Index,
    meta:{
      showNavMenu:true,
    },
    children: [
      {
        path: '/PageFour',
        name: '顾客信息',
        component: PageFour,
        meta:{
          showNavMenu:true,
        }
      },
    ]
  },
  {
    path: '/Login',
    name: '登录',
    component: Login,
    meta:{
      showNavMenu:false,
    }
  },
  {
    path: '/Home',
    name: '主页面',
    component: Home,
    meta:{
      showNavMenu:false,
    }
  },
  {
    path: '/Register',
    name: '注册页面',
    component: Register,
    meta:{
      showNavMenu:false,
    }
  },
  {
    path: '/Userinfo',
    name: '测试',
    component: Userinfo,
    meta:{
      showNavMenu:false,
    }
  },
  {
    path: '/aaa',
    name: '登录页面',
    component: aaa,
    meta:{
      showNavMenu:false,
    }
  }

]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

})

export default router
