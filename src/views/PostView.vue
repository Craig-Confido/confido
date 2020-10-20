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
  name: "Hub",
  components: {
    Post
  },
  // props: {
  //   post: {
  //     type: Object,
  //     default: "No posts are loaded"
  //   }
  // },
  data() {
    return {
      loading: false,
      posts: {}
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      bucket
        .getObjects({
          type: "posts",
          props: "_id,slug,title,content,metadata" // Limit the API response data by props
        })
        .then(data => {
          const posts = data.objects;
          this.loading = false;
          this.posts = posts;
        });
    }
  }
};
</script>