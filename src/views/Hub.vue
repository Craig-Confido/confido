/* eslint-disable */
<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row class="text-left" no-gutters>
      <v-col v-for="featured in featuredposts.slice(0,1)" :key="featured._id" cols="12">
        <FeaturedPost :featured="featured" />
      </v-col>
    </v-row>
    <section class="ma-4 ma-lg-16">
      <v-row class="mt-3 mb-5">
        <v-col v-for="post in posts" :key="post._id" cols="12" md="4">
          <PostCards :post="post" class="justify-center" />
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import PostCards from "../components/PostCards";
import FeaturedPost from "../components/FeaturedPost";

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
    PostCards,
    FeaturedPost
  },
  data() {
    return {
      loading: false,
      posts: {},
      featuredposts: {}
    };
  },
  created() {
    this.fetchPostData();
    this.fetchFeaturedData();
  },
  methods: {
    fetchPostData() {
      this.error = this.post = null;
      this.loading = true;
      bucket
        .getObjects({
          type: "posts",
          props: "_id,slug,title,content,metadata"
        })
        .then(data => {
          const posts = data.objects;
          this.loading = false;
          this.posts = posts;
        });
    },
    fetchFeaturedData() {
      this.error = this.featuredposts = null;
      this.loading = true;
      bucket
        .getObjects({
          type: "featuredposts",
          props: "_id,slug,title,content,metadata"
        })
        .then(data => {
          const featuredposts = data.objects;
          this.loading = false;
          this.featuredposts = featuredposts;
        });
    }
  }
};
</script>
