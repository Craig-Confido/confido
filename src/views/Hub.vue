<template>
<v-container fluid class="pa-0 ma-0">
  <v-row class="text-left" no-gutters>
    <v-img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" height="340" gradient="to top right, rgba(100,115,201,.5), rgba(25,32,72,.9)">
      <v-col cols="12" class="px-16 mx-16">
        <h1 class="font-weight-bold mb-3 mt-10 overline white--text">
          FEATURED
        </h1>
        <h2 class="display font-weight-bold mb-3 white--text" aria-label="Confido's posts">
          Startup Hiring Trends - 2020 Edition
        </h2>
      </v-col>
    </v-img>
  </v-row>
  <section class="ma-4 ma-lg-16">
    <v-row class="mt-3 mb-5">
      <v-col v-for="post in posts.slice(1,7)" :key="`${post.id}`" cols="12" sm="4">
        <Posts :post="post" class="justify-center" />
      </v-col>
    </v-row>
  </section>
</v-container>
</template>

<script>
import Posts from "../components/Posts";

export default {
  name: "Hub",
  components: {
    Posts
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getPostsData();
  },
  methods: {
    getPostsData: function () {
      fetch('/data/hub.json')
        .then(response => response.json())
        .then(data => (this.posts = data));
    }
  }
};
</script>
