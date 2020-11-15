/* eslint-disable */
<template>
  <v-container fluid class="pa-0 ma-0">
    <section class="mx-4 mx-lg-16">
      <v-row class="text-left mt-4">
        <v-img
          src="../../public/images/homeVisual.png"
          class="d-flex d-md-none mx-md-16"
          alt="image of people"
        />
        <v-col cols="12" sm="7" class="mt-md-16">
          <h1
            class="text-h3  text-md-h2 font-weight-bold"
            aria-label="Intro text"
          >
            The tech for good talent partner.
          </h1>
          <h2 class="text-h5 my-8">
            Confido's mission is to connect people with the same
            <span class="accent--text"> <strong>values</strong></span> and a
            shared <span class="success--text"><strong>purpose</strong></span>
            to build a better future,
            <span class="secondary--text"> <strong>together</strong></span
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
        <v-spacer />
        <v-col cols="12" sm="5">
          <v-img
            src="../../public/images/homeVisual.png"
            class="d-none d-md-flex mx-md-16"
            alt="image of people"
          />
        </v-col>
      </v-row>
    </section>
    <v-row
      class="full-width-green mt-10 mx-auto px-6 px-md-16 py-8 mb-0 white--text"
      no-gutters
      style="box-shadow: 0px 0px 70px rgba(100, 181, 246, 0.55)"
    >
      <v-col cols="12" md="4">
        <h1 class="mb-4 text-left">What we do.</h1>
        <h2 class="text-left">
          Product and Tech hiring.<br />
          Seed to Series B startups.<br />
          Tech for Good products.<br />
        </h2>
      </v-col>
    <v-row class="my-auto text-center">
      <v-col cols="12" md="3" class="mt-8 mt-md-0">
        <v-icon class="white--text text-h2 mb-2">mdi-rocket-launch-outline</v-icon>
        <h1>
          20+
        </h1>
        <h3>Startups scaled</h3>
      </v-col>
      <v-col cols="12" md="3" class="mt-8 mt-md-0">
        <v-icon class="white--text text-h2 mb-2">mdi-clock-check-outline</v-icon>
        <h1>
          4 weeks
        </h1>
        <h3>Average to hire</h3>
      </v-col>
      <v-col cols="12" md="3" class="mt-8 mt-md-0">
        <v-icon class="white--text text-h2 mb-2">mdi-account-group-outline</v-icon>
        <h1>
          70+
        </h1>
        <h3>Hires made</h3>
      </v-col>
      <v-col cols="12" md="3" class="mt-8 mt-md-0">
        <v-icon class="white--text text-h2 mb-2">mdi-check-circle-outline</v-icon>
        <h1>
          98%
        </h1>
        <h3>Success rate</h3>
      </v-col>
      </v-row>
    </v-row>
    <v-row class="mx-0 mt-0 pt-0 pb-0 mb-0 white--text" no-gutters>
      <v-carousel
        cycle
        continuous
        class="mx-0 my-0 py-0"
        hide-delimiter-background
        hide-delimiters
        light
        :show-arrows-on-hover="true"
      >
        <v-carousel-item
          v-for="quote in quotes"
          :key="quote"
          class="px-0 mx-0 px-md-16 mx-md-16 my-0 py-0"
        >
          <v-sheet color="transparent" height="100%" class="px-0 px-md-16 py-0 my-0">
            <v-row
              class="fill-height px-4 px-0 mx-6 mx-lg-16"
              align="center"
              justify="center"
            >
              <v-text>
                <p class="text-h6 text-md-h5 mt-md-0 mb-0 pb-0 text--primary">
                  <strong class="quote">
                    {{ quote.content }}
                  </strong>
                </p>
                <p class="text-h5 mt-12 mb-0 secondary--text">
                  <strong>
                  {{ quote.advocate }}
                  </strong>
                </p>
              </v-text>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16 mt-0 pt-0">
      <v-col cols="12">
        <Logos :logo="logo" />
    <v-row class="mx-auto justify-center mt-8">
      <v-btn
        to="/startups"
        class="mx-12 px-6 btn--outlined font-weight-black mt-2 mt-sm-0"
        outlined
        color="accent"
        rounded
        width="250"
        height="60"
        >Scale your team</v-btn
      >
      <v-btn
        to="/talent"
        class="mx-12 px-6 btn--outlined font-weight-black mt-2 mt-sm-0"
        outlined
        color="success"
        rounded
        width="250"
        height="60"
        >Join a startup</v-btn
      >
    </v-row>
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
          <v-card-text class="text-md-h6 white--text">
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
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          color="success"
          class="pa-8 my-2 white--text text-left card-shadow"
        >
          <v-card-title class="headline font-weight-bold"
            >Our values.</v-card-title
          >
          <v-card-text class="text-md-h6 white--text">
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
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16 mb-12">
      <v-col cols="12">
        <GetInTouch :contact="contact" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logos from "../components/Logos";
import GetInTouch from "../components/GetInTouch";
import CaseStudySmallCard from "../components/CaseStudySmallCard";

export default {
  name: "About",
  components: {
    Logos,
    GetInTouch,
    CaseStudySmallCard
  },
  data() {
    return {
      quotes: [
        {
          content:
            "We needed to scale a small startup team about 3x in a short space of time but didn't want to compromise on the quality of candidates. We'd tried alternative recruitment arrangements but hadn't seen results until we engaged Confido.",
          advocate: "Mark Somerfield - VP of Engineering, Feedr"
        },
        {
          content:
            "Confido have partnered with us in the truest sense. Helping us grow more in the last six months than we achieved with others over the previous twelve.",
          advocate: "Paul Smith – CTO, Benefex"
        },
        {
          content:
            "It's a pleasure working with Confido. Simply put, they deliver. Confido have sourced universally high-quality candidates, then worked seamlessly with us to manage a candidate-centred interview process and close offers. Highly recommended.",
          advocate: "Sam Stagg - CTO, Third Space Learning"
        },
        {
          content:
            "Whether it’s a hiring goal, upskilling internal talent teams, or working with budget holders to effectively workforce and scenario plan, Confido have partnered with us in every sense of the word. Sharp, resourceful and totally committed. Great job.",
          advocate: "Matt Collinge - CTO, Curve"
        },
        {
          content:
            "We had a shortlist of candidates within 48 hours and we were able to put a job offer out within a week. I can wholeheartedly recommend Confido to help grow your team.",
          advocate: "David Riley - Head of Design, HomeHero"
        },
        {
          content:
            "Confido have been a true partner to us over the last 18 months, both in advice and execution for a number of key hires across the engineering and product teams. I’d recommend them highly to anyone needing to scale up their product and engineering functions.",
          advocate: "Tom Hooper - CEO, Matr"
        },
        {
          content:
            "Confido were able to go beyond the norm by advising on how to communicate our brand and the opportunity to the market, and build out an efficient process to attract the top tier candidates we wanted.",
          advocate: "Avin Rabheru - CEO, Housekeep"
        },
        {
          content:
            "Confido worked really closely with me to help me find our new Head of Engineering. The candidates we met were all high calibre and very credible. The whole process was much quicker than I’ve experienced on similar searches in the past.",
          advocate: "Richard Wazacz - CEO, Octopus Wealth"
        },
      ],
      logos: [],
      contact: []
    };
  }
};
</script>
