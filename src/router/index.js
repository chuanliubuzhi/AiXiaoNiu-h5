import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

// 全权限路由表
export const constantRouterMap = [
    {
        path: '/',
        redirect: '/home',
        name: 'home',
    },
    {
        path: '/home',
        name: 'home',
        component: _import('Home')
    },
    {
        path: '/joinUs',
        name: 'joinUs',
        component: _import('JoinUs')
    },
    {
        path: '/knowUs',
        name: 'knowUs',
        component: _import('KnowUs')
    },
    {
        path: '/product',
        name: 'product',
        component: _import('Product')
    }
]

// 实例化vue的时候只挂载constantRouter
var router = new Router({
    routes: constantRouterMap
})

export default router