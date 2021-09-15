<template>
  <v-container fluid class="pa-0 ma-0">
    <section class="mx-4 mx-lg-16">
      <v-row class="text-left mt-4">
        <v-img
          :src="require('../static/images/startupsVisual.png')"
          class="d-flex d-md-none mx-md-16"
          alt="image of people"
        />
        <v-col cols="12" sm="7" class="mt-md-16">
          <h1
            class="text-h3 text-md-h2 font-weight-bold"
            aria-label="Intro text"
          >
            Finally, a talent partner who truly understands startups.
          </h1>
          <h2 class="text-h5 my-8">
            Whether you're making a critical hire, building a core team or
            scaling up squads, we're here for you.
          </h2>
          <v-row class="mt-12 mx-0">
            <v-btn
              class="mt-0 mr-4 btn--outlined font-weight-bold"
              outlined
              color="accent"
              rounded
              width="150"
              height="50"
              @click="$vuetify.goTo('#search')"
            >
              Search
            </v-btn>
            <v-btn
              class="mt-0 mr-4 btn--outlined font-weight-bold"
              outlined
              color="success"
              rounded
              width="150"
              height="50"
              @click="$vuetify.goTo('#onsite')"
            >
              Onsite
            </v-btn>
          </v-row>
        </v-col>
        <v-spacer />
        <v-col cols="12" sm="5">
          <v-img
            :src="require('../static/images/startupsVisual.png')"
            class="d-none d-md-flex mx-md-16"
            alt="image of people"
          />
        </v-col>
      </v-row>
    </section>

    <v-row
      class="mt-10 full-width-green py-8 white--text text-center"
      no-gutters
      align-content="center"
      justify="center"
      style="box-shadow: 0px 0px 70px rgba(46, 49, 174, 0.55)"
    >
      <v-col cols="6" sm="3" class="px-auto mx-auto">
        <v-icon class="text-h2 white--text mb-2">
          mdi-rocket-launch-outline
        </v-icon>
        <h1>25+</h1>
        <h3>Startups scaled</h3>
      </v-col>
      <v-col cols="6" sm="3" class="px-auto mx-auto">
        <v-icon class="text-h2 white--text mb-2">
          mdi-account-group-outline
        </v-icon>
        <h1>130+</h1>
        <h3>Hires made</h3>
      </v-col>
      <v-col cols="6" sm="3" class="px-auto mx-auto mt-2 mt-md-none">
        <v-icon class="text-h2 white--text mb-2">
          mdi-clock-check-outline
        </v-icon>
        <h1>4 weeks</h1>
        <h3>Average time to hire</h3>
      </v-col>
      <v-col cols="6" sm="3" class="px-auto mx-auto mt-2 mt-md-none">
        <v-icon class="text-h2 white--text mb-2">
          mdi-check-circle-outline
        </v-icon>
        <h1>98%</h1>
        <h3>Success rate</h3>
      </v-col>
    </v-row>

    <v-row class="d-none d-md-flex mx-0 mx-md-6 mx-lg-16 my-16">
      <v-col cols="12">
        <Logos />
      </v-col>
    </v-row>

    <v-row id="search" class="text-left mt-8 mt-md-0 mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <h1>Search.</h1>
      </v-col>
      <v-col cols="12" sm="8">
        <h2>
          Working exclusively with Seed and Series A startups to efficiently
          deliver a shortlist of three candidates within four weeks that you
          will make a hire from.
        </h2>
      </v-col>
      <v-col cols="12" sm="4" class="text-right">
        <v-btn
          class="btn--outlined font-weight-bold mx-auto px-8 py-4"
          outlined
          color="secondary"
          rounded
          @click="$vuetify.goTo('#getInTouch')"
        >
          Get in touch
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <v-card class="pa-8 my-2 white--text text-left card-shadow">
          <v-card-title class="headline font-weight-bold primary--text">
            Why Search?
          </v-card-title>
          <v-card-text class="text-h6 primary--text">
            We know it can be hard to attract top talent when you have no brand
            presence in the market. Search allows you to make critical hires
            efficiently and effortlessly, at pace. We work with you to craft a
            compelling message, then headhunt the passive talent market to find
            you the best.
          </v-card-text>
          <v-row class="primary--text mx-auto text-center mt-4">
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text text-h2">
                mdi-account-group-outline
              </v-icon>
              <h1 class="text-h5 text-md-h4">3 candidate</h1>
              <h3 class="text-md-h6">Limit per role</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text text-h2">
                mdi-clock-check-outline
              </v-icon>
              <h1 class="text-h5 text-md-h4">4 weeks</h1>
              <h3 class="text-md-h6">Average time to hire</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text text-h2">
                mdi-check-circle-outline
              </v-icon>
              <h1 class="text-h5 text-md-h4">83% of hires</h1>
              <h3 class="text-md-h6">Made from initial shortlist</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text text-h2">
                mdi-trophy-outline
              </v-icon>
              <h1 class="text-h5 text-md-h4">98%</h1>
              <h3 class="text-md-h6">Success rate</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <ColorWideCard
          v-for="(card, index_1) in purpleCards"
          :key="card.title + index_1"
          :card="card"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12" class="mt-8 text-center">
        <p class="text-h4 font-weight-bold">Case studies.</p>
        <v-card-text class="primary--text text-h5">
          Learn more from the teams we've built
        </v-card-text>
        <v-row class="my-4 mx-md-0 text-center">
          <v-spacer />
          <v-col cols="12" md="4" lg="2">
            <v-dialog width="1000px" class="overflow-hidden" v-model="benefex">
              <template v-slot:activator="{ on, attrs }">
                <div class="circle pointer my-8">
                  <v-img
                    :src="require('../static/images/benefex.png')"
                    width="150"
                    contain
                    eager
                    class="circle pointer"
                    v-bind="attrs"
                    v-on="on"
                  />
                </div>
              </template>
              <div style="position: fixed; width: 1000px; z-index: 2">
                <v-col cols="1" class="mr-auto">
                  <v-icon large color="white" @click="benefex = false">
                    mdi-close-circle-outline
                  </v-icon>
                </v-col>
              </div>
              <CaseStudyLargeCard
                v-for="(card, index_2) in caseStudyCards.slice(0, 1)"
                :key="card.title + index_2"
                :card="card"
              />
            </v-dialog>
          </v-col>
          <v-col cols="12" md="4" lg="2">
            <v-dialog
              width="1000px"
              class="overflow-hidden"
              v-model="thirdSpace"
            >
              <template v-slot:activator="{ on, attrs }">
                <div class="circle pointer my-8">
                  <v-img
                    :src="require('../static/images/thirdSpace.png')"
                    width="150"
                    contain
                    eager
                    class="circle pointer"
                    v-bind="attrs"
                    v-on="on"
                  />
                </div>
              </template>
              <div style="position: fixed; width: 1000px; z-index: 2">
                <v-col cols="1" class="mr-auto">
                  <v-icon large color="white" @click="thirdSpace = false">
                    mdi-close-circle-outline
                  </v-icon>
                </v-col>
              </div>
              <CaseStudyLargeCard
                v-for="(card, index_3) in caseStudyCards.slice(1, 2)"
                :key="card.title + index_3"
                :card="card"
              />
            </v-dialog>
          </v-col>
          <v-col cols="12" md="4" lg="2">
            <v-dialog
              width="1000px"
              class="overflow-hidden"
              v-model="visionBox"
            >
              <template v-slot:activator="{ on, attrs }">
                <div class="circle pointer my-8">
                  <v-img
                    :src="require('../static/images/vision-box.svg')"
                    width="150"
                    contain
                    eager
                    class="circle pointer"
                    v-bind="attrs"
                    v-on="on"
                  />
                </div>
              </template>
              <div style="position: fixed; width: 1000px; z-index: 2">
                <v-col cols="1" class="mr-auto">
                  <v-icon large color="white" @click="visionBox = false">
                    mdi-close-circle-outline
                  </v-icon>
                </v-col>
              </div>
              <CaseStudyLargeCard
                v-for="(card, index_4) in caseStudyCards.slice(2, 3)"
                :key="card.title + index_4"
                :card="card"
              />
            </v-dialog>
          </v-col>
          <v-spacer />
        </v-row>
      </v-col>
    </v-row>

    <v-row class="my-16 full-width-green" no-gutters style="height: 8px" />

    <v-row id="onsite" class="text-left mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <h1>Onsite.</h1>
      </v-col>
      <v-col cols="12" sm="7">
        <h2>
          Partnering with Series B and C startups to enable sustainable
          long-term scaling of product and tech teams.
        </h2>
      </v-col>
      <v-col cols="12" sm="5" class="text-right">
        <v-btn
          class="btn--outlined font-weight-bold mx-auto px-8 py-4"
          outlined
          color="secondary"
          rounded
          @click="$vuetify.goTo('#getInTouch')"
        >
          Get in touch
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <v-card class="pa-8 my-2 white--text text-left card-shadow">
          <v-card-title class="headline font-weight-bold primary--text">
            Why Onsite?
          </v-card-title>
          <v-card-text class="text-h6 primary--text">
            Going from 50 hires to 100, to 200 and above is tough. You need to
            start thinking about talent more strategically, whilst continuing to
            grow headcount each month. Onsite provides you with the expertise
            you need to plan for the long term, alongside hitting your hiring
            goals in the short and medium term.
          </v-card-text>
          <v-row class="primary--text mx-auto text-center mt-4">
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2">
                mdi-cash-multiple
              </v-icon>
              <h1 class="text-h5 text-md-h4">40% saving</h1>
              <h3 class="text-md-h6">compared to agency spend</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2">
                mdi-finance
              </v-icon>
              <h1 class="text-h5 text-md-h4">3x increase</h1>
              <h3 class="text-md-h6">in hiring velocity</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2">
                mdi-clock-check-outline
              </v-icon>
              <h1 class="text-h5 text-md-h4">+20%</h1>
              <h3 class="text-md-h6">improvement on time to hire</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2">
                mdi-account-group
              </v-icon>
              <h1 class="text-h5 text-md-h4">Improved</h1>
              <h3 class="text-md-h6">team diversity</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <ColorWideCard
          v-for="(card, index_5) in greenCards"
          :key="card.title + index_5"
          :card="card"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12" class="mt-8 text-center">
        <p class="text-h4 font-weight-bold">Case studies.</p>
        <v-card-text class="primary--text text-h5">
          Learn more from the teams we've built
        </v-card-text>
        <v-row class="my-4 mx-md-0 text-center">
          <v-spacer />
          <v-col cols="12" md="4" lg="2">
            <v-dialog width="1000px" class="overflow-hidden" v-model="curve">
              <template v-slot:activator="{ on, attrs }">
                <div class="circle pointer my-8">
                  <v-img
                    :src="require('../static/images/curve.png')"
                    width="150"
                    contain
                    eager
                    class="circle pointer"
                    v-bind="attrs"
                    v-on="on"
                  />
                </div>
              </template>
              <div style="position: fixed; width: 1000px; z-index: 2">
                <v-col cols="1" class="mr-auto">
                  <v-icon large color="white" @click="curve = false">
                    mdi-close-circle-outline
                  </v-icon>
                </v-col>
              </div>
              <CaseStudyLargeCard
                v-for="(card, index_6) in caseStudyCards.slice(3, 4)"
                :key="card.title + index_6"
                :card="card"
              />
            </v-dialog>
          </v-col>
          <v-col cols="12" md="4" lg="2">
            <v-dialog width="1000px" class="overflow-hidden" v-model="unmind">
              <template v-slot:activator="{ on, attrs }">
                <div class="circle pointer my-8">
                  <v-img
                    :src="require('../static/images/unmind.png')"
                    class="circle"
                    width="150"
                    contain
                    eager
                    v-bind="attrs"
                    v-on="on"
                  />
                </div>
              </template>
              <div style="position: fixed; width: 1000px; z-index: 2">
                <v-col cols="1" class="mr-auto">
                  <v-icon large color="white" @click="unmind = false">
                    mdi-close-circle-outline
                  </v-icon>
                </v-col>
              </div>
              <CaseStudyLargeCard
                v-for="(card, index_7) in caseStudyCards.slice(4, 5)"
                :key="card.title + index_7"
                :card="card"
              />
            </v-dialog>
          </v-col>
          <v-col cols="12" md="4" lg="2">
            <v-dialog width="1000px" class="overflow-hidden" v-model="feedr">
              <template v-slot:activator="{ on, attrs }">
                <div class="circle pointer my-8">
                  <v-img
                    :src="require('../static/images/feedr.webp')"
                    width="150"
                    contain
                    eager
                    class="circle"
                    v-bind="attrs"
                    v-on="on"
                  />
                </div>
              </template>
              <div style="position: fixed; width: 1000px; z-index: 2">
                <v-col cols="1" class="mr-auto">
                  <v-icon large color="white" @click="feedr = false">
                    mdi-close-circle-outline
                  </v-icon>
                </v-col>
              </div>
              <CaseStudyLargeCard
                v-for="(card, index_8) in caseStudyCards.slice(5, 6)"
                :key="card.title + index_8"
                :card="card"
              />
            </v-dialog>
          </v-col>
          <v-spacer />
        </v-row>
      </v-col>
    </v-row>

    <v-row id="getInTouch" class="mx-0 mx-md-6 mx-lg-16 mb-12">
      <v-col cols="12">
        <GetInTouch :contact="contact" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logos from "../components/Logos";
