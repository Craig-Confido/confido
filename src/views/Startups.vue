<template>
<v-container fluid class="pa-0 ma-0">
  <section class="ma-4 ma-lg-16">
    <v-row class="text-left mt-10">
      <v-col cols="12" sm="7" class="mt-0 mt-md-12">
        <h1 class="display-2 my-16 font-weight-bold" aria-label="Startups">
          Building out the core team?
        </h1>
        <v-btn class="mt-16 mr-4 btn--outlined font-weight-bold" outlined color="accent" rounded width="150" height="50">
          Search-only
        </v-btn>
        <v-btn class="mt-16 mr-4 btn--outlined font-weight-bold" outlined color="success" rounded width="150" height="50">
          On-site team
        </v-btn>
      </v-col>
      <v-col cols="12" sm="5">
        <v-img src="#" alt="image of people" />
      </v-col>
    </v-row>
  </section>
  <v-row class="mt-10 full-width-green px-auto py-16 white--text" no-gutters style="box-shadow: 0px 0px 70px rgba(46, 49, 174, 0.55);">
    <v-col cols="6" sm="3">
      <h1>
        20+
      </h1>
      <h3>
        Startups scaled
      </h3>
    </v-col>
    <v-col cols="6" sm="3">
      <h1>
        70+
      </h1>
      <h3>
        Hires made
      </h3>
    </v-col>
    <v-col cols="6" sm="3">
      <h1>
        &lt;4
      </h1>
      <h3>
        Weeks to hire
      </h3>
    </v-col>
    <v-col cols="6" sm="3">
      <h1>
        97.5%
      </h1>
      <h3>
        Success rate
      </h3>
    </v-col>
  </v-row>
  <v-row class="mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12">
      <Logos :logo="logo" />
    </v-col>
  </v-row>
  <v-row class="text-left mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12">
      <h1>Search.</h1>
    </v-col>
    <v-col cols="12" sm="6">
      <h2>
        Working exclusively with startups to headhunt the top product and tech talent in the market.
      </h2>
    </v-col>
    <v-col cols="12" sm="6" class="text-right">
      <v-btn class="btn--outlined font-weight-bold mx-auto px-8 py-4" outlined color="primary" rounded href="mailto:info@confidotalent.com">
        Talk to us about search
      </v-btn>
    </v-col>
  </v-row>
  <v-row class="mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12" md="6">
      <ColorCard v-for="card in purpleCards" :key="card" :card="card" />
    </v-col>
    <v-col cols="12" md="6">
      <!--<ColorImgCard v-for="card in greenImgCards" :key="card" :card="card" :src="card" />-->
      <v-card color="success" class="pa-8 my-2 white--text text-left" style="box-shadow: 0px 20px 70px rgba(46, 49, 174, 0.05);">
        <v-card-title class="headline font-weight-bold">
          Case studies.
        </v-card-title>
        <v-row class="ma-4">
          <v-col cols="6">
            <v-img src="../../public/images/benefex.png" width="150" contain class="startups" />
            <v-img src="../../public/images/vision-box.png" width="150" contain class="startups mt-md-16" />
          </v-col>
          <v-col cols="6">
            <v-img src="../../public/images/thirdSpace.png" width="150" contain class="startups" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="my-16 full-width-green" no-gutters style="height: 8px;">
  </v-row>
  <v-row class="text-left mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12">
      <h1>On-site.</h1>
    </v-col>
    <v-col cols="12" sm="6">
      <h2>
        Working onsite with startups to sustainably scale product and tech teams.
      </h2>
    </v-col>
    <v-col cols="12" sm="6" class="text-right">
      <v-btn class="btn--outlined font-weight-bold mx-auto px-8 py-4" outlined color="primary" rounded href="mailto:info@confidotalent.com">
        Talk to us about on-site support
      </v-btn>
    </v-col>
  </v-row>
  <v-row class="mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12" md="6">
      <ColorCard v-for="card in greenCards" :key="card" :card="card" />
    </v-col>
    <v-col cols="12" md="6">
      <v-card color="accent" class="pa-8 my-2 white--text text-left" style="box-shadow: 0px 20px 70px rgba(46, 49, 174, 0.05);">
        <v-card-title class="headline font-weight-bold">
          Case studies.
        </v-card-title>
        <v-row class="ma-4">
          <v-col cols="6">
            <v-img src="../../public/images/unmind.png" width="150" contain class="startups" />
            <v-img src="../../public/images/feedr.png" width="150" contain class="startups mt-md-16" />
          </v-col>
          <v-col cols="6">
            <v-img src="../../public/images/curve.png" width="150" contain class="startups" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="text-left mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12">
      <h1>Get in touch.</h1>
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
import Logos from '../components/Logos';
import GetInTouch from '../components/GetInTouch';
import ColorCard from '../components/ColorCard';

export default {
  name: "Startups",
  components: {
    Logos,
    GetInTouch,
    ColorCard,
  },
  data() {
    return {
      hero: "https://res.cloudinary.com/kejk/image/upload/v1585992488/macbook-pro-space-gray-on-the-wooden-table_e6bu8w.jpg",
      url: "https://res.cloudinary.com/kejk/raw/upload/v1587568180/Lazy%20PDF%20-%20V1.1.zip",
      contact: [],
      purpleCards: [{
        color: "accent",
        title: "Process.",
        icontl: "mdi-file-document",
        texttl: "Brief workshop",
        icontr: "mdi-magnify",
        texttr: "Candidate search",
        iconbl: "mdi-account-clock",
        textbl: "Interviews",
        iconbr: "mdi-account-group",
        textbr: "Onboarding",
      }],
      greenCards: [{
        color: "success",
        title: "Process.",
        icontl: "mdi-human-greeting-proximity",
        texttl: "Brief workshop",
        icontr: "mdi-file-document-edit-outline",
        texttr: "Candidate search",
        iconbl: "mdi-check-decagram",
        textbl: "Interviews",
        iconbr: "mdi-account-multiple-check",
        textbr: "Onboarding",
      }],
    };
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600
    },
  }
};
</script>
