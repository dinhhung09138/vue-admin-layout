import Vue from 'vue'
import Vuelidate from 'vuelidate';
import App from './App.vue'
import router from './router/router';

Vue.config.productionTip = false

Vue.use(Vuelidate);

new Vue({
    el: '#app',
    router,
    render: h => h(App),
})