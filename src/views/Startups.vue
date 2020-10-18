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
        <v-col cols="12" sm="7" class="mt-0 mt-md-12">
          <h1 class="display-2 my-16 font-weight-bold" aria-label="Startups">
            Need to make a critical product or engineering hire?
          </h1>
          <v-btn
            @click="$vuetify.goTo('#search')"
            class="mt-16 mr-4 btn--outlined font-weight-bold"
            outlined
            color="accent"
            rounded
            width="150"
            height="50"
            >Search</v-btn
          >
          <v-btn
            @click="$vuetify.goTo('#onsite')"
            class="mt-16 mr-4 btn--outlined font-weight-bold"
            outlined
            color="success"
            rounded
            width="150"
            height="50"
            >On-site</v-btn
          >
        </v-col>
        <v-col cols="12" sm="5">
          <v-img
            src="../../public/images/placeholder.svg"
            class="d-none d-md-flex mx-md-16"
            alt="image of people"
          />
        </v-col>
      </v-row>
    </section>
    <v-row
      class="mt-10 full-width-green px-auto py-16 white--text"
      no-gutters
      style="box-shadow: 0px 0px 70px rgba(46, 49, 174, 0.55)"
    >
      <v-col cols="6" sm="3">
        <h1>
          20+
          <v-icon class="white--text ml-4">mdi-rocket-launch-outline</v-icon>
        </h1>
        <h3>Startups scaled</h3>
      </v-col>
      <v-col cols="6" sm="3">
        <h1>
          70+
          <v-icon class="white--text ml-4">mdi-account-group-outline</v-icon>
        </h1>
        <h3>Hires made</h3>
      </v-col>
      <v-col cols="6" sm="3">
        <h1>
          &lt;4
          <v-icon class="white--text ml-4">mdi-clock-check-outline</v-icon>
        </h1>
        <h3>Weeks to hire</h3>
      </v-col>
      <v-col cols="6" sm="3">
        <h1>
          97.5%
          <v-icon class="white--text ml-4">mdi-check-circle-outline</v-icon>
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
          Working exclusively with Seed and Series A stage startups to
          efficiently deliver a shortlist of 3 candidates within 4 weeks that
          you will make a hire from.
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
            >Why choose search?</v-card-title
          >
          <v-card-text class="text-h6 primary--text"
            >We know it can be hard to attract top talent when you have no brand
            presence in the market. Search allows you to make critical hires,
            efficiently and effortlessly, at pace. We work with you to craft a
            compelling message then headhunt the passive talent market to find
            you the best.</v-card-text
          >
          <v-row class="primary--text mx-auto text-center mt-4">
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-clock-check-outline</v-icon
              >
              <h1>&lt;4 weeks</h1>
              <h3>Average time to hire</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-check-circle-outline</v-icon
              >
              <h1>83% of hires</h1>
              <h3>Made from initial shortlist</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-trophy-outline</v-icon
              >
              <h1>98%</h1>
              <h3>Success rate</h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2"
                >mdi-percent-outline</v-icon
              >
              <h1>100%</h1>
              <h3>Of placements complete rebate</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12" md="6">
        <ColorCard v-for="card in purpleCards" :key="card" :card="card" />
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          color="success"
          class="pa-8 my-2 white--text text-left card-shadow"
        >
          <v-card-title class="headline font-weight-bold"
            >Case studies.</v-card-title
          >
          <v-card-subtitle class="text-h6 white--text mb-8"
            >Learn more from the teams we've built.</v-card-subtitle
          >
          <v-row class="ma-4">
            <v-col cols="6">
              <v-dialog
                v-model="benefex"
                width="1000px"
                class="overflow-hidden"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-img
                    src="../../public/images/benefex-white.png"
                    width="150"
                    contain
                    eager
                    class="startups"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <v-card>
                  <v-img
                    src="https://www.confidotalent.com/application/files/7815/6090/5476/Benefex_onehub.jpg"
                    height="200"
                    gradient="to top right, rgba(100,115,201,1), rgba(25,32,72, .7)"
                  >
                    <v-img
                      src="../../public/images/benefex-white.png"
                      width="150"
                      contain
                      eager
                      class="startups mt-16"
                    />
                  </v-img>
                  <h2 class="primary--text px-8 pt-8">
                    Exclusive Talent Partnership
                  </h2>
                  <v-card-text class="text-left mt-4 px-8 pt-0">
                    <h3 class="primary--text">The Challenge</h3>
                    <p>
                      The CTO needed to scale a new product tribe, but had seen
                      no success over an 18 month period, having engaged over 10
                      agencies.
                    </p>
                    <h3 class="primary--text">Key stats</h3>
                    <ul>
                      <li>
                        Multiple hires - Java Developers, Automation QAs and
                        Senior Product Manager
                      </li>
                      <li>
                        Real-time market analysis to demonstrate brand strength
                        within local hiring market
                      </li>
                      <li>4-6 week hiring timeline for each position</li>
                      <li>95% CV to Interview ratio</li>
                    </ul>
                    <h3 class="primary--text mt-4">The Result</h3>
                    <p>
                      Confido successful scaled the product tribe and is now the
                      exclusive Tech and Design Hiring Partner.
                    </p>
                    <h3 class="primary--text">About Benefex</h3>
                    <p>
                      Founded by CEO Matt Macri-Waller in 2003, Benefex is an
                      employee experience provider.Employees look to their
                      employers to design an experience that works for them,
                      Benefex deliver those experiences through technology.
                    </p>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="primary"
                      text
                      class="px-4 py-2"
                      @click="benefex = false"
                      >Close</v-btn
                    >
                    <v-spacer />
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog
                v-model="visionbox"
                width="1000px"
                class="overflow-hidden"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-img
                    src="../../public/images/visionbox-white.png"
                    width="150"
                    contain
                    eager
                    class="startups mt-8 mt-md-16"
                    v-bind="attrs"
                    v-on="on"
                  />
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
            <v-col cols="6">
              <v-img
                src="../../public/images/thirdspace-white.png"
                width="150"
                contain
                eager
                class="startups mt-md-2"
              />
            </v-col>
          </v-row>
        </v-card>
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
          Partnering onsite with Series B and C stage startups to sustainably
          scale product and tech teams.
        </h2>
      </v-col>
      <v-col cols="12" sm="5" class="text-right">
        <v-btn
          class="btn--outlined font-weight-bold mx-auto px-8 py-4"
          outlined
          color="primary"
          rounded
          href="mailto:contact@confidotalent.com?subject=Startup: I'd like to know more about how On-site services work"
          >Talk to us about on-site</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12" md="6">
        <v-card
          color="accent"
          class="pa-8 my-2 white--text text-left card-shadow"
        >
          <v-card-title class="headline font-weight-bold"
            >Case studies.</v-card-title
          >
          <v-card-text class="text-h6 white--text">
            Post Series A, startups need to be able to scale sustainably, at
            pace.
          </v-card-text>
          <v-card-text class="text-h6 white--text">
            With an on-site partnership we’ll help strategically plan for this
            growth, as well as deliver talent that feels at home with your
            brand.
          </v-card-text>
          <v-card-text class="text-center my-10">
            <v-icon class="white--text text-h4"> mdi-charity </v-icon>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <ColorCard v-for="card in greenCards" :key="card" :card="card" />
      </v-col>
    </v-row>
    <v-col cols="12" md="6" class="mt-8">
      <v-text class="text-h4 font-weight-bold">Case studies.</v-text>
      <v-card color="transparent" flat>
        <v-row class="ma-4">
          <v-col cols="12" md="4">
            <div class="circle pointer">
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
                <div class="circle pointer">
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
            <div class="circle pointer">
              <v-img
                src="../../public/images/feedr.webp"
                width="150"
                contain
                eager
                class="circle"
              />
            </div>
          </v-col>
        </v-row>
        <v-card-text class="primary--text text-h5"
          >Learn more from the teams we've scaled</v-card-text
        >
      </v-card>
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

export default {
  name: "Startups",
  components: {
    Logos,
    GetInTouch,
    ColorCard,
  },
  data() {
    return {
      hero:
        "https://res.cloudinary.com/kejk/image/upload/v1585992488/macbook-pro-space-gray-on-the-wooden-table_e6bu8w.jpg",
      url:
        "https://res.cloudinary.com/kejk/raw/upload/v1587568180/Lazy%20PDF%20-%20V1.1.zip",
      benefex: false,
      visionbox: false,
      unmind: false,
      contact: [],
      purpleCards: [
        {
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
        },
      ],
      greenCards: [
        {
          color: "success",
          title: "Process.",
          text:
            "Building teams on a larger scale and providing framework for long-term growth.",
          icontl: "mdi-human-greeting-proximity",
          texttl: "Discovery workshop",
          icontr: "mdi-file-document-edit-outline",
          texttr: "Project scoping",
          iconbl: "mdi-check-decagram",
          textbl: "Delivery",
          iconbr: "mdi-cog-sync-outline",
          textbr: "Analysis",
        },
      ],
    };
  },
};
</script>
