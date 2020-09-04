<template>
<v-card :color="`${card.color}`" class="pa-8 my-2 white--text text-left card-shadow">
  <v-card-title class="headline font-weight-bold">
    {{ card.title }}
  </v-card-title>
  <v-row class="mx-1">
    <v-col cols="6">
      <v-icon class="white--text text-lg-h2">{{ card.icontl }}</v-icon>
      <h3>{{ card.texttl }}</h3>
    </v-col>
    <v-col cols="6">
      <v-icon class="white--text text-lg-h2">{{ card.icontr }}</v-icon>
      <h3>{{ card.texttr }}</h3>
    </v-col>
  </v-row>
  <v-row class="mx-1">
    <v-col cols="6">
      <v-icon class="white--text text-lg-h2">{{ card.iconbl }}</v-icon>
      <h3>{{ card.textbl }}</h3>
    </v-col>
    <v-col cols="6">
      <v-icon class="white--text text-lg-h2">{{ card.iconbr }}</v-icon>
      <h3>{{ card.textbr }}</h3>
    </v-col>
  </v-row>
</v-card>
</template>

<script>
export default {
  name: "ColorCard",
  props: {
    card: {
      type: String,
      default: 'No nav is loaded'
    }
  }
};
</script>
