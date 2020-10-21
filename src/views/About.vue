/* eslint-disable */
<template>
  <v-container fluid class="pa-0 ma-0">
    <section class="mx-4 mx-lg-16">
      <v-row class="text-left mt-4 mt-md-16">
        <v-img
          src="../../public/images/placeholder.svg"
          class="d-flex d-md-none mx-md-16"
          alt="image of people"
        />
        <v-col cols="12" sm="7">
          <h1
            class="display-1 mb-3 mt-3 font-weight-bold"
            aria-label="Intro text"
          >
            The tech for good talent partner.
          </h1>
          <h2 class="text-h5 my-8">
            Confido's mission is to connect people with the same
            <span class="success--text"> <strong>values</strong></span> and a
            shared <span class="secondary--text"><strong>purpose</strong></span>
            to build a better future,
            <span class="accent--text"> <strong>together</strong></span
            >.
          </h2>
          <v-row class="mt-12 mx-0">
            <v-btn
              to="/startups"
              class="mr-4 mt-4 btn--outlined font-weight-black"
              outlined
              color="accent"
              rounded
              width="150"
              height="50"
              >Startups</v-btn
            >
            <v-btn
              to="/talent"
              class="mr-4 mt-4 btn--outlined font-weight-bold"
              outlined
              color="success"
              rounded
              width="150"
              height="50"
              >Talent</v-btn
            >
          </v-row>
        </v-col>
        <v-col cols="12" sm="5">
          <v-img
            src="../../public/images/placeholder.svg"
            class="d-none d-md-flex mx-md-16"
            alt="image of people"
          />
        </v-col>
      </v-row>
    </section>
    <v-row
      class="mt-10 text-left full-width-green mx-auto px-6 px-md-16 py-16 white--text"
      no-gutters
      style="box-shadow: 0px 0px 70px rgba(100, 181, 246, 0.55)"
    >
      <v-col cols="12" sm="3">
        <h1 class="mb-4">What we do.</h1>
        <h3>
          We scale Product and Tech teams for Seed to Series B startups building
          tech for good products.
        </h3>
      </v-col>
      <v-col cols="12" sm="3" class="d-md-flex d-none"></v-col>
      <v-col cols="6" sm="3" class="mt-8 mt-md-0">
        <h2>
          20+
          <v-icon class="white--text ml-4">mdi-rocket-launch-outline</v-icon>
        </h2>
        <h3>Startups scaled</h3>
        <h2 class="mt-4">
          &lt;4
          <v-icon class="white--text ml-4">mdi-clock-check-outline</v-icon>
        </h2>
        <h3>Weeks to hire</h3>
      </v-col>
      <v-col cols="6" sm="3" class="mt-8 mt-md-0">
        <h2>
          70+
          <v-icon class="white--text ml-4">mdi-account-group-outline</v-icon>
        </h2>
        <h3>Hires made</h3>
        <h2 class="mt-4">
          97.5%
          <v-icon class="white--text ml-4">mdi-check-circle-outline</v-icon>
        </h2>
        <h3>Success rate</h3>
      </v-col>
    </v-row>
    <v-row class="mx-0 white--text" no-gutters>
      <v-carousel
        cycle
        continuous
        class="mx-0 py-0"
        hide-delimiter-background
        light
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="quote in quotes"
          :key="quote"
          class="px-0 mx-0 px-md-16 mx-md-16"
        >
          <v-sheet color="transparent" height="100%" class="px-0 px-md-16">
            <v-row
              class="fill-height px-4 mx-0 mx-md-6 mx-lg-16"
              align="center"
              justify="center"
            >
              <v-text class="headline text--primary">
                <strong>{{ quote.content }}</strong>
              </v-text>
              <v-text class="text-h5 mb-8 secondary--text"
                ><strong>{{ quote.advocate }}</strong></v-text
              >
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <Logos :logo="logo" />
      </v-col>
    </v-row>
    <v-row class="text-left mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <h1>Who we are.</h1>
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12" md="6">
        <v-card
          color="accent"
          class="pa-8 my-2 white--text text-left card-shadow"
        >
          <v-card-title class="headline font-weight-bold"
            >We are Confido.</v-card-title
          >
          <v-card-text class="text-h6 mb-14 white--text">
            <p>
              <v-icon class="mr-4 white--text">mdi-head-check-outline</v-icon>
              Your advisor, mentor and friend.
            </p>
            <p>
              <v-icon class="mr-4 white--text">mdi-account-voice</v-icon>
              Direct, open and straight talking,
            </p>
            <p class="ml-11">but never judgemental.</p>
            <p>
              <v-icon class="mr-4 white--text">mdi-account-child</v-icon> We’ve
              always got your back.
            </p>
            <p>
              <v-icon class="mr-4 white--text">mdi-party-popper</v-icon>
              Helping to build a better future, together.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="font-weight-bold px-4 mx-auto primary--text"
              elevation="0"
              color="white"
              rounded
              to="/startups"
              >Scale your team</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          color="secondary"
          class="pa-8 my-2 white--text text-left card-shadow"
        >
          <v-card-title class="headline font-weight-bold"
            >We are your confidant.</v-card-title
          >
          <v-card-text class="text-h6 mb-14 white--text">
            <p>
              <v-icon class="mr-4 white--text"
                >mdi-chart-bell-curve-cumulative</v-icon
              >
              Use data to tell the story.
            </p>
            <p>
              <v-icon class="mr-4 white--text">mdi-help-circle-outline</v-icon>
              Always understand the ‘why’.
            </p>
            <p>
              <v-icon class="mr-4 white--text"
                >mdi-account-clock-outline</v-icon
              >
              Respect others and their time.
            </p>
            <p>
              <v-icon class="mr-4 white--text">mdi-hand-okay</v-icon> Don't
              overcomplicate, simplicity is key.
            </p>
            <p>
              <v-icon class="mr-4 white--text"
                >mdi-head-snowflake-outline</v-icon
              >
              Champion values and mindset over skill.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="font-weight-bold px-4 mx-auto primary--text"
              elevation="0"
              color="white"
              rounded
              to="/talent"
              >Accellerate your career</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-left mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <h1>Get in touch.</h1>
        <h2>We'd love to hear from you</h2>
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <GetInTouch :contact="contact" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logos from "../components/Logos";
import GetInTouch from "../components/GetInTouch";

export default {
  name: "About",
  components: {
    Logos,
    GetInTouch
  },
  data() {
    return {
      quotes: [
        {
          content:
            "Confido have partnered with us in the truest sense. Without them, I am sure we wouldn’t be as far along our journey as we currently are; long may it continue.",
          advocate: "Daniel Brown – CEO, Defty"
        },
        {
          content:
            "The guys were really keen to understand exactly what I was looking for from the start, and as a result the candidates we met were all high calibre and very credible. It meant the whole process was much quicker than I’ve experienced on similar searches in the past.",
          advocate: "Richard Wazacz - CEO, Octopus Wealth"
        },
        {
          content:
            "Craig and his team quickly understood the profile we were looking for in terms of technology, seniority and, crucially, culture. They were able to go beyond this by advising on how to communicate our brand and the opportunity to the market",
          advocate: "Avin Rabheru - Founder & CEO, Housekeep"
        }
      ],
      logos: [],
      contact: []
    };
  }
};
</script>
