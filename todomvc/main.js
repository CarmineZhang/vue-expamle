import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'
// Vue.directive('focus', function(value) {
//     if (value) {
//         this.vm.$nextTick(() => {
//             this.el.focus()
//         })
//     }
// })
new Vue({
    store, // inject store to all children
    el: 'body',
    components: {
        app: App
    }
})
