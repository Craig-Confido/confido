<template>
  <v-card
    :to="`/hub/${post.slug}`"
    hover
    class="text-left card-shadow d-flex flex-column justify-between pb-4 main-post"
    height="600"
  >
    <v-chip v-if="post.filter.case_study === true" class="case_study" :ripple="false">Case study</v-chip>

    <v-img
      v-if="post.metadata"
      :src="post.metadata.hero.imgix_url"
      height="240"
    />
    <h1 class="title mt-4 mb-2 mx-4 px-4" color="primary--text">
      {{ post.title }}
    </h1>
    <v-row class="text-left mx-8" align-content="center">
      <v-chip class="pa-4" color="secondary">
        <strong>{{ post.metadata.tag }}</strong>
      </v-chip>
      <p class="pl-2 pt-1 caption">
        {{ post.metadata.readtime }}
      </p>
    </v-row>
    <v-card-text
      color="primary--text"
      class="px-8 mt-0 pt-0"
      v-html="post.metadata.content"
    />
    <v-card-actions class="mx-auto">
      <v-btn
        class="btn--outlined font-weight-bold"
        outlined
        color="accent"
        rounded
        width="150"
        height="50"
      >
        Read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PostCards",
  props: {
    post: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
