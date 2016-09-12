import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import store from './vuex/store'
import { currency } from './currency'

Vue.filter('currency', currency)

new Vue({
    el: 'body',
    store,
    components: {
        App
    }
})
