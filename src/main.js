import './fonts/index.sass';
import './plugins/fontawesome';
import 'vue-select/dist/vue-select.css';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import VTooltip from 'v-tooltip';
import vuescroll from "vuescroll/dist/vuescroll-native";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from '@fortawesome/free-regular-svg-icons';
import ProgressBar from 'vuejs-progress-bar';
import axios from 'axios';
import VueAxios from 'vue-axios';
import vSelect from 'vue-select';


Vue.component('v-select', vSelect)

Vue.use(VueAxios, axios);

Vue.use(ProgressBar);
 
library.add(far);

Vue.config.productionTip = false

Vue.use(vuescroll, {
  ops: {
    scrollPanel: {
      scrollingX: false,
      scrollingY: true,
    },
    rail:{
      size: '9px',
    },
    bar: {
      onlyShowBarOnScroll: false,
      keepShow: true,
      background: '#93979B',
      minSize: 0,
      size: '4px',
      disable: false
    }
  },
});

Vue.use(VTooltip, {
  popover:{
    defaultPlacement: 'bottom',
    defaultBaseClass: 'tooltip popover',
    defaultOpenClass: 'open',
    defaultDelay: { show: 200, hide: 100 },
    defaultTrigger: 'click',
    defaultHandleResize: true,
  }
});
let VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 }, VTooltip, {
  defaultHtml: false,
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')




