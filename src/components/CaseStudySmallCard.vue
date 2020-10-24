/* eslint-disable */
<template>
  <v-card
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
    <v-col cols="12" md="9">
      <h2 class="text-h6 mx-0 mx-md-6 mx-lg-16 white--text">{{ card.title }}</h2>
        <!-- <div class="text-center">
          <v-btn class="btn--outlined font-weight-bold px-8 py-4 my-8" outlined rounded color="accent" @click="card.showing = false">Back</v-btn>
        </div> -->
    </v-col>
  </v-row>
  </div>
  <v-row class="px-8">
        <v-row class="primary--text mx-auto text-center mt-10 mb-4">
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
          <v-row>
            <v-col cols="12" md="2" class="text-center">
              <div style="height: 75px; width: 75px; border-radius: 1000px;  background-color: #ffffff;" class="mx-auto">
                <p class="primary--text text-h3 pt-3"><strong>{{ card.hiresMade }}</strong></p>
              </div>
              <h3 class="primary--text mt-2"><strong>Hires made <br />by Confido</strong></h3>
            </v-col>
            <v-col cols="12" md="7">
              <v-card v-if="card.tech == true" flat color="white" class="mt-2 br-15">
                <v-row class="ml-1 mr-3">
                <v-card-title class="primary--text">{{ card.boxOneTitle }}</v-card-title>
                <v-spacer />
                <v-icon color="secondary">mdi-cog</v-icon>
                </v-row>
                <v-card-text>
                  <v-row>
                  <v-col cols="12" md="6">
                    <p class="primary--text my-0">{{ card.boxOneTextOne }}</p>
                    <p class="primary--text my-0">{{ card.boxOneTextTwo }}</p>
                    <p class="primary--text my-0">{{ card.boxOneTextThree }}</p>
                    <p class="primary--text my-0">{{ card.boxOneTextFour}}</p>
                  </v-col>
                  <v-col cols="12" md="6">
                    <p class="primary--text my-0">{{ card.boxOneTextFive }}</p>
                    <p class="primary--text my-0">{{ card.boxOneTextSix }}</p>
                    <p class="primary--text my-0">{{ card.boxOneTextSeven }}</p>
                  </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="3">
              <v-card v-if="card.product == true" flat color="white" class="mt-2 br-15">
                <v-row class="ml-1 mr-3">
                  <v-card-title class="primary--text">{{ card.boxTwoTitle }}</v-card-title>
                  <v-spacer />
                  <v-icon color="secondary">mdi-lightbulb</v-icon>
                </v-row>
                  <v-card-text>
                    <p class="primary--text my-0">{{ card.boxTwoTextOne }}</p>
                    <p class="primary--text my-0">{{ card.boxTwoTextTwo }}</p>
                    <p class="primary--text my-0">{{ card.boxTwoTextThree }}</p>
                    <p class="primary--text my-0">{{ card.boxTwoTextFour }}</p>
                    <p class="primary--text my-0">{{ card.boxTwoTextFive }}</p>
                    <p class="primary--text my-0">{{ card.boxTwoTextSix }}</p>
                  </v-card-text>
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
              </v-card-text>
          </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

/* eslint-disable */
<!--<template>
  <!-- <v-card color="#f1f1ff">
    <v-card-text class="text-left mt-4 px-8 pt-0"> -->
      <!-- <v-row class="primary--text mx-auto text-center mt-4 pb-8">
        <v-col cols="6" sm="3">
          <v-icon class="secondary--text mb-4 text-h2"
            >{{ card.result1Icon }}</v-icon
          >
          <h3>{{ card.result1Text }}</h3>
        </v-col>
        <v-col cols="6" sm="3">
          <v-icon class="secondary--text mb-4 text-h2"
            >{{ card.result2Icon }}</v-icon
          >
          <h3>{{ card.result2Text }}</h3>
        </v-col>
        <v-col cols="6" sm="3">
          <v-icon class="secondary--text mb-4 text-h2"
            >{{ card.result3Icon }}</v-icon
          >
          <h3>{{ card.result3Text }}</h3>
        </v-col>
        <v-col cols="6" sm="3">
          <v-icon class="secondary--text mb-4 text-h2"
            >{{ card.result4Icon }}</v-icon
          >
          <h3>{{ card.result4Text }}</h3>
        </v-col>
      </v-row> -->

        <!-- <v-row>
          <v-col cols="12" md="2" class="text-center">
            <div style="height: 75px; width: 75px; border-radius: 1000px;  background-color: #ffffff;" class="mx-auto">
              <p class="success--text text-h3 pt-3"><strong>{{ card.hiresMade }}</strong></p>
            </div>
              <h3 class="primary--text mt-2"><strong>Hires made <br />by Confido</strong></h3>
          </v-col>
          <v-col cols="12" md="2">
            <h3 class="primary--text">{{ card.solution1Title }}</h3>
            <p class="primary--text">{{ card.solution1 }}</p>
          </v-col>
          <v-col cols="12" md="8">
            <p class="primary--text">{{ card.solution1Text }}</p>
          </v-col>
        </v-row>
    </v-card-text>
  </v-card>
</template> -->

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
