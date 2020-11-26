import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
// import VueAnalytics from 'vue-ua';
import VueTagManager from "vue-tag-manager"


import router from './router';
import './registerServiceWorker';
import 'vue-material-design-icons/styles.css';
import VueMeta from 'vue-meta';

Vue.config.productionTip = false;

// Initiate Synamic Meta Tags
Vue.use(VueMeta);

// Install VUE GTM -> this will handle all analytics and marketing tags
Vue.use(VueTagManager, {
  gtmId: 'GTM-M5TFCP2'
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
