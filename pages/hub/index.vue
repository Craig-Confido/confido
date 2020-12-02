<template>
  <v-container
    fluid
    class="pa-0 ma-0"
  >
    <v-row
      class="text-left"
      no-gutters
      v-if="featuredposts"
    >
      <v-col
        
        v-for="(featured, index) in featuredposts.slice(0,1)"
        :key="featured._id + index"
        cols="12"
      >
        <FeaturedPost :featured="featured" />
      </v-col>
    </v-row>
    <section class="ma-4 ma-lg-16">
      <!-- <v-row class="my-4">
        <v-col cols="6" md="2" v-for="post in posts" :key="post._id">
          <v-chip class="tag px-4 mx-0" color="secondary">
            <strong>{{ post.metadata.tag }}</strong>
          </v-chip>
        </v-col>
      </v-row> -->
      <v-row class="mt-3 mb-5" v-if="blogs">
        <v-col
          v-for="post in blogs" :key="post.id"
          cols="12"
          md="4"
        >
          
        <!-- <v-col
          v-for="post in getObjects.objects" :key="post.title"
          cols="12"
          md="4"
        > -->
          <PostCards
            :post="post"
            class="justify-center"
          />
        </v-col>
      </v-row>
    </section>
    <v-row
      class="my-16 full-width-green"
      no-gutters
      style="height: 8px"
    />
    <v-row
      id="getInTouch"
      class="mx-0 mx-md-6 mx-lg-16 mb-12"
    >
      <v-col cols="12">
        <GetInTouch :contact="contact" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostCards from "../../components/PostCards";
import FeaturedPost from "../../components/FeaturedPost";
import GetInTouch from "../../components/GetInTouch";

let title = 'Hub',
    desc = "Our knowledge hub is a one-stop shop for all things Tech for Good. Explore our hub to find Founder stories and the latest news on Tech and Product hiring.",
    url = 'https://confidotalent.com/hub',
    image = 'https://confidotalent.com/images/meta/home.png';

// HACK -> To get Featured posts
const Cosmic = require("cosmicjs");
const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: "confido",
  read_key: "0O6acZ2ATKQSdKr8rLb5b489Kxg4yNPQRvVii3KCL8T8atx3gn"
});

export default {
   computed: {
      blogs(){
        return this.$store.getters.getBlog
      }
  },
  name: "Hub",
  head: {
    title: title,
    meta: [
      { hid: 'description', name: 'description', content: desc },

      { hid: 'og:title', property: 'og:title', content: title},
      { hid: 'og:url', property: 'og:url', content: url},
      { hid: 'og:image', property: 'og:image', content: image},
      { hid: 'og:description', property: 'og:description', content: desc},

      { property: 'twitter:domain', content: url},
      { hid: 'twitter:title', property: 'twitter:title', content: title},
      { hid: 'twitter:description', property: 'twitter:description', content: desc},
      { hid: 'twitter:image', property: 'twitter:image', content: image},
      { hid: 'twitter:url', property: 'twitter:url', content: url},
      { hid: 'twitter:label1', property: 'twitter:label1', content: title},  
    ], link: [ { rel: 'canonical', href: url} ]
  },
  contact: [],
  components: {
    PostCards,
    FeaturedPost,
    GetInTouch
  },
  data() {
    return {
      loading: false,
      contact: [],
      featuredposts: {}
    };
  },
  created() {
    this.fetchFeaturedData();
  },
  methods: {
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
