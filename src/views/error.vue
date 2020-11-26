/* eslint-disable */
<template>
  <v-container
    fluid
    class="pa-0 ma-0"
  >
      <v-row class="mt-15 mb-15">
        <v-col
        >
          <h1
            class="text-center text-h3  text-md-h2 font-weight-bold"
            aria-label="Intro text"
          >
            Oops, we think you might be lost.
          </h1>
          <h3 class="text-center text-md-h4 mt-10">404 error</h3>
      </v-col>
    </v-row>
    <v-row
      id="getInTouch"
      class="mx-0 mx-md-6 mx-lg-16 mb-12 mt-5"
    >
      <v-col cols="12">
        <GetInTouch :contact="contact" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logos from "../components/Logos";
import GetInTouch from "../components/GetInTouch";
// import CaseStudySmallCard from "../components/CaseStudySmallCard";

import router from '../router';

let title = 'Error page | Confido',
    desc = 'Oops, we think you might be lost. ',
    url = 'https://confidotalent.com' + (router.history.current.path === '/' ? '' : router.history.current.path),
    image = '/images/meta/home.png';

export default {
  name: "Error",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: title,
    meta: [
      { name: 'Description', content: desc },

      { property: 'og:title', content: title},
      { property: 'og:url', content: url},
      { property: 'og:image', content: image},
      { property: 'og:description', content: desc},

      { property: 'twitter:domain', content: url},
      { property: 'twitter:title', content: title},
      { property: 'twitter:description', content: desc},
      { property: 'twitter:image', content: image},
      { property: 'twitter:url', content: url},
      { property: 'twitter:label1', content: title},  
    ]
  },
  components: {
    Logos,
    GetInTouch,
    // CaseStudySmallCard
  },
  data() {
    return {
      contact: []
    };
  }
};
</script>
