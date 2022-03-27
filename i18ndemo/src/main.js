// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n';


Vue.use(VueI18n);
Vue.config.productionTip = false

const i18n = new VueI18n({
    locale: 'en',
    messages: {
        'zh': require('@/assets/lang/zh.js'),
        'en': require('@/assets/lang/en.js')
    }
});
console.log({
        'zh': require('@/assets/lang/zh.js'),
        'en': require('@/assets/lang/en.js')
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    i18n,
    components: { App },
    template: '<App/>'
})