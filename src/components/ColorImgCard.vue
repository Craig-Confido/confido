<template>
<v-card :color="`${card.color}`" class="pa-8 my-2 white--text text-left card-shadow">
  <v-card-title class="headline font-weight-bold">
    {{ card.title }}
  </v-card-title>
  <v-row class="mx-1">
    <v-col cols="6">
      <v-img :src="`${card.imgtl}`" width="150" contain class="startups" />
    </v-col>
    <v-col cols="6">
      <v-img :src="`${card.imgtr}`" width="150" contain class="startups" />
    </v-col>
  </v-row>
  <v-row class="mx-1">
    <v-col cols="6">
      <v-img :src="`${card.imgbl}`" width="150" contain class="startups" />
    </v-col>
  </v-row>
</v-card>
</template>

<script>
export default {
  name: "ColorImgCard",
  props: {
    card: {
      type: String,
      default: 'No image is loaded'
    }
  }
};
</script>
