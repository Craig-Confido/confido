/* eslint-disable */
<template>
  <v-main class="blog-900 mt-0 pt-4">
    <v-img
      :src="post.metadata.hero.imgix_url"
      height="240"
      class="img post-shadow"
    />
    <v-row class="text-left pl-lg-12">
      <v-col cols="12">
        <h1
          class="title my-4"
          color="primary--text"
        >
          {{ post.title }}
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-left pl-lg-12">
      <v-col
        cols="6"
        md="2"
      >
        <v-chip
          class="tag px-4"
          color="secondary"
        >
          <strong>{{ post.metadata.tag }}</strong>
        </v-chip>
      </v-col>
      <v-col
        cols="6"
        md="2"
      >
        <p class="ml-2 mt-1">
          {{ post.metadata.publicationdate }}
        </p>
      </v-col>
      <v-col
        cols="6"
        md="2"
      >
        <p class="ml-2 mt-1">
          {{ post.metadata.author }}
        </p>
      </v-col>
      <v-col
        cols="6"
        md="2"
      >
        <p class="ml-2 mt-1">
          {{ post.metadata.readtime }}
        </p>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row class="text-left px-lg-12">
      <v-col cols="12">
        <section
          color="primary--text"
          class="justify-left"
          v-html="post.content"
        />
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
// import router from '../router';
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      default: () => "No posts are loaded"
    }
  },
  // not quite working yet
  // metaInfo () {
  //   let title = this?.post?.seo_metatitle,
  //       desc = "desc " + this?.post?.seo_metadescription,
  //       url = 'https://confidotalent.com' + (router.history.current.path === '/' ? '' : router.history.current.path),
  //       image = this?.post?.seo_metaimage;
  //   return {
  //     title: title,
  //     meta: [
  //       { name: 'Description', content: desc },

  //       { property: 'og:title', content: title},
  //       { property: 'og:url', content: url},
  //       { property: 'og:image', content: image},
  //       { property: 'og:description', content: desc},

  //       { property: 'twitter:domain', content: url},
  //       { property: 'twitter:title', content: title},
  //       { property: 'twitter:description', content: desc},
  //       { property: 'twitter:image', content: image},
  //       { property: 'twitter:url', content: url},
  //       { property: 'twitter:label1', content: title}, 
  //     ],
  //   }
  // }
};
</script>
