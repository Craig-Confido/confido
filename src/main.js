import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './registerServiceWorker'
import 'vue-material-design-icons/styles.css'
import * as resources from './resources/BlogFeed'
import resource from './plugins/resource'
import config from './config'

Vue.config.productionTip = false;

Vue.use(resource, {
  resources,
  endpoint: 'https://api.cosmicjs.com/v1/' + config.COSMIC_BUCKET
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
