<template>
<v-card :to="`${post.url}`" :target="`${post.ext}`" rel="noreferrer" hover class="text-left">
  <v-img :src="`${post.img}`" height="340" />
  <h1 class="title ma-4" color="primary--text">
    {{ post.title }}
  </h1>
  <v-card-actions class="mx-auto">
    <v-chip class="tag px-4 py-2" color="secondary">
      <strong>{{ post.tag }}</strong>
    </v-chip>
  </v-card-actions>
  <v-card-text color="primary--text">
    {{ post.text }}
  </v-card-text>
  <v-card-actions class="mx-auto justify-center">
    <v-btn class="mb-4 btn--outlined font-weight-bold" outlined color="accent" rounded width="150" height="50">
      Read more
    </v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  name: "Posts",
  props: {
    post: {
      type: String,
      default: 'No posts are loaded'
    }
  }
};
</script>
