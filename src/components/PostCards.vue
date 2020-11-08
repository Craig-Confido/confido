/* eslint-disable */
<template>
  <v-card :to="`/hub/post/${post.slug}`" hover class="text-left card-shadow">
    <v-img :src="post.metadata.hero.imgix_url" height="240" />
    <h1 class="title mt-4 mb-2 mx-4 px-4" color="primary--text">
      {{ post.title }}
    </h1>
    <div class="mx-4 ml-4 px-4">
      <v-row class="text-left">
      <v-col cols="4">
        <v-chip class="tag px-4" color="secondary">
          <strong>{{ post.metadata.tag }}</strong>
        </v-chip>
      </v-col>
      <v-col cols="8">
        <p class="mt-1 caption">{{ post.metadata.readtime }}</p>
      </v-col>
    </v-row>
    </div>
    <v-card-text
      color="primary--text"
      class="px-8"
      v-html="post.metadata.content"
    />
    <v-card-actions class="mx-auto justify-center">
      <v-btn
        class="mb-4 btn--outlined font-weight-bold"
        outlined
        color="accent"
        rounded
        width="150"
        height="50"
        >Read more</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PostCards",
  props: {
    post: {
      type: Object,
      default: "No posts are loaded"
    }
  }
};
</script>
