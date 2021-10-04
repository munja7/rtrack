import './fonts/index.sass';
import './plugins/fontawesome';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import { VuePicker, VuePickerOption } from '@invisiburu/vue-picker';
import '@invisiburu/vue-picker/dist/vue-picker.min.css';



Vue.config.productionTip = false

new Vue({
  store, 
  VuePicker,
  VuePickerOption,
  router,
  render: h => h(App)
}).$mount('#app')

// Vue.component('VuePicker',);
// Vue.component('VuePickerOption', );
