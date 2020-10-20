/* eslint-disable */
<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row class="text-left" no-gutters>
      <v-img
        src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
        max-height="440"
        :aspect-ratio="1.7"
        gradient="to top right, rgba(100,115,201,1), rgba(25,32,72, .7)"
      >
        <v-row class="mx-0 mx-md-6 mx-lg-16 mt-0 mt-md-6">
          <v-col cols="12" md="6">
            <h1 class="font-weight-bold mb-3 mt-10 overline white--text">
              Featured
            </h1>
            <h2
              class="display font-weight-bold mb-3 white--text"
              aria-label="Confido's posts"
            >
              Startup Hiring Trends - 2020 Edition
            </h2>
            <v-text class="white--text"
              >Are the perceptions and reality of hiring in the tech startup
              space one and the same? Are the challenges you face hiring the
              best talent unique to you, or universal?"</v-text
            >
            <v-row class="mt-8 ml-0">
              <v-btn
                class="mb-4 btn--outlined font-weight-bold px-8 py-6"
                outlined
                color="white"
                rounded
                to="/blah"
                >Read more</v-btn
              >
            </v-row>
          </v-col>
          <v-col cols="12" md="6" class="d-none d-md-flex justify-center">
            <v-card class="px-4 my-12 mx-auto" width="400">
              <h3 class="text-center px-0 py-8 mt-8 mx-4">
                Career hacks, news and views, straight from startups and us, to
                you.
              </h3>
              <v-card-actions class="mx-auto justify-center">
                <v-btn
                  class="mb-4 btn--outlined font-weight-bold mx-auto px-8 py-6"
                  outlined
                  color="accent"
                  rounded
                  href="https://www.linkedin.com/company/confido-talent/"
                  target="_blank"
                  >View on LinkedIn</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-img>
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
    PostCards
  },
  props: {
    post: {
      type: String,
      default: "No posts are loaded"
    }
  },
  data() {
    return {
      loading: false,
      posts: []
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
