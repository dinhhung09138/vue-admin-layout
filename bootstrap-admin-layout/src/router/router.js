import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../layouts/layout.vue';
import Login from '../pages/login.vue';

import Home from '../components/home.vue';
import HelloWorld from '../components/HelloWorld.vue';

Vue.use(Router);

const router = new Router({
    routes: [{
            path: "/",
            name: 'layout',
            component: Layout,
            meta: {
                requiresAuth: true,
            },
            children: [{
                    path: '',
                    name: 'layout.home',
                    component: Home
                },
                {
                    path: '/hello-world',
                    name: 'layout.hello-world',
                    component: HelloWorld
                }
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ],
});

/**
 * Authentication
 */
router.beforeEach((to, from, next) => {

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && requiresAuth === true) {
        next({
            path: '/login',
            query: {
                redirect: to.fullPath
            },
        });
    } else {
        next();
    }
});

export default router;