/* eslint-disable */
<template>
  <v-card
    v-model="card.dialog"
    color="#f1f1ff"
    class=" text-left card-shadow"
  >
  <div height="250px" style="background-color:#7B7DF6;" class="mx-0 my-0" no-gutters>
  <v-row class="pa-8">
    <v-col cols="12" md="3" class="text-center">
      <img 
        :src="`${card.image}`" 
        width="200"
        contain
        eager
      />
    </v-col>
    <v-col cols="12" md="8">
      <h2 class="text-h6 mx-0 mx-md-6 mx-lg-16 white--text">{{ card.title }}</h2>
    </v-col>
    <v-col cols="1">
    <div class="mt-2">
      <v-icon large color="white" @click="$router.go()">mdi-close-circle-outline</v-icon>
      <!-- <v-icon large color="white" @click="close">mdi-close-circle-outline</v-icon> -->
    </div>
    </v-col>
  </v-row>
  </div>
  <v-row class="px-8">
        <v-row v-if="card.cols4 == true" class="primary--text mx-auto text-center mt-10 mb-4">
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >{{ card.icon1 }}</v-icon
              >
              <h3>{{ card.label1 }}</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >{{ card.icon2 }}</v-icon
              >
              <h3>{{ card.label2 }}</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >{{ card.icon3 }}</v-icon
              >
              <h3>{{ card.label3 }}</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >{{ card.icon4 }}</v-icon
              >
              <h3>{{ card.label4 }}</h3>
            </v-col>
        </v-row>
        <v-row v-else class="primary--text mx-auto text-center mt-10 mb-4">
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
          <v-row>
            <v-col cols="12" md="2" class="text-center">
              <div style="height: 75px; width: 75px; border-radius: 1000px;  background-color: #ffffff;" class="mx-auto">
                <p class="primary--text text-h3 pt-3"><strong>{{ card.hiresMade }}</strong></p>
              </div>
              <h3 class="primary--text mt-2"><strong>Hires made <br />by Confido</strong></h3>
            </v-col>
            <v-col cols="12" md="10">
              <v-card flat color="white" class="mt-2 br-15">
                <div>
                <v-row class="ml-4 mr-3">
                  <h2 class="primary--text my-4 mx-2">Overview</h2>
                </v-row>
                <v-row class="ml-4 mr-3">
                  <p class="primary--text">{{ card.overviewText }}</p>
                </v-row>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        </v-row>
          <v-row
              class="mt-8 mx-0 text-center px-8 pb-8"
              align="center"
              justify="center"
            >
              <v-card-text class="text-h6 text--primary">
                <em class="quote">{{ card.quote }} </em>
                <p class="secondary--text mt-2">
                  <strong>{{ card.person }}</strong>
                </p>
                <em class="quote" v-if="quote2">{{ card.quote2 }}</em>
                <em v-else>{{ card.quote2 }}</em>
                <p class="secondary--text mt-2" v-if="person2">
                <p v-else class="secondary--text mt-2">
                  <strong>{{ card.person2 }}</strong>
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
