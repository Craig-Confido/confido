<template>
  <v-container fluid class="pa-0 ma-0">
    <section class="mx-4 mx-lg-16">
      <v-row class="text-left mt-4">
        <v-img :src="require('../static/images/aboutVisual.png')" class="d-flex d-md-none mx-md-16" alt="image of people" />
        <v-col cols="12" sm="7" class="mt-md-16">
          <h1 class="text-h3 text-md-h2 font-weight-bold" aria-label="Intro text">Careers with Confido.</h1>
          <h2 class="text-h5 my-8">Interested in working with us? Here's everything you need to know about joining the Confido team...</h2>
          <v-row class="mt-12 mx-0">
            <v-btn class="mb-2 mb-sm-0 mr-4 btn--outlined font-weight-bold" outlined color="accent" rounded width="250" height="50" @click="$vuetify.goTo('#benefits')"> Benefits </v-btn>
            <v-btn class="btn--outlined font-weight-bold" outlined color="secondary" rounded width="250" height="50" @click="$vuetify.goTo('#roles')"> Live roles </v-btn>
          </v-row>
        </v-col>
        <v-spacer />
        <v-col cols="12" sm="5">
          <v-img :src="require('../static/images/aboutVisual.png')" class="d-none d-md-flex mx-md-16" alt="image of people" />
        </v-col>
      </v-row>
    </section>
    <section class="ma-4 ma-lg-16">
      <v-row class="text-left mt-4 px-4">
        <v-card class="pa-8 my-2 text-left card-shadow">
          <v-card-title class="headline font-weight-bold primary--text"> Our story </v-card-title>
          <v-card-text class="text-h6 primary--text"> When we first started out, our focus was to simplify the way startups scale. By 2020 we’d worked with a range of startups but we knew there was one specific type of company that resonated with us to our core - the startups using tech for good. So, we refined our focus knowing our work contributes to leaving the world in a better place. </v-card-text>
        </v-card>
        <v-row>
          <v-col cols="12">
            <div class="pa-8 my-0 text-center">
              <v-row class="primary--text mx-auto text-center mt-4 d-flex justify-center">
                <v-col cols="12" md="3">
                  <h1 class="pb-4">2018</h1>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-icon class="secondary--text text-h3"> mdi-license </v-icon>
                      <p class="primary--text">Confido founded</p>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-icon class="secondary--text text-h3"> mdi-account-group </v-icon>
                      <p class="primary--text">Began working with Benefex, Housekeep and Third Space Learning</p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="3">
                  <h1 class="pb-4">2019</h1>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-icon class="secondary--text text-h3"> mdi-domain </v-icon>
                      <p class="primary--text">Launched our “Onsite” solution</p>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-icon class="secondary--text text-h3"> mdi-office-building-marker-outline </v-icon>
                      <p class="primary--text">Won our first “Onsite” projects with Curve and Unmind</p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="3">
                  <h1 class="pb-4">2020</h1>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-icon class="secondary--text text-h3"> mdi-charity </v-icon>
                      <p class="primary--text">Refined our focus to Tech for Good startups</p>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-icon class="secondary--text text-h3"> mdi-trophy </v-icon>
                      <p class="primary--text">Record year for the team</p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="3">
                  <h1 class="pb-4">2021</h1>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-icon class="secondary--text text-h3"> mdi-alpha-b-circle-outline </v-icon>
                      <p class="primary--text">Worked with our first B Corp, allplants</p>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-icon class="secondary--text text-h3"> mdi-alpha-i-circle </v-icon>
                      <p class="primary--text">Implemented our Impact Strategy</p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h1 class="mt-6 mb-4">Working with us.</h1>
            <v-card class="pa-8 my-2 text-left card-shadow">
              <v-card-title class="headline font-weight-bold primary--text"> Our vision </v-card-title>
              <v-card-text class="text-h6 primary--text">
                We want to leave the world in a better place. We're working to achieve this through partnering with the best tech for good startups across the UK and Europe. By connecting people with the same values and a shared purpose, we can all build a better future, together. We mirror this ethos through our company impact initiatives – read more about that,
                <nuxt-link to="/impact" style="text-decoration: none" class="secondary--text">here</nuxt-link>.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="pa-8 my-0 text-center">
              <h1>Why join us?</h1>
              <v-row class="primary--text mx-auto text-center mt-4 d-flex justify-center">
                <v-col cols="12" md="3">
                  <v-icon class="secondary--text text-h2"> mdi-rocket </v-icon>
                  <h3 class="text-md-h6">Join a company using their business as a force for good</h3>
                </v-col>
                <v-col cols="12" md="3">
                  <v-icon class="secondary--text text-h2"> mdi-charity </v-icon>
                  <h3 class="text-md-h6">Have a positive impact on the world through the work you do</h3>
                </v-col>
                <v-col cols="12" md="3">
                  <v-icon class="secondary--text text-h2"> mdi-account-group </v-icon>
                  <h3 class="text-md-h6">Work in a flexible, supportive and trusted environment</h3>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-3 mb-5 px-4" id="benefits">
          <h1>Benefits.</h1>
        </v-row>
        <v-card class="pa-8 my-2 text-left card-shadow">
          <v-row class="primary--text">
            <v-col v-for="(benefit, index) in benefits" :key="index" cols="12" sm="6" class="d-flex align-center">
              <v-icon class="secondary--text text-h4 pr-2"> mdi-check </v-icon>
              <span class="text-h6">
                {{ benefit.label }}
              </span>
            </v-col>
          </v-row>
        </v-card>
        <v-row class="mt-3 mb-5 px-4">
          <v-col cols="12">
            <h1>Meet the team.</h1>
            <h3 class="mb-8">We're a band of startup enthusiasts relentlessly focused on building a better future. We may be a small team, but we have big ambitions. Most importantly, we have fun whilst doing this. Whether that be on our volunteering days or our team socials.</h3>
            <v-img :src="require('../static/images/team.png')" class="mx-md-16 d-none d-md-flex" width="80vw" alt="image of Confido team" />
            <v-img :src="require('../static/images/escape_room.png')" class="d-md-none d-flex mb-8" contain width="80vw" />
            <v-img :src="require('../static/images/tough_mudder.png')" class="d-md-none d-flex" contain width="80vw" />
            <v-img :src="require('../static/images/team_lunch.png')" class="d-md-none d-flex" contain width="80vw" />
          </v-col>
        </v-row>
        <v-row class="mt-3 mb-5 px-0" no-gutters>
          <v-col cols="auto" class="mx-auto d-none d-md-flex">
            <video width="720" height="540" controls>
              <source src="https://cdn.cosmicjs.com/939bb8e0-3469-11ed-984d-15ac5c458dc7-Tough-Mudder---FINAL.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </v-col>
          <v-col cols="auto" class="px-0 mx-auto d-flex d-md-none">
            <video width="340" height="250" controls>
              <source src="https://cdn.cosmicjs.com/939bb8e0-3469-11ed-984d-15ac5c458dc7-Tough-Mudder---FINAL.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </v-col>
        </v-row>
        <v-row v-if="roles" class="mt-3 mb-5 px-4" id="roles">
          <v-col cols="12">
            <h1>Open roles.</h1>
            <h3>
              Can’t see something that suits you? Drop us a note on
              <a style="text-decoration: none" href="mailto:contact@confidotalent.com?subject=Open%20roles" class="secondary--text">contact@confidotalent.com</a>, we’d love to hear from you.
            </h3>
          </v-col>
          <v-col v-for="role in roles" :key="role.id" cols="12" md="4">
            <LiveRoles :role="role" />
          </v-col>
        </v-row>
        <v-row v-else class="mt-3 mb-5 px-4" id="roles">
          <v-col cols="12">
            <h1>Open roles.</h1>
            <h3>
              Can’t see something that suits you? Drop us a note on
              <a style="text-decoration: none" href="mailto:contact@confidotalent.com?subject=Open%20roles" class="secondary--text">contact@confidotalent.com</a>, we’d love to hear from you.
            </h3>
          </v-col>
          <v-col cols="12">
            <p class="text-h6">No roles currently available</p>
          </v-col>
        </v-row>
      </v-row>
    </section>
    <v-row id="getInTouch" class="mx-0 mx-md-6 mx-lg-16 mb-12">
      <v-col cols="12">
        <GetInTouch :contact="contact" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { createBucketClient } from '@cosmicjs/sdk';
