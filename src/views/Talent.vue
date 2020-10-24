/* eslint-disable */
<template>
  <v-container fluid class="pa-0 ma-0">
    <section class="ma-4 ma-lg-16">
      <v-row class="text-left mt-10">
        <v-img
          src="../../public/images/placeholder.svg"
          class="d-flex d-md-none mx-md-16"
          alt="image of people"
        />
        <v-col cols="12" sm="6">
          <v-carousel
            cycle
            continuous
            hide-delimiter-background
            light
            hide-delimiters
            :show-arrows="false"
            height="300px"
          >
            <v-carousel-item v-for="title in titles" :key="title">
              <v-sheet color="transparent" class="px-8">
                <v-row>
                  <h1 class="text-h4 font-weight-bold my-16 py-16">
                    <strong>{{ title.title }}</strong>
                  </h1>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <v-btn
            @click="$vuetify.goTo('#product')"
            class="mt-0 mr-4 btn--outlined font-weight-bold"
            outlined
            color="accent"
            rounded
            width="150"
            height="50"
            >Product</v-btn
          >
          <v-btn
            @click="$vuetify.goTo('#engineering')"
            class="mt-0 mr-4 btn--outlined font-weight-bold"
            outlined
            color="success"
            rounded
            width="150"
            height="50"
            >Tech</v-btn
          >
        </v-col>
        <v-spacer />
        <v-col cols="12" sm="4">
          <v-img
            src="../../public/images/placeholder.svg"
            class="d-none d-md-flex mx-md-16"
            alt="image of people"
          />
        </v-col>
      </v-row>
    </section>
    <v-row
      class="mt-10 full-width-blue px-auto py-8 white--text"
      no-gutters
      style="box-shadow: 0px 0px 70px rgba(46, 49, 174, 0.55);"
    >
      <v-col cols="6" sm="3" class="px-4 px-md-none">
      <v-icon class="text-h3 white--text mb-2"
          >mdi-rocket-launch-outline</v-icon
        >
        <h1>Exclusive</h1>
        <h3>Startup relationships</h3>
      </v-col>
      <v-col cols="6" sm="3" class="px-4 px-md-none">
      <v-icon class="text-h3 white--text mb-2"
          >mdi-account-group-outline</v-icon
        >
        <h1>Max. 3</h1>
        <h3>Candidates in process per role</h3>
      </v-col>
      <v-col cols="6" sm="3" class="px-4 px-md-none">
      <v-icon class="text-h3 white--text mb-2"
          >mdi-account-voice</v-icon
        >
        <h1>2 week</h1>
        <h3>Average Interview process</h3>
      </v-col>
      <v-col cols="6" sm="3" class="px-4 px-md-none">
      <v-icon class="text-h3 white--text mb-2"
          >mdi-check-circle-outline</v-icon
        >
        <h1>97.5%</h1>
        <h3>Success rate</h3>
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
        <h2>We take the time to get to know you so we can find a startup that aligns with your career goals and values.</h2>
      </v-col>
      <v-col cols="12" sm="6" class="text-right">
        <v-btn
          class="btn--outlined font-weight-bold mx-auto px-8 py-4"
          outlined
          color="secondary"
          rounded
          href="mailto:contact@confidotalent.com?subject=Talent: I'd like to know more about available roles"
        >Get in touch</v-btn>
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <v-card class="pa-8 my-2 white--text text-left card-shadow">
          <v-card-title class="headline font-weight-bold primary--text"
            >Why work with Confido?</v-card-title
          >
          <v-card-text class="text-h6 primary--text"
            >We only represent startups that care about building their teams the right way. We ensure our clients are committed to making the right hires, with efficient interview processes, detailed feedback and 24-hour turnaround on decisions.</v-card-text
          >
          <v-row class="primary--text mx-auto text-center mt-4">
            <v-col cols="6" sm="4">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-account-group</v-icon
              >
              <h1>3 candidate</h1>
              <h3>limit per role</h3>
            </v-col>
            <v-col cols="6" sm="4">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-clock-check-outline</v-icon
              >
              <h1>2 week total</h1>
              <h3>completed interview process</h3>
            </v-col>
            <v-col cols="6" sm="4">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-charity</v-icon
              >
              <h1>Exclusive</h1>
              <h3>client relationships</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <v-card color="accent" class="pa-8 my-2 white--text text-left card-shadow">
            <v-card-title class="headline font-weight-bold">Who we look for.</v-card-title>
          <v-row>
              <v-col cols="12" sm="6">
              <v-card-text class="text-h6 white--text">
                <p>Team players with no ego.</p>
                <p>A focus on quality and value.</p>
                <p>Passion for product and user experience.</p>
              </v-card-text>
              </v-col>
              <v-col cols="12" sm="6">
              <v-card-text class="text-h6  white--text">
                <p>A desire to keep learning and developing.</p>
                <p>Comfortable with cross-team collaboration.</p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <ColorWideCard v-for="card in cards" :key="card" :card="card" />
      </v-col>
    </v-row>
    <v-row class="text-left mt-8 mt-md-0 mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <h1>Roles we've placed.</h1>
      </v-col>
    </v-row>
    <v-col cols="12" class="mt-8">
      <v-card color="transparent" flat>
      <v-row>
      <v-col cols="12" md="6">
        <v-text class="text-h5 font-weight-bold">Product.</v-text>
      </v-col>
      <v-col cols="12" md="6">
        <v-text class="text-h5 font-weight-bold">Tech.</v-text>
      </v-col>
      </v-row>
        <v-row class="ma-4">
          <v-col cols="12" md="2">
            <div class="circle pointer">
              <v-img
                src="../../public/images/benefex.png"
                width="150"
                contain
                eager
                class="circle"
              />
            </div>
            <h3 class="mt-2">Product Designer</h3>
          </v-col>
          <v-col cols="12" md="2">
            <v-dialog v-model="thirdSpace" width="1000px" class="overflow-hidden">
              <template v-slot:activator="{ on, attrs }">
                <div class="circle pointer">
                  <v-img
                    src="../../public/images/thirdSpace.png"
                    class="circle"
                    width="150"
                    contain
                    eager
                    v-bind="attrs"
                    v-on="on"
                  />
                </div>
                <h3 class="mt-2">Head of Design</h3>
              </template>
              <v-card>
                <v-img
                  src="https://www.confidotalent.com/application/files/3615/6224/8669/unmind_1.png"
                  height="200"
                  gradient="to top right, rgba(100,115,201,1), rgba(25,32,72, .7)"
                >
                  <v-img
                    src="../../public/images/thirdspace-white.png"
                    width="150"
                    contain
                    eager
                    class="startups mt-16"
                  />
                </v-img>
                <h2 class="primary--text px-8 pt-8">
                  Mobile and Web Team Scaling
                </h2>
                <v-card-text class="text-left mt-4 px-8 pt-0">
                  <h3 class="primary--text">The Challenge</h3>
                  <p>
                    To scale their cross-platform product, the CTO needed to
                    make some key React Native hires & a mobile SME. Having
                    exhausted direct & referral networks, AI platforms and other
                    agencies without success, he turned to Confido.
                  </p>
                  <h3 class="primary--text">Key stats</h3>
                  <ul>
                    <li>Shortlist within 3 weeks</li>
                    <li>100% CV to interview ratio</li>
                    <li>90% CV to final interview</li>
                    <li>4 offers, 3 acceptances</li>
                    <li>
                      Average times from submission to offer reduced from 4 to 2
                      weeks.
                    </li>
                  </ul>
                  <h3 class="primary--text mt-4">The Result</h3>
                  <p>
                    Following successful hires, Confido is now an exclusive
                    hiring partner for the wider engineering team.
                  </p>
                  <h3 class="primary--text">About Unmind</h3>
                  <p>
                    Unmind's B2B workplace wellness platform is shown to
                    decrease stress, enhance sleep, and improve business
                    performance of your employees.
                  </p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="primary"
                    text
                    class="px-4 py-2"
                    @click="thirdSpace = false"
                    >Close</v-btn
                  >
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col cols="12" md="2">
            <div class="circle pointer">
              <v-img
                src="../../public/images/matr.png"
                width="150"
                contain
                eager
                class="circle"
              />
            </div>
            <h3 class="mt-2">Visual Designer</h3>
          </v-col>
          <v-col cols="12" md="2">
            <div class="circle pointer">
              <v-img
                src="../../public/images/feedr.webp"
                width="150"
                contain
                eager
                class="circle"
              />
            </div>
            <h3 class="mt-2">Senior Developer</h3>
          </v-col>
          <v-col cols="12" md="2">
            <div class="circle pointer">
              <v-img
                src="../../public/images/houseKeep.png"
                width="150"
                contain
                eager
                class="circle"
              />
            </div>
            <h3 class="mt-2">Frontend Developer</h3>
          </v-col>
          <v-col cols="12" md="2">
            <div class="circle pointer">
              <v-img
                src="../../public/images/unmind.png"
                width="150"
                contain
                eager
                class="circle"
              />
            </div>
            <h3 class="mt-2">Lead Engineer</h3>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-row class="mx-0 white--text" no-gutters>
      <v-carousel
        cycle
        continuous
        class="mx-0 py-0"
        hide-delimiter-background
        light
        :show-arrows-on-hover="true"
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
            <v-text>
                <p class="text-h6 text-md-h5 mt-md-16 mb-0 pb-0 text--primary">
                  <strong class="quote">
                    {{ quote.content }}
                  </strong>
                </p>
                <p class="text-h5 mt-12 mb-8 secondary--text">
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
import Logos from "../components/Logos";
import GetInTouch from "../components/GetInTouch";
import ColorCard from "../components/ColorCard";
import ColorWideCard from "../components/ColorWideCard";

