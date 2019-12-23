import Vue from 'vue';
import Router from 'vue-router';
import Home from './../components/home.vue';
import HelloWorld from './../components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            component: Home
        },
        {
            path: "/hello-world",
            component: HelloWorld
        }
    ],
});