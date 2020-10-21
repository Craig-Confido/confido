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
