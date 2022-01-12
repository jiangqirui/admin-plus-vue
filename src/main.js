import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import routers from "./routers/routers";

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: routers
})

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
