/* eslint-disable */
<template>
  <v-container fluid class="pa-0 ma-0">
    <section class="mx-4 mx-lg-16">
      <v-row class="text-left mt-4">
        <v-img
          src="../../public/images/startupsVisual.png"
          class="d-flex d-md-none mx-md-16"
          alt="image of people"
        />
        <v-col cols="12" sm="7" class="mt-md-16">
          <h1
            class="text-h3  text-md-h2 font-weight-bold"
            aria-label="Intro text"
          >
            Finally, a talent partner who truly understands startups.
          </h1>
          <h2 class="text-h5 my-8">
            Whether you're making a critical hire, building a core team or scaling up squads, we're here for you.
          </h2>
        <v-row class="mt-12 mx-0">
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
            >Onsite</v-btn
          >
          </v-row>
        </v-col>
        <v-spacer />
        <v-col cols="12" sm="5">
          <v-img
            src="../../public/images/startupsVisual.png"
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
        <v-icon class="text-h2 white--text mb-2"
          >mdi-rocket-launch-outline</v-icon
        >
        <h1>
          20+
        </h1>
        <h3>Startups scaled</h3>
      </v-col>
      <v-col cols="6" sm="3">
        <v-icon class="text-h2 white--text mb-2"
          >mdi-account-group-outline</v-icon
        >
        <h1>
          70+
        </h1>
        <h3>Hires made</h3>
      </v-col>
      <v-col cols="6" sm="3">
        <v-icon class="text-h2 white--text mb-2"
          >mdi-clock-check-outline</v-icon
        >
        <h1>
          4 weeks
        </h1>
        <h3>Average time to hire</h3>
      </v-col>
      <v-col cols="6" sm="3">
        <v-icon class="text-h2 white--text mb-2"
          >mdi-check-circle-outline</v-icon
        >
        <h1>
          98%
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
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text text-h2"
                >mdi-account-group-outline</v-icon
              >
              <h1>3 candidate</h1>
              <h3>Limit per role</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text text-h2"
                >mdi-clock-check-outline</v-icon
              >
              <h1>4 weeks</h1>
              <h3>Average time to hire</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text text-h2"
                >mdi-check-circle-outline</v-icon
              >
              <h1>83% of hires</h1>
              <h3>Made from initial shortlist</h3>
            </v-col>
            <v-col cols="6" sm="3">
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
          >Learn more from the teams we've built</v-card-text
        >
        <v-row class="ma-4 mx-md-auto">
          <v-spacer />
          <v-col cols="12" md="2">
              <v-dialog
                v-model="benefex"
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
              <v-col cols="12" md="2">
              <v-dialog
              v-model="thirdSpace"
              width="1000px"
              class="overflow-hidden"
              >
              <template v-slot:activator="{ on, attrs }">
              <div class="circle pointer my-8">
                <v-img
                  src="../../public/images/thirdSpace.png"
                  width="150"
                  contain
                  eager
                  class="circle pointer"
                  v-bind="attrs"
                  v-on="on"
                />
                </div>
                </template>
                  <CaseStudyLargeCard v-for="card in caseStudyCards.slice(1,2)" :key="card" :card="card" />
              </v-dialog>
              </v-col>
              <v-col cols="12" md="2">
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
                  <CaseStudyLargeCard v-for="card in caseStudyCards.slice(2,3)" :key="card" :card="card" />
              </v-dialog>
            </v-col>
            <v-spacer />
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
        <h1>Onsite.</h1>
      </v-col>
      <v-col cols="12" sm="7">
        <h2>
          Partnering with Series B and C startups to enable sustainable long-term scaling of product and tech teams.
        </h2>
      </v-col>
      <v-col cols="12" sm="5" class="text-right">
        <v-btn
          class="btn--outlined font-weight-bold mx-auto px-8 py-4"
          outlined
          color="secondary"
          rounded
          href="mailto:contact@confidotalent.com?subject=Startup: I'd like to know more about how onsite services work"
          >Get in touch</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <v-card class="pa-8 my-2 white--text text-left card-shadow">
          <v-card-title class="headline font-weight-bold primary--text"
            >Why Onsite?</v-card-title
          >
          <v-card-text class="text-h6 primary--text"
            >Going from 50 hires to 100, to 200 and above is tough. You need to start thinking about talent more strategically, whilst continuing to grow headcount each month. Onsite provides you with the expertise you need to plan for the long term, alongside hitting your hiring goals in the short and medium term.</v-card-text
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
              <h1>3x increase</h1>
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
              <h1>Improved</h1>
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
          >Learn more from the teams we've scaled.</v-card-text
        >
        <v-row class="ma-4 mx-md-auto">
          <v-spacer />
          <v-col cols="12" md="2">
            <v-dialog
              v-model="curve"
              width="1000px"
              class="overflow-hidden"
            >
              <template v-slot:activator="{ on, attrs }">
              <div class="circle pointer my-8">
              <v-img
                src="../../public/images/curve.png"
                width="150"
                contain
                eager
                class="circle pointer"
                v-bind="attrs"
                v-on="on"
              />
              </div>
              </template>
                <CaseStudyLargeCard v-for="card in caseStudyCards.slice(3,4)" :key="card" :card="card" />
            </v-dialog>
          </v-col>
          <v-col cols="12" md="2">
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
              <CaseStudyLargeCard v-for="card in caseStudyCards.slice(4,5)" :key="card" :card="card" />
          </v-dialog>
          </v-col>
          <v-col cols="12" md="2">
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
              <CaseStudyLargeCard v-for="card in caseStudyCards.slice(5,6)" :key="card" :card="card" />
          </v-dialog>
          </v-col>
          <v-spacer />
        </v-row>
    </v-col>
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
          image: "https://thirdspacelearning.com/wp-content/uploads/2020/09/wsr.jpg",
          logo: "../images/thirdspace-white.png",
          title: "Third Space Learning are the largest provider of 1-to-1 maths tutor support in the UK.",
          brief: "Third Space Learning (TSL)  needed a talent partner that could support them through various rounds of funding and growth, with most of their hiring being within product and tech.",
          challenge1Title: "Branding",
          challenge1: "Although TSL have a compelling mission, they were unknown to the talent market and needed help to reach the right people.",
          challenge2Title: "Attraction",
          challenge2: "Being an early stage startup they weren’t sure on how product and tech talent wanted to be engaged and what mattered to them.",
          challenge3Title: "Consistency",
          challenge3: "With peaks in growth and tight timelines, TSL needed a partner they could trust to deliver on critical hires.",
          solution1Icon: "mdi-file-document",
          solution1Title: "Brief workshop",
          solution1: "",
          solution1Text: "We worked with TSL to understand their unique mission and culture, then tied that with the product and tech motivators top candidates would be looking for.",
          solution2Icon: "mdi-magnify",
          solution2Title: "Search process",
          solution2: "",
          solution2Text: "We focussed on headhunting candidates with a passion for social impact products.",
          solution3Icon: "mdi-cog",
          solution3Title: "Flexibility",
          solution3: "",
          solution3Text: "We were able to provide top talent through a blend of search hires and interim consultants.",
          resultText: "We provided TSL with a blended team of interim consultants and permanent hires to build the MVP for their 2nd product within a tight timeline. Once the MVP was launched, we worked with the leadership team to build out the core permanent team. This consisted of six hires.",
          result1Icon: "mdi-account-group",
          result1Text: "12+ hires made over 2 years",
          result2Icon: "mdi-clock",
          result2Text: "5 weeks average time to hire",
          result3Icon: "mdi-trophy",
          result3Text: "100% success rate on searches",
        },
        {
          image: "https://thirdspacelearning.com/wp-content/uploads/2020/09/wsr.jpg",
          logo: "../images/visionbox-white.png",
          title: "Vision-box are creating a world where everyone can travel seamlessly without the need for physical documentation using cutting edge biometrics and cyber security.",
          brief: "Vision-Box had just hired a new CTO to scale their product and engineering function by 3x. They needed a recruitment partner that could attract local and international talent to build a world class engineering function within a 3 month window.",
          challenge1Title: "Branding",
          challenge1: "Although well known locally, Vision-box didn’t have a strong reputation and were unknown internationally.",
          challenge2Title: "Process",
          challenge2: "Their process was slow, often taking 6-8 weeks for a candidate to complete the process.",
          challenge3Title: "Scale",
          challenge3: "The team needed to recruit a large number of people, across different skill sets in a 4 month window.",
          solution1Icon: "mdi-file-document",
          solution1Title: "Talent branding",
          solution1: "",
          solution1Text: "We worked together to create a compelling story to attract local and overseas talent.",
          solution2Icon: "mdi-magnify",
          solution2Title: "Process planning",
          solution2: "",
          solution2Text: "We agreed a streamlined three stage process that would be completed within two weeks. We also confirmed packages to attract international talent.",
          solution3Icon: "mdi-cog",
          solution3Title: "Search process",
          solution3: "",
          solution3Text: "We dedicated multiple Confido resources to the project to run local and international searches in parallel.",
          resultText: "We successfully made multiple hires across Development, QA, DevOps, and Management.  We took a top down approach, helped the CTO build the senior management team before scaling the teams. We also built the DevOps and Automated Testing functions from scratch.",
          result1Icon: "mdi-account-group",
          result1Text: "11 hires made within 13 weeks",
          result2Icon: "mdi-clock",
          result2Text: "3x reduction in time to hire",
          result3Icon: "mdi-trophy",
          result3Text: "Hiring accelerated by 10x",
        },
        {
          image: "https://images.ctfassets.net/c3tzxbn050pi/2OCGE5PFSfeGMJnN1O3FzP/7f9bca77ef15334ef2ffeb74e61cc506/All-your-cards-in-one.jpg?w=510&h=650&q=80&fm=webp",
          logo: "../images/curve-white.png",
          title: "Curve is on a mission to simplify the way people spend, send, see and save money. Curve allows the user to combine their accounts and cards through the Curve app.",
          brief: "Following their Series B, Curve had been through a period of rapid growth. They were set for another 6 months of sustained growth but wanted a partner that could provide strategic input and better visibility of hiring data, whilst still making key hires across product and engineering.",
          challenge1Title: "Scaleability",
          challenge1: "Curve needed the right data, metrics and processes in place to sustain high volume hiring.",
          challenge2Title: "Lack of data",
          challenge2: "Their existing data was not fit for purpose, which lead to too many “gut feel” decisions.",
          challenge3Title: "Overloaded talent team",
          challenge3: "The team was silo’d and needed to be more closely aligned with the business.",
          solution1Icon: "mdi-file-document",
          solution1Title: "Process planning",
          solution1: "",
          solution1Text: "Firstly, we reviewed the growth needed vs the current hiring process and implemented changes to allow for interview capacity and scalability.",
          solution2Icon: "mdi-magnify",
          solution2Title: "Headhunting",
          solution2: "",
          solution2Text: "We then focussed on headhunting through direct sourcing methods to ensure both a cultural and technical fit.",
          solution3Icon: "mdi-cog",
          solution3Title: "Scaling and diversity",
          solution3: "",
          solution3Text: "Ramping up a small team of interim consultants was next, whilst also focusing on longer term permanent hires. We then worked with the leadership team to map current state vs future state in therms of diversity. We set up partnerships with MeetUps and communities in order to make Curve more accessible. ",
          resultText: "Within four months we provided Curve with: A clear reporting structure between business and Talent leading which reduced delays in process, clear metrics for managing performance of the Talent team and individual OKR’s set, 4 critical hires. Confido were then asked to act at Interim Head of Talent whilst Curve recruiting a permanent hire. During this time we were asked to managed the Talent Function and worked with Finance to agree the workforce planning and budgets for 2020-21.",
          result1Icon: "mdi-lightbulb",
          result1Text: "Acted as interim Head of Talent",
          result2Icon: "mdi-rocket-launch",
          result2Text: "Developed OKRs for the Talent team",
          result3Icon: "mdi-account-group",
          result3Text: "Created reporting strategy for key stakeholders",
        },
        {
          image: "https://images.ctfassets.net/c3tzxbn050pi/2OCGE5PFSfeGMJnN1O3FzP/7f9bca77ef15334ef2ffeb74e61cc506/All-your-cards-in-one.jpg?w=510&h=650&q=80&fm=webp",
          logo: "../images/unmind-white.png",
          title: "Unmind is a workplace mental health platform. They empower employees to measure, understand, and improve their mental wellbeing.",
          brief: "Unmind needed to grow their engineering squads from 2 to 4 to deliver on their product roadmap. They needed a dedicated Talent Manager for a period of 6 months to oversee this growth.",
          challenge1Title: "Assessment",
          challenge1: "Finding Full Stack Engineers that were aligned to their mission whilst also meeting the high technical bar.",
          challenge2Title: "Scalability",
          challenge2: "Putting in place a process that would allow for this many hires with the number of interviewers available.",
          challenge3Title: "",
          challenge3: "",
          solution1Icon: "mdi-file-document",
          solution1Title: "Process planning",
          solution1: "",
          solution1Text: "Reviewed the growth vs current hiring process and implemented changes to allow for interview capacity and scalability",
          solution2Icon: "mdi-magnify",
          solution2Title: "Headhunting",
          solution2: "",
          solution2Text: "Focus on direct sourcing methods to ensure cultural and technical fit (referrals, cord, headhunting)",
          solution3Icon: "mdi-cog",
          solution3Title: "Scaling and diversity",
          solution3: "",
          solution3Text: "We initially ramped up a small team of interim consultants whilst focusing on longer term permanent hires. We then worked with the leadership team to map current state vs future state of diversity. Set up partnerships with MeetUps and communities.",
          resultText: "Squads 3 and 4, hired within 4 months Project extended to focus on other key engineering hires and further squad growth Improved team diversity",
          result1Icon: "mdi-account-group",
          result1Text: "24 hires made in 6 months",
          result2Icon: "mdi-clock",
          result2Text: "Improved time to hire by 25%",
          result3Icon: "mdi-cash-multiple",
          result3Text: "£75k cost saving VS agency spend",
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
          text1: "We'll spend 2-3 hours with your team to truly understand what makes you unique. This allows us to go to market as an extension of your brand and attract the top talent.",
          text2: "While most recruiters focus on the active 10% of the candidate market, we’ll open up the hidden 90% for you. We take a structured approach to breaking down the local market based on your hiring needs, which allows us to unearth the hardest to find talent.",
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
  },
};
</script>
