<template>
  <v-container class="blog-900">
    <section class="ma-4 ma-lg-16">
      <v-row class="mt-3 mb-5">
        <v-col cols="12" md="12">
          <Post :post="post" class="justify-center" />
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import Post from "../components/Post";
const Cosmic = require("cosmicjs");
const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: "confido",
  read_key: "0O6acZ2ATKQSdKr8rLb5b489Kxg4yNPQRvVii3KCL8T8atx3gn"
});

export default {
  name: "PostView",
  components: {
    Post
  },
  data() {
    return {
      loading: false,
      post: {},
      slug: ""
    };
  },
  created() {
    this.slug = this.$route.params.slug;
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      bucket
        .getObject({
          slug: this.slug
        })
        .then(data => {
          console.log(data);
          this.post = data.object;
          this.loading = false;
          this.posts = posts;
        });
    }
  }
};
</script>