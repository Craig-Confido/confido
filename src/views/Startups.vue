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
            @click="$vuetify.goTo('#search')"
            class="mt-0 mr-4 btn--outlined font-weight-bold"
            outlined
            color="accent"
            rounded
            width="150"
            height="50"
            >Search</v-btn
          >
          <v-btn
            @click="$vuetify.goTo('#onsite')"
            class="mt-0 mr-4 btn--outlined font-weight-bold"
            outlined
            color="success"
            rounded
            width="150"
            height="50"
            >On-site</v-btn
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
      class="mt-10 full-width-green px-auto py-8 white--text"
      no-gutters
      style="box-shadow: 0px 0px 70px rgba(46, 49, 174, 0.55)"
    >
      <v-col cols="6" sm="3">
        <v-icon class="text-h3 white--text mb-2"
          >mdi-rocket-launch-outline</v-icon
        >
        <h1>
          20+
        </h1>
        <h3>Startups scaled</h3>
      </v-col>
      <v-col cols="6" sm="3">
        <v-icon class="text-h3 white--text mb-2"
          >mdi-account-group-outline</v-icon
        >
        <h1>
          70+
        </h1>
        <h3>Hires made</h3>
      </v-col>
      <v-col cols="6" sm="3">
        <v-icon class="text-h3 white--text mb-2"
          >mdi-clock-check-outline</v-icon
        >
        <h1>
          Under 4
        </h1>
        <h3>Weeks to hire</h3>
      </v-col>
      <v-col cols="6" sm="3">
        <v-icon class="text-h3 white--text mb-2"
          >mdi-check-circle-outline</v-icon
        >
        <h1>
          97.5%
        </h1>
        <h3>Success rate</h3>
      </v-col>
    </v-row>
    <v-row class="d-none d-md-flex mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <Logos :logo="logo" />
      </v-col>
    </v-row>
    <v-row class="text-left mt-8 mt-md-0 mx-0 mx-md-6 mx-lg-16" id="search">
      <v-col cols="12">
        <h1>Search.</h1>
      </v-col>
      <v-col cols="12" sm="8">
        <h2>
          Working exclusively with Seed and Series A startups to efficiently deliver a shortlist of three candidates within four weeks that you will make a hire from.
        </h2>
      </v-col>
      <v-col cols="12" sm="4" class="text-right">
        <v-btn
          class="btn--outlined font-weight-bold mx-auto px-8 py-4"
          outlined
          color="secondary"
          rounded
          href="mailto:contact@confidotalent.com?subject=Startup: I'd like to know more about how Search services work"
          >Get in touch</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <v-card class="pa-8 my-2 white--text text-left card-shadow">
          <v-card-title class="headline font-weight-bold primary--text"
            >Why Search?</v-card-title
          >
          <v-card-text class="text-h6 primary--text"
            >We know it can be hard to attract top talent when you have no brand presence in the market. Search allows you to make critical hires efficiently and effortlessly, at pace. We work with you to craft a compelling message, then headhunt the passive talent market to find you the best.</v-card-text
          >
          <v-row class="primary--text mx-auto text-center mt-4">
            <v-col cols="6" sm="4">
              <v-icon class="secondary--text text-h2"
                >mdi-clock-check-outline</v-icon
              >
              <h1>&lt;4 weeks</h1>
              <h3>Average time to hire</h3>
            </v-col>
            <v-col cols="6" sm="4">
              <v-icon class="secondary--text text-h2"
                >mdi-check-circle-outline</v-icon
              >
              <h1>83% of hires</h1>
              <h3>Made from initial shortlist</h3>
            </v-col>
            <v-col cols="6" sm="4">
              <v-icon class="secondary--text text-h2"
                >mdi-trophy-outline</v-icon
              >
              <h1>98%</h1>
              <h3>Success rate</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <ColorWideCard v-for="card in purpleCards" :key="card" :card="card" />
      </v-col>
    </v-row>
    <v-col cols="12" md="12" class="mt-8">
       <p class="text-h4 font-weight-bold">Case studies.</p>
      <v-card-text class="primary--text text-h5"
          >Learn more from the teams we've scaled</v-card-text
        >
        <v-row class="ma-4" no-gutters>
          <v-col cols="12" md="4">
              <v-dialog
                v-model="showing"
                width="1000px"
                class="overflow-hidden"
              >
                <template v-slot:activator="{ on, attrs }">
                <div class="circle pointer my-8">
                  <v-img
                    src="../../public/images/benefex.png"
                    width="150"
                    contain
                    eager
                    class="circle pointer"
                    v-bind="attrs"
                    v-on="on"
                  />
                </div>
                </template>
                  <CaseStudyLargeCard v-for="card in caseStudyCards.slice(0,1)" :key="card" :card="card" />
              </v-dialog>
              </v-col>
              <v-col cols="12" md="4">
              <div class="circle pointer my-8">
                <v-img
                  src="../../public/images/thirdSpace.png"
                  width="150"
                  contain
                  eager
                  class="circle pointer"
                />
                </div>
              </v-col>
              <v-col cols="12" md="4">
              <v-dialog
                v-model="visionbox"
                width="1000px"
                class="overflow-hidden"
              >
                <template v-slot:activator="{ on, attrs }">
                <div class="circle pointer my-8">
                  <v-img
                    src="../../public/images/vision-box.svg"
                    width="150"
                    contain
                    eager
                    class="circle pointer"
                    v-bind="attrs"
                    v-on="on"
                  />
                </div>
                </template>
                <v-card>
                  <v-img
                    src="https://www.confidotalent.com/application/files/2415/6154/4295/vision_box.jpg"
                    height="200"
                    gradient="to top right, rgba(100,115,201,1), rgba(25,32,72, .7)"
                  >
                    <v-img
                      src="../../public/images/visionbox-white.png"
                      width="150"
                      contain
                      eager
                      class="startups mt-16"
                    />
                  </v-img>
                  <h2 class="primary--text px-8 pt-8">
                    Engineering Function Scaling
                  </h2>
                  <v-card-text class="text-left mt-4 px-8 pt-0">
                    <h3 class="primary--text">The Challenge</h3>
                    <p>
                      The CTO needed to scale the entire engineering function;
                      firstly hiring theirmanagement layer, then scaling the
                      Development, DevOps and QA functions. They weren't seeing
                      enough volume or quality from their existing recruitment
                      channels and wanted a specialist search partner to attract
                      top talent from allover Europe.
                    </p>
                    <h3 class="primary--text">Key stats</h3>
                    <ul>
                      <li>11 hires in 14 weeks</li>
                      <li>30% referral applicants</li>
                      <li>56% outreach response rate</li>
                      <li>90% offer acceptance</li>
                    </ul>
                    <h3 class="primary--text mt-4">The Result</h3>
                    <p>
                      Our relationship with Vision-Box is going from strength to
                      strength - stay tuned for more updates
                    </p>
                    <h3 class="primary--text">About Vision-Box</h3>
                    <p>
                      Confido have accelerated the hiring process for Vision-Box
                      and will continue to be used for Tech and Design hiring
                      across the offices in Lisbon and Porto.
                    </p>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="primary"
                      text
                      class="px-4 py-2"
                      @click="visionbox = false"
                      >Close</v-btn
                    >
                    <v-spacer />
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
    <v-row
      class="my-16 full-width-green"
      no-gutters
      style="height: 8px"
    ></v-row>
    <v-row id="onsite" class="text-left mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <h1>On-site.</h1>
      </v-col>
      <v-col cols="12" sm="7">
        <h2>
          Partnering on-site with Series B and C startups to sustainably scale product and tech teams.
        </h2>
      </v-col>
      <v-col cols="12" sm="5" class="text-right">
        <v-btn
          class="btn--outlined font-weight-bold mx-auto px-8 py-4"
          outlined
          color="secondary"
          rounded
          href="mailto:contact@confidotalent.com?subject=Startup: I'd like to know more about how On-site services work"
          >Get in touch</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <v-card class="pa-8 my-2 white--text text-left card-shadow">
          <v-card-title class="headline font-weight-bold primary--text"
            >Why On-site?</v-card-title
          >
          <v-card-text class="text-h6 primary--text"
            >Going through sustained growth phases is challenging. You need to start thinking about talent more strategically, whilst continuing to grow headcount month on month. Onsite provides you with the dedicated expertise that enables you to plan for the long term, alongside achieving your hiring goals in the short term.</v-card-text
          >
          <v-row class="primary--text mx-auto text-center mt-4">
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-cash-multiple</v-icon
              >
              <h1>40% saving</h1>
              <h3>compared to agency spend</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-finance</v-icon
              >
              <h1>3x acceleration</h1>
              <h3>in hiring velocity</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-clock-check-outline</v-icon
              >
              <h1>+20%</h1>
              <h3>improvement on time to hire</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-account-group</v-icon
              >
              <h1>Increased</h1>
              <h3>team diversity</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <ColorWideCard v-for="card in greenCards" :key="card" :card="card" />
      </v-col>
    </v-row>
    <v-col cols="12" md="12" class="mt-8">
      <p class="text-h4 font-weight-bold">Case studies.</p>
      <v-card-text class="primary--text text-h5"
          >Learn more from the teams we've scaled</v-card-text
        >
        <v-row class="ma-4">
          <v-col cols="12" md="4">
            <div class="circle pointer my-8">
              <v-img
                src="../../public/images/curve.png"
                width="150"
                contain
                eager
                class="circle"
              />
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <v-dialog v-model="unmind" width="1000px" class="overflow-hidden">
              <template v-slot:activator="{ on, attrs }">
                <div class="circle pointer my-8">
                  <v-img
                    src="../../public/images/unmind.png"
                    class="circle"
                    width="150"
                    contain
                    eager
                    v-bind="attrs"
                    v-on="on"
                  />
                </div>
              </template>
              <v-card>
                <v-img
                  src="https://www.confidotalent.com/application/files/3615/6224/8669/unmind_1.png"
                  height="200"
                  gradient="to top right, rgba(100,115,201,1), rgba(25,32,72, .7)"
                >
                  <v-img
                    src="../../public/images/unmind-white.png"
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
                    @click="unmind = false"
                    >Close</v-btn
                  >
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col cols="12" md="4">
             <v-dialog
                v-model="feedr"
                width="1000px"
                class="overflow-hidden"
              >
              <template v-slot:activator="{ on, attrs }">
              <div class="circle pointer my-8">
                <v-img
                  src="../../public/images/feedr.webp"
                  width="150"
                  contain
                  eager
                  class="circle"
                  v-bind="attrs"
                  v-on="on"
                />
            </div>
            </template>
              <CaseStudyLargeCard v-for="card in caseStudyCards.slice(1,2)" :key="card" :card="card" />
          </v-dialog>
          </v-col>
        </v-row>
    </v-col>
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
import ColorCard from "../components/ColorCard";
import ColorWideCard from "../components/ColorWideCard"
import CaseStudyLargeCard from "../components/CaseStudyLargeCard"

