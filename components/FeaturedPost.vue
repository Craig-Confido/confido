<template>
    <div
        v-if="featured"
    >
  <v-img
    :src="featured.metadata.hero.imgix_url"
    max-height="440"
    :aspect-ratio="1.7"
    gradient="to top right, rgba(100,115,201,1), rgba(25,32,72, .7)"
  >
    <v-row class="mx-0 mx-md-6 mx-lg-16 mt-0 mt-md-6">
      <v-col
        cols="12"
        md="6"
      >
        <h1 class="font-weight-bold mb-3 mt-10 overline white--text">
          Featured
        </h1>
        <h2
          class="display font-weight-bold mb-3 white--text"
          aria-label="Confido's posts"
        >
          {{ featured.title }}
        </h2>
        <div
          class="white--text"
          v-html="featured.metadata.content"
        />
        <v-row class="mt-8 ml-0">
          <v-btn
            class="mb-4 btn--outlined font-weight-bold px-8 py-6"
            outlined
            color="white"
            rounded
            :to="`/hub/${featured.slug}`"
          >
            Read more
          </v-btn>
        </v-row>
      </v-col>
      
    </v-row>
  </v-img>
  </div>
</template>

<script>
export default {
  name: "FeaturedPost",
  props: {
    featured: {
      type: Object,
      default: () => {},
    }
  },
};
</script>
