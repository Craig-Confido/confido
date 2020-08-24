import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

  export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#000151", 
          secondary: "#FF65BD", 
          accent: "#7B7DF6",
          success: "#3EC1B9"
        },
      },
    },
  })