const bucket = createBucketClient({
  bucketSlug: 'confido',
  readKey: 'OrYlRGLrDpOrxqbRXMMw7gd7OzEL6jZCqHvfwJrhUbB0Q1Khcj',
});

let title = 'Why work with Confido?',
  desc = 'We’ll connect you with a startup that alligns with your values so you can build products that make the world a better place. Get in touch to talk about Tech and Product roles.',
  url = 'https://confidotalent.com/about',
  image = 'https://confidotalent.com/images/meta/talent.png';

export default {
  name: 'About',
  scrollToTop: true,
  head: {
    title: title,
    meta: [
      { hid: 'description', name: 'description', content: desc },

      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:url', property: 'og:url', content: url },
      { hid: 'og:image', property: 'og:image', content: image },
      { hid: 'og:description', property: 'og:description', content: desc },

      { property: 'twitter:domain', content: url },
      { hid: 'twitter:title', property: 'twitter:title', content: title },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: desc,
      },
      { hid: 'twitter:image', property: 'twitter:image', content: image },
      { hid: 'twitter:url', property: 'twitter:url', content: url },
      { hid: 'twitter:label1', property: 'twitter:label1', content: title },
    ],
    link: [{ rel: 'canonical', href: url }],
  },
  data() {
    return {
      contact: {},
      roles: {},
      benefits: [
        {
          label: '33 days holiday (including bank hols)',
        },
        {
          label: 'Oliva - mental wellbeing support',
        },
        {
          label: 'Your birthday off',
        },
        {
          label: 'Remote first and flexible working',
        },
        {
          label: 'Paid monthly team socials',
        },
        {
          label: 'Four paid team volunteering days per year',
        },
        {
          label: '£500 training and wellbeing budget',
        },
      ],
    };
  },
  created() {
    this.getRoles();
  },
  methods: {
    async getRoles() {
      this.error = this.role = null;
      this.loading = true;
      await bucket.objects
        .find({
          type: 'careers',
        })
        .props('id,slug,title,content,metadata,created_at,modified_at')
        .sort('-created_at')
        .then((data) => {
          const roles = data.objects;
          this.loading = false;
          this.roles = roles;
        });
    },
  },
};
</script>