export default {
  name: "Talent",
  components: {
    Logos,
    GetInTouch,
    ColorCard,
    ColorWideCard
  },
  data() {
    return {
      benefex: false,
      visionbox: false,
      thirdSpace: false,
      unmind: false,
      contact: [],
      quotes: [
        {
          content:
            "Confido ensured my journey through the recruitment process was not only smooth, but also pleasant and swift. They always acted with my interests in mind and were quick to resolve any issues.",
          advocate: "Frontend Chapter Lead"
        },
        {
          content:
            "I couldn't recommend Confido more. They have honestly been one of the best, if not the best recruiter I have worked with. They gave constant feedback, took lots of time to listen and really thought about what I wanted and needed and where would work well for me.",
          advocate: "Software Engineer"
        },
        {
          content:
            "Confido has been one of the best recruiters I've worked with and I have nothing but praise for them. I’ll definitely be in touch for any future job hunt.",
          advocate: "Senior Software Engineer"
        },
        {
          content:
            "From our first interaction, Confido took the time to get to know me and what I care about and matched me with companies that share my values.",
          advocate: "Senior Software Engineer"
        },
        {
          content:
            "I've now secured a role at a company that resonates with my personal values regarding people and how they should be treated. I cannot recommend Confido enough.",
          advocate: "Lead QA Engineer"
        },
        {
          content:
            "Confido is the best business I've worked with when looking for new career opportunities. From initial contact through to receiving an offer, the experience was painless and I was treated with care and attention.",
          advocate: "Product Designer"
        },
        {
          content:
            "Confido’s communication and feedback was excellent throughout the hiring process. Most importantly, they took the time understand my situation and provided invaluable advice to help me make my decision.",
          advocate: "Senior Product Manager"
        },
        {
          content:
            "Confido’s attention to detail and fantastic communication throughout the whole process was second to none. They supported me throughout the whole process and kept me up to date with everything that was going on.",
          advocate: "QA Lead"
        },
        {
          content:
            "It was an absolute pleasure to work with Confido. They made the process of finding a new role as pain-free and relaxed as possible. They also take the time to get to know candidates; I felt that they really understood my personality, skills and career goals.",
          advocate: "QA Automation Engineer"
        },
      ],
      titles: [
        {
          title: "Want to build products that make the world a better place?"
        },
        {
          title: "Looking for a startup that shares your values?"
        }
      ],
      tab: null,
      cards: [
        {
          color: "success",
          accentColor: "white",
          title: "Process.",
          tab1: "Discovery call",
          tab2: "Matching process",
          tab3: "Interview process",
          tab4: "Onboarding",
          icon1: "mdi-phone-in-talk",
          icon2: "mdi-magnify",
          icon3: "mdi-account-voice",
          icon4: "mdi-account-group",
          text1: "Spending time with you to understand your motivators, what you enjoy doing and how you want to progress your career.",
          text2: "Discussing the startups that share your values, have products that excite you and will offer you the opportunity you want.",
          text3: "A three-stage maximum process, completed within two weeks, plus full interview feedback.",
          text4: "Supporting you from offer stage to onboarding and integrating with the team.",
        }
      ]
    };
  },
};
</script>
