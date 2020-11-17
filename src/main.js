import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueAnalytics from 'vue-ua';
import router from './router';
import './registerServiceWorker';
import 'vue-material-design-icons/styles.css';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  // [Required] The name of your app as specified in Google Analytics.
  appName: 'Confido (new)',
  // [Required] The version of your app.
  appVersion: '1.0',
  // [Required] Your Google Analytics tracking ID.
  trackingId: 'G-PH3Y6TK0PQ',
  // If you're using vue-router, pass the router instance here.
  vueRouter: router,
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
