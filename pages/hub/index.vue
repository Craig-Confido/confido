<template>
  <v-container
    fluid
    class="pa-0 ma-0"
  >


    <v-row
      class="text-left FeaturedPosts_list"
      no-gutters
      v-if="blogs.FeaturedPosts"
    >

      <v-carousel
        hide-delimiter-background
        hide-delimiters
        light
        :show-arrows-on-hover="true"
      >
        <v-carousel-item
          v-for="(featured, index) in blogs.FeaturedPosts"
          :key="featured._id + index"
        >
        <FeaturedPost :featured="featured"/>
        </v-carousel-item>
      </v-carousel>

<v-col
        cols="12"
        md="6"
        class="d-none d-md-flex justify-center"
        style="position:absolute; right:7.5%; width:auto;"

      >
        <v-card
          class="px-4 my-12 mx-auto"
          width="400"
        >
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
            >
              View on LinkedIn
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>

    <style>
      .FeaturedPosts_list .v-responsive__content > .v-image.v-responsive {
        height:100%;
      }
      .post_list > div.show {
        visibility: visible;
        display:flex;
      }
      .post_list > div {
        visibility: hidden;
        display:none;

      }
      .post_list .v-card {
        position:relative;
        overflow:hidden;
      }
      .post_list .v-card .v-chip.case_study {
        position:absolute;
        top:15px;
        left:15px;
        z-index:1000;
      }
      .post_list.case_study_list .v-card .v-chip.case_study {
        display:none;
      }
      </style>
    <section class="ma-4 ma-lg-16">

      <v-chip v-on:click="filter = 'all'" :class="{ primary: filter==='all' }">All</v-chip>
      <v-chip v-on:click="filter = 'case_study'" :class="{ primary: filter==='case_study' }">Case studies</v-chip>
      <v-chip v-on:click="filter = 'artciles'" :class="{ primary: filter==='artciles' }">Articles</v-chip>
      
      <v-row class="mt-3 mb-5 post_list"
      :class="{ case_study_list: filter === 'case_study' }"
      v-if="blogs.blogList">
        <v-col
          v-for="post in blogs.blogList" 
          :key="post.id"
          cols="12"
          md="4"
          :class="{ show: post.filter[`${filter}`]===true }"
        >
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

export default {
   computed: {
      blogs(){
        // Get all blog posts
        let blogs = this.$store.getters.getBlog;
        let FeaturedPosts = [];
        let blogList = [];
        // Filter Featured
        blogs.forEach(function (blog) {
          blog.filter = {
            all:true
          }
          if(blog.metadata.featured && blog.metadata.featured.length){
              FeaturedPosts.push(blog);   
          } else {
            // Featured Articles
            if(blog.metadata.featured && blog.metadata.featured.length) blog.filter.featured = true;
            // IF case study || articles
            if(blog.metadata.case_study && blog.metadata.case_study.length) {
              blog.filter.case_study = true
            } else {
              blog.filter.artciles = true
            }
            blogList.push(blog);  
          }
        });
        return {blogList: blogList, FeaturedPosts: FeaturedPosts};
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
      filter: "all",
      loading: false,
      contact: []
    };
  },
};
</script>
