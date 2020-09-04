<template>
<v-container fluid class="pa-0 ma-0">
  <section class="ma-4 ma-lg-16">
    <v-row class="text-left mt-10">
      <v-col cols="12" sm="7" class="mt-0 mt-md-12">
        <v-img src="../../public/images/placeholder.svg" class="d-flex d-md-none mx-md-16" alt="image of people" />
        <h1 class="display-2 my-16 font-weight-bold" aria-label="Talent">
          Want to build products that make the world a better place?
        </h1>
        <v-btn @click="$vuetify.goTo('#product')" class="mt-16 mr-4 btn--outlined font-weight-bold" outlined color="blue lighten-2" rounded width="150" height="50">
          Product
        </v-btn>
        <v-btn @click="$vuetify.goTo('#engineering')" class="mt-16 mr-4 btn--outlined font-weight-bold" outlined color="accent" rounded width="150" height="50">
          Engineering
        </v-btn>
      </v-col>
      <v-col cols="12" sm="5">
        <v-img src="../../public/images/placeholder.svg" class="d-none d-md-flex mx-md-16" alt="image of people" />
      </v-col>
    </v-row>
  </section>
  <v-row class="mt-10 full-width-blue px-auto py-16 white--text" no-gutters style="box-shadow: 0px 0px 70px rgba(46, 49, 174, 0.55);">
    <v-col cols="6" sm="3" class="px-4 px-md-none">
      <h1>
        Exclusive
      </h1>
      <h3>
        Startup relationships
      </h3>
    </v-col>
    <v-col cols="6" sm="3" class="px-4 px-md-none">
      <h1>
        &lt; 3
      </h1>
      <h3>
        Candidates in process per role
      </h3>
    </v-col>
    <v-col cols="6" sm="3" class="px-4 px-md-none">
      <h1>
        &lt; 2
      </h1>
      <h3>
        Weeks average Interview process
      </h3>
    </v-col>
    <v-col cols="6" sm="3" class="px-4 px-md-none">
      <h1>
        97.5%
      </h1>
      <h3>
        Success rate
      </h3>
    </v-col>
  </v-row>
  <v-row class="d-none d-md-flex mx-md-16 mx-md-6 mx-lg-16">
    <v-col cols="12">
      <Logos :logo="logo" />
    </v-col>
  </v-row>
  <v-row class="text-left mt-8 mt-md-0 mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12">
      <h1>Talent.</h1>
    </v-col>
    <v-col cols="12" sm="6">
      <h2>
        We take time to understand what you're about, your values, what you stand for and the type of startup where you will succeed.
      </h2>
    </v-col>
    <v-col cols="12" sm="6" class="text-right">
      <v-btn class="btn--outlined font-weight-bold mx-auto px-8 py-4" outlined color="primary" rounded href="mailto:contact@confidotalent.com?subject=Talent: I'd like to know more about available roles">
        Talk to us about roles
      </v-btn>
    </v-col>
  </v-row>
  <v-row class="mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12" md="6">
      <v-card color="accent" class="pa-8 my-2 white--text text-left card-shadow">
        <v-card-title class="headline font-weight-bold">
          Process.
        </v-card-title>
        <v-row class="mx-1">
          <v-col cols="6">
            <v-icon class="white--text text-lg-h2">mdi-cellphone-sound</v-icon>
            <h3>Brief workshop</h3>
          </v-col>
          <v-col cols="6">
            <v-icon class="white--text text-lg-h2">mdi-card-account-details-star-outline</v-icon>
            <h3>Candidate search</h3>
          </v-col>
        </v-row>
        <v-row class="mx-1">
          <v-col cols="6">
            <v-icon class="white--text text-lg-h2">mdi-account-clock</v-icon>
            <h3>Interviews</h3>
          </v-col>
          <v-col cols="6">
            <v-icon class="white--text text-lg-h2">mdi-account-group</v-icon>
            <h3>Onboarding</h3>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card color="blue lighten-2" class="pa-8 my-2 white--text text-left card-shadow">
        <v-card-title class="headline font-weight-bold">
          Who we work with.
        </v-card-title>
        <v-card-text class="white--text">
          <p>Products making the world a better place</p>
          <p>Seed to Series B</p>
          <p>Startups that have a clear vision and roadmap</p>
          <p>Startups that value and invest in their people</p>
        </v-card-text>
        <v-card-actions>
          <v-btn class="btn--outlined font-weight-bold mx-auto px-4" outlined color="white" rounded href="mailto:contact@confidotalent.com?subject=Talent: I'd like to know more about available roles">Sounds good, let's talk!</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="my-16 full-width-blue" no-gutters style="height: 8px;">
  </v-row>
  <v-row id="product" class="text-left mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12">
      <h1>Product.</h1>
    </v-col>
  </v-row>
  <v-row class="mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12">
      <v-card color="blue lighten-2" class="pa-8 my-2 white--text text-left card-shadow">
        <v-row>
          <v-col cols="12" sm="6">
            <v-card-title class="headline font-weight-bold">
              What we look for.
            </v-card-title>
            <v-card-text class="white--text">
              <p>Business value focus</p>
              <p>User centred design</p>
              <p>No ego / team player</p>
              <p>Growth mindset /<br />
                Invested in self development</p>
            </v-card-text>
            <v-card-actions>
              <v-btn class="btn--outlined font-weight-bold px-4" outlined color="white" rounded href="mailto:contact@confidotalent.com?subject=Talent: I work in Product, tell me more about roles!">I work in Product!</v-btn>
            </v-card-actions>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card-title class="headline font-weight-bold">
              Roles we cover.
            </v-card-title>
            <v-card-text class="white--text">
              <p>Product owner/manager</p>
              <p>UI Designer</p>
              <p>UX Designer</p>
              <p>Product and Service Designer</p>
              <p>User Researcher</p>
            </v-card-text>
            <v-card-actions class="ml-2">
              <h3>From Junior <v-icon class="white--text">mdi-arrow-right</v-icon> VP</h3>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>

  <v-row id="engineering" class="text-left mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12">
      <h1>Engineering.</h1>
    </v-col>
  </v-row>
  <v-row class="mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12">
      <v-card color="accent" class="pa-8 my-2 white--text text-left card-shadow">
        <v-row>
          <v-col cols="12" sm="6">
            <v-card-title class="headline font-weight-bold">
              What we look for.
            </v-card-title>
            <v-card-text class="white--text">
              <p>Technologist</p>
              <p>User/product focused approach</p>
              <p>No ego / team player</p>
              <p>Growth mindset /<br />
                Invested in self development</p>
            </v-card-text>
            <v-card-actions>
              <v-btn class="btn--outlined font-weight-bold px-4" outlined color="white" rounded href="mailto:contact@confidotalent.com?subject=Talent: I work in Engineering, tell me more about roles!">I work in Engineering!</v-btn>
            </v-card-actions>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card-title class="headline font-weight-bold">
              Roles we cover.
            </v-card-title>
            <v-card-text class="white--text">
              <p>Developer (Frontend, backend, fullstack)<br />
                All stacks and technologies</p>
              <p>Quality Assurance</p>
              <p>DevOps/Platform</p>
              <p>Data Engineer/Scientist</p>
            </v-card-text>
            <v-card-actions class="ml-2">
              <h3>From Junior <v-icon class="white--text">mdi-arrow-right</v-icon> VP</h3>
            </v-card-actions>
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

export default {
  name: "Talent",
  components: {
    Logos,
    GetInTouch
  },
  data() {
    return {
      hero: "https://res.cloudinary.com/kejk/image/upload/v1585992488/macbook-pro-space-gray-on-the-wooden-table_e6bu8w.jpg",
      url: "https://res.cloudinary.com/kejk/raw/upload/v1587568180/Lazy%20PDF%20-%20V1.1.zip",
      contact: [],
    };
  },
};
</script>
