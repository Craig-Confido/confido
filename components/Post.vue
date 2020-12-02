<template>
  <v-main class="blog-900 mt-0 pt-4" v-if="post">
    <v-img
      v-if="post.metadata"
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
          v-if="post.metadata"
        >
          <strong>{{ post.metadata.tag }}</strong>
        </v-chip>
      </v-col>
      <v-col
        cols="6"
        md="2"
        v-if="post.metadata"
      >
        <p class="ml-2 mt-1">
          {{ post.metadata.publicationdate }}
        </p>
      </v-col>
      <v-col
        cols="6"
        md="2"
        v-if="post.metadata"
      >
        <p class="ml-2 mt-1">
          {{ post.metadata.author }}
        </p>
      </v-col>
      <v-col
        cols="6"
        md="2"
        v-if="post.metadata"
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
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      default: () => {"No posts are loaded"}
    }
  },
  head() {
        let title = this?.post?.metadata?.seo_metatitle,
        desc = this?.post?.metadata?.seo_metadescription,
        url = 'https://confidotalent.com/hub/' + this?.post?.slug,
        image = this?.post?.metadata?.seo_metaimage?.url;
      return {
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
      }
  }
};
</script>
