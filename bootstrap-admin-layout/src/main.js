import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css';

import Vuetify from 'vuetify';

import Vue from 'vue'
import Vuelidate from 'vuelidate';
import App from './App.vue'
import router from './router/router';

Vue.config.productionTip = false

Vue.use(Vuelidate);
Vue.use(Vuetify);

new Vue({
    el: '#app',
    router,
    render: h => h(App),
})