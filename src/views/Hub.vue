<template>
<v-container fluid class="pa-0 ma-0">
  <v-row class="text-left" no-gutters>
    <v-img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" height="340" gradient="to top right, rgba(100,115,201,1), rgba(25,32,72, .7)">
      <v-row class="mx-0 mx-md-6 mx-lg-16">
        <v-col cols="12" md="6">
          <h1 class="font-weight-bold mb-3 mt-10 overline white--text">
            Featured
          </h1>
          <h2 class="display font-weight-bold mb-3 white--text" aria-label="Confido's posts">
            Startup Hiring Trends - 2020 Edition
          </h2>
          <v-text class="white--text">
            Are the perceptions and reality of hiring in the tech startup space one and the same? Are the challenges you face hiring the best talent unique to you, or universal?"
          </v-text>
          <v-row class="mt-8">
            <v-btn class="mb-4 btn--outlined font-weight-bold" outlined color="white" rounded width="150" height="50">
              Read more
            </v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="justify-center">
          <v-card class="px-4 my-12 mx-auto" width="400">
            <h3 class="text-center px-0 py-8 mt-8 mx-4">
              Career hacks, news and views, straight from startups and us, to you.
            </h3>
            <v-card-actions class="mx-auto justify-center">
              <v-btn class="mb-4 btn--outlined font-weight-bold" outlined color="accent" rounded width="150" height="50">
                Subscribe
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!--<v-row class="mx-0 mx-md-6 mx-lg-16">
        <v-col cols="12" sm="6" class="px-4 mx-4 px-lg-16 mx-lg-16">
          <h1 class="font-weight-bold mb-3 mt-10 overline white--text">
            Featured
          </h1>
          <h2 class="display font-weight-bold mb-3 white--text" aria-label="Confido's posts">
            Startup Hiring Trends - 2020 Edition
          </h2>
          <v-text class="white--text">
            Are the perceptions and reality of hiring in the tech startup space one and the same? Are the challenges you face hiring the best talent unique to you, or universal?"
          </v-text>
          <v-row class="mt-8">
            <v-btn class="mb-4 btn--outlined font-weight-bold" outlined color="white" rounded width="150" height="50">
              Read more
            </v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" sm="4" class="px-4 mx-4 px-lg-16 mx-lg-16">
          <v-card class="px-4">
            <v-card-subtitle>
              Career hacks, news and views, straight from startups and us, to you.
            </v-card-subtitle>
            <v-card-actions class="mx-auto justify-center">
              <v-btn class="mb-4 btn--outlined font-weight-bold" outlined color="accent" rounded width="150" height="50">
                Subscribe
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>-->
    </v-img>
  </v-row>
  <section class="ma-4 ma-lg-16">
    <v-row class="mt-3 mb-5">
      <v-col v-for="post in posts.slice(1,7)" :key="`${post.id}`" cols="12" md="4">
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
