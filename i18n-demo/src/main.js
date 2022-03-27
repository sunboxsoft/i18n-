// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n);
Vue.config.productionTip = false

// const i18n = new VueI18n({
//     locale: 'zh',
//     messages: {
//         'zh': require('./i18n/config/zh.js'),
//         'en': require('./i18n/config/en.js')
//     }
// });
Vue.use(ElementUI)
Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    components: { App },
    template: '<App/>'
})