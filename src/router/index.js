import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import sourceData from '../data.json'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        alias: '/index',
    },
    {
        path: "/home",
        redirect: '/'
    },
    {
        path: '/protected',
        name: 'Protected',
        components: {
            default: () => import('../components/ProtectedComponents.vue'),
            LeftSidebar: () => import('../components/LeftSidebar.vue'),
        }, 
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/AboutComponent.vue'),
    },
    {
        path: '/destionation/:id/:slug',
        name: 'Destination.Show',
        component: () => import('../components/DestinationShow.vue'),
        props: route => ({ id: parseInt(route.params.id) }),
        beforeEnter(to, from) {
            const exist = sourceData.destinations.find(
                destination => destination.id === parseInt(to.params.id)
            )
        
            if (!exist) return {
                name: 'NotFound',
                //allows keeping the URL while rendering a different page
                params: { pathMatch: to.path.split('/').slice(1) },
                query: to.query,
                hash: to.hash,
            }
        },
        children: [
            {
                path: ':experienceSlug',
                name: 'Experience.Show',
                component: () => import('../components/ExperienceShow.vue'),
                props: route => ({ ...route.params, id: parseInt(route.params.id) }),
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "not-found" */ '../components/NotFoundComponent.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/LoginComponent.vue')
    },
    {
        path: '/invoices',
        name: 'Invoices',
        components: {
            default: () => import('../components/InvoicesComponent.vue'),
            LeftSidebar: () => import('../components/LeftSidebar.vue'),
        }, 
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),

    routes,

    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise(resolve => {
            setTimeout(() => resolve({ top:0, behavior: 'smooth' }), 300)
        })
    }
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !window.user) {
        // need to login if not already logged in
        return {
            name: 'Login',
            query: {
                redirect: to.fullPath,
            }
        }
    }
})

export default router