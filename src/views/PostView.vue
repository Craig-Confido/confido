<template>
  <v-row class="mx-4 mx-lg-16">
    <v-col cols="12" md="12">
      <v-row class="text-left">
        <v-btn 
            text
            @click="$router.go(-1)" 
          >
          <v-icon class="mr-2">
            mdi-arrow-left
          </v-icon>
          Back to all posts
        </v-btn>
      </v-row>
      <Post :post="post" class="justify-center" />
    </v-col>
  </v-row>
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