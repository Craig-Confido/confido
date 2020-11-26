<template>
  <v-row class="mx-4 mx-lg-16">
    <v-col
      cols="12"
      md="12"
    >
      <v-row class="text-left">
        <v-btn 
          text
          to="/hub" 
        >
          <v-icon class="mr-2">
            mdi-arrow-left
          </v-icon>
          Back to all posts
        </v-btn>
      </v-row>
      <Featured :featuredposts="featuredposts" />
    </v-col>
  </v-row>
</template>

<script>
import Featured from "../components/Featured";

const Cosmic = require("cosmicjs");
const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: "confido",
  read_key: "0O6acZ2ATKQSdKr8rLb5b489Kxg4yNPQRvVii3KCL8T8atx3gn"
});

export default {
  name: "FeaturedPostView",
  components: {
    Featured
  },
  data() {
    return {
      loading: false,
      featuredposts: {},
      slug: ""
    };
  },
  created() {
    this.slug = this.$route.params.slug;
    this.fetchFeaturedData();
  },
  methods: {
    fetchFeaturedData() {
      this.error = this.featuredposts = null;
      this.loading = true;
      bucket
        .getObject({
          slug: this.slug
        })
        .then(data => {
          console.log(data);
          this.featuredposts = data.object;
          this.loading = false;
          // this.featuredposts = featuredposts;
        });
    }
  }
};
</script>