import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import './registerServiceWorker';
import 'vue-material-design-icons/styles.css';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-117426148-1'
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
