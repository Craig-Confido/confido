/* eslint-disable */
<template>
  <v-container>
    <!--<v-content v-for="(post, _id) in posts" :key="_id">-->
    <v-main>
      <v-img src="" height="240" class="img post-shadow" />
      <v-row class="text-left pl-lg-12">
        <v-col cols="6">
          <h1 class="title my-4" color="primary--text">
            {{ post.title }}
          </h1>
        </v-col>
        <v-col cols="6">
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
  </v-container>
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
