/* eslint-disable */
<template>
  <v-container fluid class="pa-0 ma-0">
    <section class="mx-4 mx-lg-16">
      <v-row class="text-left mt-4">
        <v-img
          src="../../public/images/talentVisual.png"
          class="d-flex d-md-none mx-md-16"
          alt="image of people"
        />
        <v-col cols="12" sm="7" class="mt-md-16">
          <h1
            class="text-h3  text-md-h2 font-weight-bold"
            aria-label="Intro text"
          >
            Want to build products that make the world a better place?
          </h1>
          <h2 class="text-h5 my-8">
            Work with people who share your values, care about product and will help you accelerate your career.
          </h2>
          <v-row class="mt-12 mx-0">
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
          </v-row>
        </v-col>
        <v-spacer />
        <v-col cols="12" sm="5">
          <v-img
            src="../../public/images/talentVisual.png"
            class="d-none d-md-flex mx-md-16"
            alt="image of people"
          />
        </v-col>
      </v-row>
    </section>
    <v-row
      class="mt-10 full-width-green px-auto py-8 white--text"
      no-gutters
      style="box-shadow: 0px 0px 70px rgba(46, 49, 174, 0.55);"
    >
      <v-col cols="6" sm="3" class="px-4 px-md-none">
      <v-icon class="text-h2 white--text mb-2"
          >mdi-rocket-launch-outline</v-icon
        >
        <h1>Exclusive</h1>
        <h3>Startup relationships</h3>
      </v-col>
      <v-col cols="6" sm="3" class="px-4 px-md-none">
      <v-icon class="text-h2 white--text mb-2"
          >mdi-account-group-outline</v-icon
        >
        <h1>3 candidate</h1>
        <h3>Limit per role</h3>
      </v-col>
      <v-col cols="6" sm="3" class="px-4 px-md-none">
      <v-icon class="text-h2 white--text mb-2"
          >mdi-clock-outline</v-icon
        >
        <h1>2 week</h1>
        <h3>Average interview process</h3>
      </v-col>
      <v-col cols="6" sm="3" class="px-4 px-md-none">
      <v-icon class="text-h2 white--text mb-2"
          >mdi-check-circle-outline</v-icon
        >
        <h1>98%</h1>
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
        <h2>We care about getting to know you as an individual and what makes you tick. Then, we connect you with a startup that aligns with your career goals and values.</h2>
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
            >We ensure our clients are committed to making the right hires, with efficient interview processes, detailed feedback and 24-hour turnaround on decisions.</v-card-text
          >
          <v-row class="primary--text mx-auto text-center mt-4">
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-account-group</v-icon
              >
              <h1>3 candidate</h1>
              <h3>limit per role</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-clock-check-outline</v-icon
              >
              <h1>2 week total</h1>
              <h3>completed interview process</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-charity</v-icon
              >
              <h1>Exclusive</h1>
              <h3>client relationships</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-account-voice</v-icon
              >
              <h1>Feedback</h1>
              <h3>guaranteed</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 mt-0 pt-0 white--text mb-12" no-gutters>
      <v-carousel
        cycle
        continuous
        class="mx-0"
        hide-delimiter-background
        light
        :show-arrows-on-hover="true"
      >
        <v-carousel-item
          v-for="quote in quotes"
          :key="quote"
          class="px-0 mx-0 px-md-16 mx-md-16"
        >
          <v-sheet color="transparent" height="80%" class="px-0 px-md-16 py-0">
            <v-row
              class="fill-height px-4 px-0 mx-6 mx-lg-16"
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
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <ColorWideCard v-for="card in cards" :key="card" :card="card" />
      </v-col>
    </v-row>
    <v-row class="text-left mt-8 mt-md-0 mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <h1>Roles we cover.</h1>
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12" md="6">
        <v-card
          color="white"
          class="px-8 py-4 my-2 primary--text text-left card-shadow"
        >
          <v-card-title class="headline font-weight-bold "
            >Product.
            <v-spacer />
            <v-icon color="secondary">mdi-lightbulb</v-icon>
            </v-card-title>
          <v-divider />
          <v-card-text class="text-h6 primary--text text-center">
            <p>
              CPO | Product Co-founder
            </p>
            <h1 class="accent--text mb-3">
              •
            </h1>
            <p>
              VP | Head of Product
            </p>
            <h1 class="accent--text mb-3">
              •
            </h1>
            <p>
              Head of Design | Head of UX
            </p>
            <h1 class="accent--text mb-3">
              •
            </h1>
            <p>
              Service Designer | Product Manager
            </p>
            <h1 class="accent--text mb-3">
              •
            </h1>
            <p>
              UX Designer | Product Designer | UI Designer
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          color="white"
          class="px-8 py-4 my-2 primary--text text-left card-shadow"
        >
          <v-card-title class="headline font-weight-bold"
            >Tech.
            <v-spacer />
            <v-icon color="secondary">mdi-cog</v-icon>
            </v-card-title>
          <v-divider />
          <v-card-text class="text-h6 primary--text text-center">
            <p>
              CTO | Tech Co-founder
            </p>
            <h1 class="success--text mb-3">
              •
            </h1>
            <p>
              VP | Head of Engineering
            </p>
            <h1 class="success--text mb-3">
              •
            </h1>
            <p>
              Engineering Manager | Team Lead | Tech Lead
            </p>
            <h1 class="success--text mb-3">
              •
            </h1>
            <p>
              Frontend | Backend | Full Stack Engineer
            </p>
            <h1 class="success--text mb-3">
              •
            </h1>
            <p>
              QA | Platform Engineer | Data Scientist
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <v-card
          color="accent"
          class="pa-8 my-2 white--text text-left card-shadow"
        >
          <v-card-title class="headline font-weight-bold"
            >Values we look for.</v-card-title
          >
          <v-card-text class="text-h6 white--text">
          <v-row>
            <v-col cols="12" md="6">
              <h4>
                <v-icon class="text-h4 mr-4 white--text">mdi-check-circle-outline</v-icon>
                Relentless focus on delivering value.
              </h4>
              <h4>
                <v-icon class="text-h4 mr-4 white--text">mdi-charity</v-icon>
                Committed to the team and mission.
              </h4>
              <h4>
                <v-icon class="text-h4 mr-4 white--text">mdi-lightbulb</v-icon>
                Focus on quality and best practice.
              </h4>
            </v-col>
            <v-col cols="12" md="6">
              <h4>
              <v-icon class="text-h4 mr-4 white--text">mdi-book-open-variant</v-icon>
              Driven by the need to keep learning and improving.
              </h4>
              <h4>
                <v-icon class="text-h4 mr-4 white--text">mdi-account-group-outline</v-icon>
                Appreciation for others and the role they play.
              </h4>
              <h4>
                <v-icon class="text-h4 mr-4 white--text">mdi-earth</v-icon>
                Passion for Tech for Good.
              </h4>
            </v-col>
          </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
   <!-- <v-col cols="12" class="mt-8">
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
    </v-col> -->
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
      // benefex: false,
      // visionbox: false,
      // thirdSpace: false,
      // unmind: false,
      contact: [],
      quotes: [
        {
          content:
            "Confido ensured my journey through the recruitment process was not only smooth, but also pleasant and swift. They always acted with my interests in mind and were quick to resolve any issues.",
          advocate: "Jacob, Frontend Chapter Lead"
        },
        {
          content:
            "I couldn't recommend Confido more. They have honestly been one of the best, if not the best recruiter I have worked with. They gave constant feedback, took lots of time to listen and really thought about what I wanted and needed and where would work well for me.",
          advocate: "Abi, Software Engineer"
        },
        {
          content:
            "Confido has been one of the best recruiters I've worked with and I have nothing but praise for them. I’ll definitely be in touch for any future job hunt.",
          advocate: "Fernando, Senior Software Engineer"
        },
        {
          content:
            "From our first interaction, Confido took the time to get to know me and what I care about and matched me with companies that share my values.",
          advocate: "Harris, Senior Software Engineer"
        },
        {
          content:
            "I've now secured a role at a company that resonates with my personal values regarding people and how they should be treated. I cannot recommend Confido enough.",
          advocate: "Lou, Lead QA Engineer"
        },
        {
          content:
            "Confido is the best business I've worked with when looking for new career opportunities. From initial contact through to receiving an offer, the experience was painless and I was treated with care and attention.",
          advocate: "Karl, Product Designer"
        },
        {
          content:
            "Confido’s communication and feedback was excellent throughout the hiring process. Most importantly, they took the time understand my situation and provided invaluable advice to help me make my decision.",
          advocate: "Stu, Senior Product Manager"
        },
        {
          content:
            "Confido’s attention to detail and fantastic communication throughout the whole process was second to none. They supported me throughout the whole process and kept me up to date with everything that was going on.",
          advocate: "Lee, QA Lead"
        },
        {
          content:
            "It was an absolute pleasure to work with Confido. They made the process of finding a new role as pain-free and relaxed as possible. They also take the time to get to know candidates; I felt that they really understood my personality, skills and career goals.",
          advocate: "Amyce, QA Automation Engineer"
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
          text1: "We'll spend 30-40 minutes to understand what motivates you, what you enjoy doing and how you want to progress your career.",
          text2: "Following the discovery call, we'll share startups that meet your criteria, that share your values and will help you advance your career.",
          text3: "Out interview processes have a maximum of three stages that will be completed within two weeks, with detailed interview feedback.",
          text4: "We'll support you from offer to onboarding to ensure a seamless start with your new employer.",
        }
      ]
    };
  },
};
</script>
