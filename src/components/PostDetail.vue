/* eslint-disable */
<template>
  <v-container class="blog-900">
    <v-content :v-model="findBySlug(slug)" :key="post._id">
      <v-img
        :src="post.metadata.hero.imgix_url"
        height="240"
        class="img post-shadow"
      />
      <v-row class="text-left pl-lg-12">
        <v-col cols="6">
          <h1 class="title my-4" color="primary--text">
            {{ post.title }}
          </h1>
        </v-col>
        <v-col cols="6">
          <v-chip class="tag px-4 py-2 my-4" color="secondary">
            <strong>{{ post.metadata.tag }}</strong>
          </v-chip>
        </v-col>
      </v-row>
      <v-row class="text-left px-lg-12">
        <v-col cols="12">
          <section
            color="primary--text"
            v-html="post.content"
            class="justify-left"
          />
        </v-col>
      </v-row>
    </v-content>
  </v-container>
</template>

<script>
const Cosmic = require("cosmicjs");
const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: "confido",
  read_key: "0O6acZ2ATKQSdKr8rLb5b489Kxg4yNPQRvVii3KCL8T8atx3gn",
});

export default {
  name: "PostDetail",
  data() {
    return {
      loading: false,
      posts: null,
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.post = this.findBySlug(this.$route.params.slug);
  },
  methods: {
    findBySlug(slug) {
      for (var i = 0; i < this.post.length; i++);
      {
        if (slug === this.post[i].slug) return this.post[i];
      }
      return null;
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      bucket
        .getObjects({
          type: "posts",
          props: "_id,slug,title,content,metadata", // Limit the API response data by props
        })
        .then((data) => {
          const posts = data.objects;
          this.loading = false;
          this.posts = posts;
        });
    },
  },
};
</script>
