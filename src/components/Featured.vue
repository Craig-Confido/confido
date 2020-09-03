<template>
<v-container>
  <v-img :src="`${feature.img}`" height="340" />
  <v-card-text color="white" class="overline">
    Featured
  </v-card-text>
  <h1 class="title ma-4" color="primary--text">
    {{ feature.title }}
  </h1>
  <v-card-text color="primary--text">
    {{ feature.text }}
  </v-card-text>
  <v-row class="mx-auto justify-center">
    <v-btn :to="`${feature.url}`" class="mb-4 btn--outlined font-weight-bold" outlined color="accent" rounded width="150" height="50">
      Read more
    </v-btn>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: "Featured",
  props: {
    feature: {
      type: String,
      default: 'No posts are loaded'
    }
  }
};
</script>
