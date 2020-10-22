/* eslint-disable */
<template>
  <v-card
    color="white"
    class="pa-8 text-left card-shadow"
  >
  <v-row>
    <v-col cols="12" md="2">
        <img :src="`${card.image}`" width="150" />
        <h5 class="text-h6 mt-4">{{ card.subtitle }}</h5>
        <v-card v-if="card.tech == true" flat color="accent" class="mt-2">
          <v-card-title class="white--text">{{ card.boxOneTitle }}</v-card-title>
          <v-card-text>
          <p class="white--text my-0">{{ card.boxOneTextOne }}</p>
          <p class="white--text my-0">{{ card.boxOneTextTwo }}</p>
          <p class="white--text my-0">{{ card.boxOneTextThree }}</p>
          <p class="white--text my-0">{{ card.boxOneTextFour }}</p>
          <p class="white--text my-0">{{ card.boxOneTextFive }}</p>
          <p class="white--text my-0">{{ card.boxOneTextSix }}</p>
          </v-card-text>
        </v-card>
        <v-card v-if="card.product == true" flat color="success" class="mt-2">
          <v-card-title class="white--text">{{ card.boxTwoTitle }}</v-card-title>
          <v-card-text>
          <p class="white--text my-0">{{ card.boxTwoTextOne }}</p>
          <p class="white--text my-0">{{ card.boxTwoTextTwo }}</p>
          <p class="white--text my-0">{{ card.boxTwoTextThree }}</p>
          <p class="white--text my-0">{{ card.boxTwoTextFour }}</p>
          <p class="white--text my-0">{{ card.boxTwoTextFive }}</p>
          <p class="white--text my-0">{{ card.boxTwoTextSix }}</p>
          </v-card-text>
        </v-card>
        <!-- <div class="text-center">
          <v-btn class="btn--outlined font-weight-bold px-8 py-4 my-8" outlined rounded color="accent" @click="card.showing = false">Back</v-btn>
        </div> -->
    </v-col>
    <v-col cols="12" md="10">
      <h2 class="text-h6 mx-0 mx-md-6 mx-lg-16">{{ card.title }}</h2>
        <v-row class="primary--text mx-auto text-center mt-10 mb-10">
            <v-col cols="6" sm="4">
              <v-icon class="secondary--text ml-4 text-h2"
                >{{ card.icon1 }}</v-icon
              >
              <h3>{{ card.label1 }}</h3>
            </v-col>
            <v-col cols="6" sm="4">
              <v-icon class="secondary--text ml-4 text-h2"
                >{{ card.icon2 }}</v-icon
              >
              <h3>{{ card.label2 }}</h3>
            </v-col>
            <v-col cols="6" sm="4">
              <v-icon class="secondary--text ml-4 text-h2"
                >{{ card.icon3 }}</v-icon
              >
              <h3>{{ card.label3 }}</h3>
            </v-col>
          </v-row>
          <v-row
              class="mt-8 mx-0 mx-md-6 mx-lg-16"
              align="center"
              justify="center"
            >
              <v-card-text class="text-h6 text--primary">
                <em>{{ card.quote }} </em>
                <p class="secondary--text mt-2">
                  <strong>{{ card.person }}</strong>
                </p>
              </v-card-text>
          </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CaseStudySmallCard",
  props: {
    card: {
      type: String,
      default: "No text is loaded",
    },
  },
};
</script>