export default {
  name: "Startups",
  components: {
    Logos,
    GetInTouch,
    ColorCard,
    ColorWideCard,
    CaseStudyLargeCard
  },
  data() {
    return {
      benefex: false,
      visionbox: false,
      unmind: false,
      caseStudyCards: [
        {
          image: "https://www.confidotalent.com/application/files/7815/6090/5476/Benefex_onehub.jpg",
          logo: "../images/benefex-white.png",
          title: "Benefex build workplace tech that transforms the employee experience, and focuses on improving employee wellbeing.",
          brief: "Benefex are a fast growing product company based in Southampton. In 18 months they used over 10 recruitment partners with little to no success. They needed a partner they could rely on to help them attract top product and tech talent and deliver 5-10 hires per year.",
          challenge1Title: "Lack of market intel",
          challenge1: "Who else was hiring, what for, and for how much?",
          challenge2Title: "Attracting the right people",
          challenge2: "How could Benefex appear more attractive?",
          challenge3Title: "Securing top tier candidates",
          challenge3: "What did they need to change to find the best candidates?",
          solution1Icon: "mdi-file-document",
          solution1Title: "Brief workshop",
          solution1: "Week 1",
          solution1Text: "We spent time with the senior management team to build a detailed brief playing to Benefex’s strengths within the local market.",
          solution2Icon: "mdi-magnify",
          solution2Title: "Search report",
          solution2: "Week 3",
          solution2Text: "We shared data on who was hiring, including salary packages and benefits, and how Benefex compared. We also evaluated the local talent demographic.",
          solution3Icon: "mdi-cog",
          solution3Title: "Search alignment",
          solution3: "Week 4",
          solution3Text: "Based on the search report, we noticed that all the companies in the area were hiring at the same level, which was where the local market was smallest.",
          resultText: "We adjusted the search based on the market intel and made all 3 hires within 6 weeks. Since then, we’ve completed over 13 successful searches and continue to work exclusively on all product and engineering hires.",
          result1Icon: "mdi-trophy",
          result1Text: "13 searches completed in 2 years",
          result2Icon: "mdi-account-group",
          result2Text: "Built out leadership team",
          result3Icon: "mdi-check-circle",
          result3Text: "100% success rate on all searches",
        },
        {
          image: "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3625&q=80",
          logo: "../images/feedr-white.png",
          title: "Feedr is on a mission to make it easier for people to get healthy, delicious food at the office, every day.",
          brief: "Benefex are a fast growing product company based in Southampton. In 18 months they used over 10 recruitment partners with little to no success. They needed a partner they could rely on to help them attract top product and tech talent and deliver 5-10 hires per year.",
          challenge1Title: "Lack of market intel",
          challenge1: "Who else was hiring, what for, and for how much?",
          challenge2Title: "Attracting the right people",
          challenge2: "How could Benefex appear more attractive?",
          challenge3Title: "Securing top tier candidates",
          challenge3: "What did they need to change to find the best candidates?",
          solution1Icon: "mdi-file-document",
          solution1Title: "Brief workshop",
          solution1: "Week 1",
          solution1Text: "We spent time with the senior management team to build a detailed brief playing to Benefex’s strengths within the local market.",
          solution2Icon: "mdi-magnify",
          solution2Title: "Search report",
          solution2: "Week 3",
          solution2Text: "We shared data on who was hiring, including salary packages and benefits, and how Benefex compared. We also evaluated the local talent demographic.",
          solution3Icon: "mdi-cog",
          solution3Title: "Search alignment",
          solution3: "Week 4",
          solution3Text: "Based on the search report, we noticed that all the companies in the area were hiring at the same level, which was where the local market was smallest.",
          resultText: "We adjusted the search based on the market intel and made all 3 hires within 6 weeks. Since then, we’ve completed over 13 successful searches and continue to work exclusively on all product and engineering hires.",
          result1Icon: "mdi-trophy",
          result1Text: "13 searches completed in 2 years",
          result2Icon: "mdi-account-group",
          result2Text: "Built out leadership team",
          result3Icon: "mdi-check-circle",
          result3Text: "100% success rate on all searches",
        }
      ],
      contact: [],
      titles: [
        {
          title: "Need to make a critical product or engineering hire?"
        },
        {
          title: "Looking to build out your core team?"
        },
        {
          title: "Need to scale your teams by 2x / 3x?"
        }
      ],
      tab: null,
      purpleCards: [
        {
          color: "accent",
          accentColor: "white",
          title: "Process.",
          tab1: "Brief workshop",
          tab2: "Headhunting",
          tab3: "Interviews",
          tab4: "Onboarding",
          icon1: "mdi-file-document",
          icon2: "mdi-magnify",
          icon3: "mdi-account-clock",
          icon4: "mdi-account-group",
          text1: "To kick things off, we'll spend two to three hours with your Senior team to identify what truly makes you unique. We'll then go to market as an extension of your brand to attract the best candidates for you.",
          text2: "While most recruiters focus on the active 10% of the candidate market, we’ll open up the hidden 90% for you. We take a structured approach to breaking down the local market based on your hiring needs, which allows us to unearth talent that’s harder to find.",
          text3: "We’ll provide you with a shortlist of our top three candidates to interview. We focus on a streamlined interview process that can be completed within two weeks. As well as assessing the candidates, we’ll also showcase the benefits of working for you.",
          text4: "Once you’ve selected your new starter, we’ll work with you both to ensure the onboarding process is as seamless as possible. This includes handling offer negotiation, notice periods, onboarding and integration with the team.",
        }
      ],
      greenCards: [
        {
          color: "success",
          accentColor: "white",
          title: "Process.",
          tab1: "Discovery workshop",
          tab2: "Project scoping",
          tab3: "Delivery",
          tab4: "Analysis",
          icon1: "mdi-file-document",
          icon2: "mdi-magnify",
          icon3: "mdi-check-circle-outline",
          icon4: "mdi-account-group",
          text1: "This session will establish how new talent will help accelerate your business goals. We’ll discuss your current state versus future state, key business and product priorities, and how talent will be expected to meet these needs.",
          text2: "We'll work with you to agree on the strategy and deliverables of Confido's talent solution to meet those business and product milestones.",
          text3: "We'll deliver our solution by providing you with expertise on wider talent strategy, as well as the new hires you need to continue scaling.",
          text4: "Our team will conduct regular evaluations and data analysis to drive further improvements.",
        }
      ],
    };
  }
};
</script>