import GetInTouch from "../components/GetInTouch";
// import ColorCard from "../components/ColorCard";
import ColorWideCard from "../components/ColorWideCard";
import CaseStudyLargeCard from "../components/CaseStudyLargeCard";

let title = "Make critical Tech or Product hires and scale your startup",
  desc =
    "We scale Tech for Good startups. If you need to make critical Tech or Product hires, build core teams or scale up squads, we're here for you.",
  url = "https://confidotalent.com/startups",
  image = "https://confidotalent.com/images/meta/startups.png";

export default {
  scrollToTop: true,
  name: "Startups",
  head: {
    title: title,
    meta: [
      { hid: "description", name: "description", content: desc },

      { hid: "og:title", property: "og:title", content: title },
      { hid: "og:url", property: "og:url", content: url },
      { hid: "og:image", property: "og:image", content: image },
      { hid: "og:description", property: "og:description", content: desc },

      { property: "twitter:domain", content: url },
      { hid: "twitter:title", property: "twitter:title", content: title },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: desc,
      },
      { hid: "twitter:image", property: "twitter:image", content: image },
      { hid: "twitter:url", property: "twitter:url", content: url },
      { hid: "twitter:label1", property: "twitter:label1", content: title },
    ],
    link: [{ rel: "canonical", href: url }],
  },
  components: {
    Logos,
    GetInTouch,
    ColorWideCard,
    CaseStudyLargeCard,
  },
  data() {
    return {
      benefex: false,
      thirdSpace: false,
      visionBox: false,
      curve: false,
      unmind: false,
      feedr: false,
      caseStudyCards: [
        {
          cols3: true,
          image: "../images/benefex-header.jpg",
          logo: "../images/benefex-white.png",
          title:
            "Benefex build workplace tech that transforms the employee experience, and focuses on improving employee wellbeing.",
          url: "https://www.hellobenefex.com",
          brief:
            "Benefex are a fast growing product company based in Southampton. In 18 months they used over 10 recruitment partners with little to no success. They needed a partner they could rely on to help them attract top product and tech talent and deliver 5-10 hires per year.",
          challenge1Title: "Lack of market intel",
          challenge1: "Who else was hiring, what for, and for how much?",
          challenge2Title: "Attracting the right people",
          challenge2: "How could Benefex appear more attractive?",
          challenge3Title: "Securing top tier candidates",
          challenge3:
            "What did they need to change to find the best candidates?",
          solution1Icon: "mdi-file-document",
          solution1Title: "Brief workshop",
          solution1Text:
            "We spent time with the senior management team to build a detailed brief playing to Benefex’s strengths within the local market.",
          solution2Icon: "mdi-magnify",
          solution2Title: "Search report",
          solution2Text:
            "We shared data on who was hiring, including salary packages and benefits, and how Benefex compared. We also evaluated the local talent demographic.",
          solution3Icon: "mdi-cog",
          solution3Title: "Search alignment",
          solution3Text:
            "Based on the search report, we noticed that all the companies in the area were hiring at the same level, which was where the local market was smallest.",
          resultText:
            "We adjusted the search based on the market intel and made all 3 hires within 6 weeks. Since then, we’ve completed over 13 successful searches and continue to work exclusively on all product and engineering hires.",
          result1Icon: "mdi-trophy",
          result1Text: "24 hires made since 2018",
          result2Icon: "mdi-account-group",
          result2Text: "Built out leadership team",
          result3Icon: "mdi-check-circle",
          result3Text: "100% success rate on all searches",
        },
        {
          cols3: true,
          image:
            "https://thirdspacelearning.com/wp-content/uploads/2020/09/wsr.jpg",
          logo: "../images/thirdspace-white.png",
          title:
            "Third Space Learning are the largest provider of 1-to-1 maths tutor support in the UK.",
          url: "https://thirdspacelearning.com",
          brief:
            "Third Space Learning (TSL)  needed a talent partner that could support them through various rounds of funding and growth, with most of their hiring being within product and tech.",
          challenge1Title: "Branding",
          challenge1:
            "Although TSL have a compelling mission, they were unknown to the talent market and needed help to reach the right people.",
          challenge2Title: "Attraction",
          challenge2:
            "Being an early stage startup they weren’t sure on how product and tech talent wanted to be engaged and what mattered to them.",
          challenge3Title: "Consistency",
          challenge3:
            "With peaks in growth and tight timelines, TSL needed a partner they could trust to deliver on critical hires.",
          solution1Icon: "mdi-file-document",
          solution1Title: "Brief workshop",
          solution1Text:
            "We worked with TSL to understand their unique mission and culture, then tied that with the product and tech motivators top candidates would be looking for.",
          solution2Icon: "mdi-magnify",
          solution2Title: "Search process",
          solution2Text:
            "We focussed on headhunting candidates with a passion for social impact products.",
          solution3Icon: "mdi-cog",
          solution3Title: "Flexibility",
          solution3Text:
            "We were able to provide top talent through a blend of search hires and interim consultants.",
          resultText:
            "We've helped TSL build out their core engineering team, whilst providing specialist interim consultants when needed. This has enabled them to increase user acquisition and secure further funding.",
          result1Icon: "mdi-account-group",
          result1Text: "12 hires made over 2 years",
          result2Icon: "mdi-clock",
          result2Text: "5 weeks average time to hire",
          result3Icon: "mdi-trophy",
          result3Text: "100% success rate on searches",
        },
        {
          cols3: true,
          image:
            "https://vbbackoffice.azurewebsites.net/wp-content/uploads/2018/09/wallpaper_05-2x.jpg",
          logo: "../images/visionbox-white.png",
          title:
            "Vision-box are creating a world where everyone can travel seamlessly without the need for physical documentation using cutting edge biometrics and cyber security.",
          url: "https://www.vision-box.com/",
          brief:
            "Vision-Box had just hired a new CTO to scale their product and engineering function by 3x. They needed a recruitment partner that could attract local and international talent to build a world class engineering function within a 3 month window.",
          challenge1Title: "Branding",
          challenge1:
            "Although well known locally, Vision-box didn’t have a strong reputation and were unknown internationally.",
          challenge2Title: "Process",
          challenge2:
            "Their process was slow, often taking 6-8 weeks for a candidate to complete the process.",
          challenge3Title: "Scale",
          challenge3:
            "The team needed to recruit a large number of people, across different skill sets in a 4 month window.",
          solution1Icon: "mdi-file-document",
          solution1Title: "Talent branding",
          solution1Text:
            "We worked together to create a compelling story to attract local and overseas talent.",
          solution2Icon: "mdi-magnify",
          solution2Title: "Process planning",
          solution2Text:
            "We agreed a streamlined three stage process that would be completed within two weeks. We also confirmed packages to attract international talent.",
          solution3Icon: "mdi-cog",
          solution3Title: "Search process",
          solution3Text:
            "We dedicated multiple Confido resources to the project to run local and international searches in parallel.",
          resultText:
            "We successfully made multiple hires across Development, QA, DevOps, and Management.  We took a top down approach to help the CTO build the senior management team before scaling the teams beneath. We also built the DevOps and Automated Testing functions from scratch.",
          result1Icon: "mdi-account-group",
          result1Text: "11 hires made within 13 weeks",
          result2Icon: "mdi-clock",
          result2Text: "3x reduction in time to hire",
          result3Icon: "mdi-trophy",
          result3Text: "Hiring accelerated by 10x",
        },
        {
          cols3: false,
          image:
            "https://images.ctfassets.net/c3tzxbn050pi/2OCGE5PFSfeGMJnN1O3FzP/7f9bca77ef15334ef2ffeb74e61cc506/All-your-cards-in-one.jpg?w=510&h=650&q=80&fm=webp",
          logo: "../images/curve-white.png",
          title:
            "Curve is on a mission to simplify the way people spend, send, see and save money. Curve allows the user to combine their accounts and cards through the Curve app.",
          url: "https://www.curve.com/",
          brief:
            "Following their Series B, Curve had been through a period of rapid growth. They were set for another 6 months of sustained growth but wanted a partner that could provide strategic input and better visibility of hiring data, whilst still making key hires across product and engineering.",
          challenge1Title: "Scaleability",
          challenge1:
            "Curve needed the right data, metrics and processes in place to sustain high volume hiring.",
          challenge2Title: "Lack of data",
          challenge2:
            "Their existing data was not fit for purpose, which lead to too many “gut feel” decisions.",
          challenge3Title: "Overloaded talent team",
          challenge3:
            "The team was silo’d and needed to be more closely aligned with the business.",
          solution1Icon: "mdi-file-document",
          solution1Title: "Process planning",
          solution1Text:
            "Firstly, we reviewed the growth needed vs the current hiring process and implemented changes to allow for interview capacity and scalability.",
          solution2Icon: "mdi-magnify",
          solution2Title: "Headhunting",
          solution2Text:
            "We then focussed on headhunting through direct sourcing methods to ensure both a cultural and technical fit.",
          solution3Icon: "mdi-cog",
          solution3Title: "Scaling",
          solution3Text:
            "We worked with key stakeholders and the internal Talent team to ensure the right data was being tracked and reported, and the Talent team were set up for success.",
          solution4Icon: "mdi-cog",
          solution4Title: "Improving diversity",
          solution4Text:
            "We then worked with the leadership team to map current state VS future state in terms of diversity. We set up partnerships with MeetUps and communities in order to make Curve more accessible.",
          resultText:
            "Within four months, we provided Curve with four critical hires. During this time we were asked to act as the interim Head of Talent and worked with the Finance team to agree the workforce planning and budgets for 2020-21. We developed a clear reporting structure between key stakeholders and the Talent team, which reduced process delays. We also rolled out clear metrics for performance management of the Talent team and individual OKR’s.",
          result1Icon: "mdi-rocket-launch",
          result1Text: "Reduced time to hire by 26%",
          result2Icon: "mdi-lightbulb",
          result2Text: "Increased fill rate by 20%",
          result3Icon: "mdi-cash-multiple",
          result3Text: "Reduced agency spend by £175k",
          result4Icon: "mdi-account-group",
          result4Text: "46% of new starters were diverse hires",
        },
        {
          cols3: false,
          image:
            "https://blog.unmind.com/hubfs/Personalised%20mental%20health.png",
          logo: "../images/unmind-white.png",
          title:
            "Unmind is a workplace mental health platform. They empower employees to measure, understand, and improve their mental wellbeing.",
          url: "https://unmind.com",
          brief:
            "Unmind needed to grow their engineering squads from 2 to 4 to deliver on their product roadmap. They needed a dedicated Talent Manager for a period of 6 months to oversee this growth.",
          challenge1Title: "Assessment",
          challenge1:
            "Finding Full Stack Engineers that were aligned to their mission whilst also meeting the high technical bar.",
          challenge2Title: "Scalability",
          challenge2:
            "Putting in place a process that would allow for this many hires with the number of interviewers available.",
          challenge3Title: "Diversity",
          challenge3:
            "Unmind were committed to building a diverse and inclusive team. They wanted to ensure this was represented in their tech team.",
          solution1Icon: "mdi-file-document",
          solution1Title: "Process planning",
          solution1Text:
            "Reviewed the growth vs current hiring process and implemented changes to allow for interview capacity and scalability",
          solution2Icon: "mdi-magnify",
          solution2Title: "Headhunting",
          solution2Text:
            "Focus on direct sourcing methods to ensure cultural and technical fit (referrals, cord, headhunting)",
          solution3Icon: "mdi-cog",
          solution3Title: "Scaling",
          solution3Text:
            "While sourcing the perfect candidates, we ramped-up a small team of interim consultants so we could focus on securing permanent hires.",
          solution4Icon: "mdi-cog",
          solution4Title: "Improving diversity",
          solution4Text:
            "Working with the leadership team, we mapped out how Unmind could improve the diversity of their team. This involved setting up partnerships and meetups with different communities.",
          resultText:
            "We successfully built out Unmind's third and fourth squads within four months. The project was then extended to focus on other key engineering hires and further squad growth. The team's diversity was also improved through our new hires.",
          result1Icon: "mdi-account-group",
          result1Text: "27 hires made in 6 months",
          result2Icon: "mdi-clock",
          result2Text: "Improved time to hire by 25%",
          result3Icon: "mdi-cash-multiple",
          result3Text: "£75k cost saving VS agency spend",
          result4Icon: "mdi-account-group",
          result4Text: "Improved team diversity",
        },
        {
          cols3: false,
          image:
            "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3625&q=80",
          logo: "../images/feedr-white.png",
          title:
            "Feedr is on a mission to make it easier for people to get healthy, delicious food at the office, every day.",
          url: "https://feedr.co",
          brief:
            "Following acquisition, Feedr needed to double their product and engineering teams within a three month timeline. They wanted a talent partner who could help them scale quickly, whilst running a streamlined process that offered a positive candidate experience.",
          challenge1Title: "Candidate calibre",
          challenge1:
            "The bar was high, and the candidates coming through their current channels were not experienced enough.",
          challenge2Title: "Hiring velocity",
          challenge2:
            "They needed the ability to make 10+ hires in three months without overloading the VP of Engineering.",
          challenge3Title: "Diversity",
          challenge3:
            "Feedr also wanted to improve the diversity of their team through their new hires.",
          solution1Icon: "mdi-file-document",
          solution1Title: "Brief workshop",
          solution1Text:
            "Working with the COO and VP of Engineering, we created a tight brief to ensure we were aligned on the technical calibre required.",
          solution2Icon: "mdi-magnify",
          solution2Title: "Headhunting",
          solution2Text:
            "We then took a top down approach to hiring, securing the Lead Developers first, then the Mid-level Developers. Employing this process allowed us to spread the interviews across three stakeholders.",
          solution3Icon: "mdi-cog",
          solution3Title: "Streamlining feedback",
          solution3Text:
            "A deadline of 24-hours was agreed to deliver feedback and organise next steps in order to streamline the hiring process.",
          solution4Icon: "mdi-cog",
          solution4Title: "Improving diversity",
          solution4Text:
            "We ensured that one in every three of Feedr's new starters were diverse hires to boost inclusivity within the team.",
          resultText:
            "We successfully doubled the size of Feedr's product and engineering team within a 14 week period. We achieved a maximum of five candidates per hire, with a 98% submittal to first interview ratio and nearly 50% of the hires being diverse candidates.",
          result1Icon: "mdi-finance",
          result1Text: "Increased hiring velocity by 4x",
          result2Icon: "mdi-clock",
          result2Text: "13 hires made in 14 weeks",
          result3Icon: "mdi-cash-multiple",
          result3Text: "37.5% cost saving VS agency spend",
          result4Icon: "mdi-account-group",
          result4Text: "44% of new starters were diverse hires",
        },
      ],
      contact: [],
      titles: [
        {
          title: "Need to make a critical product or engineering hire?",
        },
        {
          title: "Looking to build out your core team?",
        },
        {
          title: "Need to scale your teams by 2x / 3x?",
        },
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
          text1:
            "We'll spend 2-3 hours with your team to truly understand what makes you unique. This allows us to go to market as an extension of your brand and attract the top talent.",
          text2:
            "While most recruiters focus on the active 10% of the candidate market, we’ll open up the hidden 90% for you. We take a structured approach to breaking down the local market based on your hiring needs, which allows us to unearth the hardest to find talent.",
          text3:
            "We’ll provide you with a shortlist of our top three candidates to interview. We focus on a streamlined interview process that can be completed within two weeks. As well as assessing the candidates, we’ll also showcase the benefits of working for you.",
          text4:
            "Once you’ve selected your new starter, we’ll work with you both to ensure the onboarding process is as seamless as possible. This includes handling offer negotiation, notice periods, onboarding and integration with the team.",
        },
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
          text1:
            "This session will establish how new talent will help accelerate your business goals. We’ll discuss your current state versus future state, key business and product priorities, and how talent will be expected to meet these needs.",
          text2:
            "We'll work with you to agree on the strategy and deliverables of Confido's talent solution to meet those business and product milestones.",
          text3:
            "We'll deliver our solution by providing you with expertise on wider talent strategy, as well as the new hires you need to continue scaling.",
          text4:
            "Our team will conduct regular evaluations and data analysis to drive further improvements.",
        },
      ],
    };
  },
};
</script>
