<template>
<v-container fluid class="pa-0 ma-0">
  <section class="mx-4 mx-md-16">
    <v-row class="text-left mt-10">
      <v-col cols="12" sm="7" class="mt-0 mt-md-12">
        <h1 class="display-1 mb-3 mt-3 font-weight-bold" aria-label="Karl's posts">
          Startups and people are
          <span class="accent--text">
            <strong>unique</strong>
          </span>, no two are the same. That’s why hiring is so hard.
        </h1>
        <h2 class="text-lg-h5 my-8">
          Confido focus on aligning the one thing that connects the two, to create something
          <span class="secondary--text">
            <strong>special</strong>
          </span>.
        </h2>
        <h3 class="font-weight-black success--text my-8 text-lg-h3">Values.</h3>
        <v-row class="mt-12 mx-4 mx-md-0">
          <v-btn class="mr-4 mt-4 btn--outlined font-weight-black" outlined color="accent" rounded width="150" height="50">Startups</v-btn>
          <v-btn class="mr-4 mt-4 btn--outlined font-weight-bold" outlined color="secondary" rounded width="150" height="50">Talent</v-btn>
        </v-row>
      </v-col>
      <v-col cols="12" sm="5">
        <v-img src="../assets/placeholder.svg" alt="image of people" />
      </v-col>
    </v-row>
  </section>
  <v-row class="mt-10 text-left full-width-pink px-16 py-16 white--text" no-gutters style="box-shadow: 0px 0px 70px rgba(46, 49, 174, 0.55);">
    <v-col cols="12" sm="6">
      <h1 class="mb-4">What we do.</h1>
      <h3>Build Product and Tech</h3>
      <h3>Seed to Series B</h3>
      <h3>Products that improve peoples' lives</h3>
    </v-col>
    <v-col cols="6" sm="3">
      <h2>20+</h2>
      <h3>Startups scaled</h3>
      <h2 class="mt-4">&lt;4</h2>
      <h3>Weeks to hire</h3>
    </v-col>
    <v-col cols="6" sm="3">
      <h2>70+</h2>
      <h3>Hires made</h3>
      <h2 class="mt-4">97.5%</h2>
      <h3>Success rate</h3>
    </v-col>
  </v-row>
  <v-row>
    <v-carousel cycle height="400" hide-delimiter-background light :show-arrows="false">
      <v-carousel-item v-for="quote in quotes" :key="quote">
        <v-sheet color="#F1F1FF" height="100%">
          <v-row class="fill-height px-16 mx-4 mx-md-16" align="center" justify="center">
            <v-text class="headline text--primary">{{ quote.content }}</v-text>
            <v-text class="text-h6 text--primary">{{ quote.advocate }}</v-text>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-row>
  <v-row class="mx-4 mx-md-16">
    <v-col cols="12">
      <Logos :logo="logo" />
    </v-col>
  </v-row>
  <v-row class="text-left mx-4 mx-md-16">
    <v-col cols="12">
      <h1>Who we are.</h1>
    </v-col>
  </v-row>
  <v-row class="mx-4 mx-md-16">
    <v-col cols="12" md="6">
      <v-card color="accent" class="pa-8 my-2 white--text text-left" style="box-shadow: 0px 20px 70px rgba(46, 49, 174, 0.05);">
        <v-card-title class="headline font-weight-bold">We are Confido.</v-card-title>
        <v-card-text class="text-h6 mb-14 white--text">We are that person you can always go to for honest, straight answers. We don’t judge. We’ve got your back. We tell you what you need to hear, no what you want to hear. W’e’re always there when you need us.</v-card-text>
        <v-card-actions>
          <v-btn class="btn--outlined font-weight-bold mx-auto" outlined color="white" rounded to="/startups">Scale your team</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card color="secondary" class="pa-8 my-2 white--text text-left" style="box-shadow: 0px 20px 70px rgba(46, 49, 174, 0.05);">
        <v-card-title class="headline font-weight-bold">We are your confidant.</v-card-title>
        <v-card-text class="text-subtitle-1 white--text">
          <v-row>
            <v-col cols="6">
              <p>We judge people on their values above their skills</p>
              <p>We believe in data-driven success</p>
              <p>We know simplicity is key</p>
            </v-col>
            <v-col cols="6">
              <p>We expect mutual respect</p>
              <p>We always understand the ‘why’</p>
              <p>We are selective about who you invest your time with</p>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn class="btn--outlined font-weight-bold mx-auto" outlined color="white" rounded to="/talent">Accellerate your career</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="text-left mx-4 mx-md-16">
    <v-col cols="12">
      <h1>Get in touch.</h1>
    </v-col>
  </v-row>
  <v-row class="mx-4 mx-md-16">
    <v-col cols="12">
      <GetInTouch :contact="contact" />
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import Logos from '../components/Logos';
import GetInTouch from '../components/GetInTouch';

export default {
  name: "About",
  components: {
    Logos,
    GetInTouch
  },
  data() {
    return {
      quotes: [{
          content: "Confido have partnered with us in the truest sense. Without them, I am sure we wouldn’t be as far along our journey as we currently are; long may it continue.",
          advocate: "Daniel Brown – CEO, Defty",
        },
        {
          content: "Confido have partnered with us in the truest sense. Without them, I am sure we wouldn’t be as far along our journey as we currently are; long may it continue.",
          advocate: "Daniel Brown – CEO, Defty",
        },
        {
          content: "Confido have partnered with us in the truest sense. Without them, I am sure we wouldn’t be as far along our journey as we currently are; long may it continue.",
          advocate: "Daniel Brown – CEO, Defty",
        },
      ],
      logos: [],
      contact: [],
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length >= 2 || "Name must be more than 2 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      description: "",
      descriptionRules: [
        (v) => !!v || "Description is required",
        (v) =>
        v.length <= 280 || "Description must be less than 280 characters",
      ],
    };
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>
