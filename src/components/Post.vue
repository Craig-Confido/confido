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
        <h1 class="title my-4" color="primary--text">
          {{ post.title }}
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-left pl-lg-12">
      <v-col cols="6" md="2">
        <v-chip class="tag px-4" color="secondary">
          <strong>{{ post.metadata.tag }}</strong>
        </v-chip>
      </v-col>
      <v-col cols="6" md="2">
        <p class="ml-2 mt-1">{{ post.metadata.publicationdate }}</p>
      </v-col>
      <v-col cols="6" md="2">
        <p class="ml-2 mt-1">{{ post.metadata.author }}</p>
      </v-col>
      <v-col cols="6" md="2">
        <p class="ml-2 mt-1">{{ post.metadata.readtime }}</p>
      </v-col>
      <v-spacer />
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
  </v-main>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      default: "No posts are loaded"
    }
  }
};
</script>
