<template>
  <v-card v-if="card" color="#f1f1ff">
    <v-img
      :src="`${card.image}`"
      height="200"
      gradient="to top right, rgba(100,115,201,1), rgba(25,32,72, .7)"
    >
      <v-row class="pt-4">
        <v-col cols="12" md="3" class="text-center">
          <v-img
            :src="`${card.logo}`"
            width="150"
            contain
            eager
            class="startups mt-16"
          />
        </v-col>
        <v-col cols="12" md="8">
          <h4 class="white--text mt-16 mr-8 text-left">
            {{ card.title }}
          </h4>
          <p class="mr-8 text-left">
            <a :href="`${card.url}`" target="_blank" class="white--text">{{
              card.url
            }}</a>
          </p>
        </v-col>
      </v-row>
    </v-img>
    <v-card-text class="text-left mt-4 px-8 pt-4">
      <h2 class="primary--text">The Situation</h2>
      <p class="primary--text mt-2">
        {{ card.brief }}
      </p>
    </v-card-text>
    <v-card flat class="px-4 pt-4 mx-4 br-15">
      <v-card-text class="text-left">
        <h2 class="primary--text">Challenges</h2>
        <v-row class="pt-4">
          <v-col cols="12" md="4">
            <h3 class="primary--text">
              {{ card.challenge1Title }}
            </h3>
            <p class="primary--text">
              {{ card.challenge1 }}
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <h3 class="primary--text">
              {{ card.challenge2Title }}
            </h3>
            <p class="primary--text">
              {{ card.challenge2 }}
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <h3 class="primary--text">
              {{ card.challenge3Title }}
            </h3>
            <p class="primary--text">
              {{ card.challenge3 }}
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card-text v-if="card.cols3 == true" class="text-left mt-4 px-8 pt-4">
      <h2 class="primary--text pb-4">The Solution</h2>
      <v-row>
        <v-col cols="12" md="2" class="text-center">
          <v-icon class="success--text text-h3">
            {{ card.solution1Icon }}
          </v-icon>
        </v-col>
        <v-col cols="12" md="2">
          <h3 class="primary--text">
            {{ card.solution1Title }}
          </h3>
        </v-col>
        <v-col cols="12" md="8">
          <p class="primary--text">
            {{ card.solution1Text }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="2" class="text-center">
          <v-icon class="success--text text-h3">
            {{ card.solution2Icon }}
          </v-icon>
        </v-col>
        <v-col cols="12" md="2">
          <h3 class="primary--text">
            {{ card.solution2Title }}
          </h3>
        </v-col>
        <v-col cols="12" md="8">
          <p class="primary--text">
            {{ card.solution2Text }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="2" class="text-center">
          <v-icon class="success--text text-h3">
            {{ card.solution3Icon }}
          </v-icon>
        </v-col>
        <v-col cols="12" md="2">
          <h3 class="primary--text">
            {{ card.solution3Title }}
          </h3>
        </v-col>
        <v-col cols="12" md="8">
          <p class="primary--text">
            {{ card.solution3Text }}
          </p>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text v-else class="text-left mt-4 px-8 pt-4">
      <h2 class="primary--text pb-4">The Solution</h2>
      <v-row>
        <v-col cols="12" md="2" class="text-center">
          <v-icon class="success--text text-h3">
            {{ card.solution1Icon }}
          </v-icon>
        </v-col>
        <v-col cols="12" md="2">
          <h3 class="primary--text">
            {{ card.solution1Title }}
          </h3>
        </v-col>
        <v-col cols="12" md="8">
          <p class="primary--text">
            {{ card.solution1Text }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="2" class="text-center">
          <v-icon class="success--text text-h3">
            {{ card.solution2Icon }}
          </v-icon>
        </v-col>
        <v-col cols="12" md="2">
          <h3 class="primary--text">
            {{ card.solution2Title }}
          </h3>
        </v-col>
        <v-col cols="12" md="8">
          <p class="primary--text">
            {{ card.solution2Text }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="2" class="text-center">
          <v-icon class="success--text text-h3">
            {{ card.solution3Icon }}
          </v-icon>
        </v-col>
        <v-col cols="12" md="2">
          <h3 class="primary--text">
            {{ card.solution3Title }}
          </h3>
        </v-col>
        <v-col cols="12" md="8">
          <p class="primary--text">
            {{ card.solution3Text }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="2" class="text-center">
          <v-icon class="success--text text-h3">
            {{ card.solution4Icon }}
          </v-icon>
        </v-col>
        <v-col cols="12" md="2">
          <h3 class="primary--text">
            {{ card.solution4Title }}
          </h3>
        </v-col>
        <v-col cols="12" md="8">
          <p class="primary--text">
            {{ card.solution4Text }}
          </p>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card flat class="px-4 pt-4 mx-4 br-15">
      <v-card-text class="text-left">
        <h2 class="primary--text">The Result</h2>
        <p class="primary--text mt-2">
          {{ card.resultText }}
        </p>
      </v-card-text>
    </v-card>
    <v-card-text v-if="card.cols3 == true" class="text-left">
      <v-row class="primary--text mx-auto text-center mt-4 pb-8">
        <v-col cols="6" sm="4">
          <v-icon class="secondary--text ml-4 text-h2">
            {{ card.result1Icon }}
          </v-icon>
          <h3>{{ card.result1Text }}</h3>
        </v-col>
        <v-col cols="6" sm="4">
          <v-icon class="secondary--text ml-4 text-h2">
            {{ card.result2Icon }}
          </v-icon>
          <h3>{{ card.result2Text }}</h3>
        </v-col>
        <v-col cols="6" sm="4">
          <v-icon class="secondary--text ml-4 text-h2">
            {{ card.result3Icon }}
          </v-icon>
          <h3>{{ card.result3Text }}</h3>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text v-else class="text-left">
      <v-row class="primary--text mx-auto text-center mt-4 pb-8">
        <v-col cols="6" sm="3">
          <v-icon class="secondary--text ml-4 text-h2">
            {{ card.result1Icon }}
          </v-icon>
          <h3>{{ card.result1Text }}</h3>
        </v-col>
        <v-col cols="6" sm="3">
          <v-icon class="secondary--text ml-4 text-h2">
            {{ card.result2Icon }}
          </v-icon>
          <h3>{{ card.result2Text }}</h3>
        </v-col>
        <v-col cols="6" sm="3">
          <v-icon class="secondary--text ml-4 text-h2">
            {{ card.result3Icon }}
          </v-icon>
          <h3>{{ card.result3Text }}</h3>
        </v-col>
        <v-col cols="6" sm="3">
          <v-icon class="secondary--text ml-4 text-h2">
            {{ card.result4Icon }}
          </v-icon>
          <h3>{{ card.result4Text }}</h3>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  scrollToTop: true,
  name: "CaseStudyLargeCard",
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
