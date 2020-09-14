import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
        children: [
            {
                path: '/', name: 'home', component: Home
            },
        ],
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/goVex',
        name: 'goVex',
        component: () => import(/* webpackChunkName: "about" */ '../views/Vex.vue')
    },
    {
        path: '/sideBar',
        name: 'sideBar',
        component: () => import(/* webpackChunkName: "about" */ '../views/SideBar.vue')
    },
    {
        path: '/childRouter',
        name: 'childRouter',
        component: () => import(/* webpackChunkName: "about" */ '../views/ChildRouter.vue'),
        children: [{
                path: '/AAA',
                name: 'AAA',
                component: () => import(/* webpackChunkName: "about" */ '../components/childRouter/AAA.vue')
            },
            {
                path: '/BBB',
                name: 'BBB',
                component: () => import(/* webpackChunkName: "about" */ '../components/childRouter/BBB.vue')
            }
            ]
    },
    {
        path: '/vueDirctives',
        name: 'vueDirctives',
        component: () => import(/* webpackChunkName: "about" */ '../views/vueDirctive.vue')
    },
    {
        path: '/css',
        name: 'css',
        component: () => import(/* webpackChunkName: "about" */ '../views/Css.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
