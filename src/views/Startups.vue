<template>
<v-container fluid class="pa-0 ma-0">
  <section class="ma-4 ma-lg-16">
    <v-row class="text-left mt-10">
      <v-img src="../../public/images/placeholder.svg" class="d-flex d-md-none mx-md-16" alt="image of people" />
      <v-col cols="12" sm="7" class="mt-0 mt-md-12">
        <h1 class="display-2 my-16 font-weight-bold" aria-label="Startups">
          Building out the core team?
        </h1>
        <v-btn @click="$vuetify.goTo('#search')" class=" mt-16 mr-4 btn--outlined font-weight-bold" outlined color="accent" rounded width="150" height="50">
          Search-only
        </v-btn>
        <v-btn @click="$vuetify.goTo('#onsite')" class=" mt-16 mr-4 btn--outlined font-weight-bold" outlined color="success" rounded width="150" height="50">
          On-site team
        </v-btn>
      </v-col>
      <v-col cols="12" sm="5">
      <v-img src="../../public/images/placeholder.svg" class="d-none d-md-flex mx-md-16" alt="image of people" />
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
  <v-row class="d-none d-md-flex mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12">
      <Logos :logo="logo" />
    </v-col>
  </v-row>
  <v-row class="text-left mt-8 mt-md-0 mx-0 mx-md-6 mx-lg-16" id="search">
    <v-col cols="12">
      <h1>Search.</h1>
    </v-col>
    <v-col cols="12" sm="6">
      <h2>
        Working exclusively with startups to headhunt the top product and tech talent in the market.
      </h2>
    </v-col>
    <v-col cols="12" sm="6" class="text-right">
      <v-btn class="btn--outlined font-weight-bold mx-auto px-8 py-4" outlined color="primary" rounded href="mailto:contact@confidotalent.com?subject=Startup: I'd like to know more about how Search services work">
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
      <v-card color="success" class="pa-8 my-2 white--text text-left card-shadow">
        <v-card-title class="headline font-weight-bold">
          Case studies.
        </v-card-title>
        <v-row class="ma-4">
          <v-col cols="6">
    <v-dialog
      v-model="benefex"
      width="1000px"
      class="overflow-hidden"
    >
      <template v-slot:activator="{ on, attrs }">
          <v-img src="../../public/images/benefex-white.png" width="150" contain eager class="startups" v-bind="attrs"
          v-on="on"/>
      </template>
      <v-card>
      <v-img src="https://www.confidotalent.com/application/files/7815/6090/5476/Benefex_onehub.jpg" height="200" gradient="to top right, rgba(100,115,201,1), rgba(25,32,72, .7)" >
        <v-img src="../../public/images/benefex-white.png" width="150" contain eager class="startups mt-16" />
      </v-img>
          <h2 class="primary--text px-8 pt-8">Exclusive Talent Partnership</h2>
        <v-card-text class="text-left mt-4 px-8 pt-0">
          <h3 class="primary--text">The Challenge</h3>
          <p>The CTO needed to scale a new product tribe, but had seen no success over an 18 month period, having engaged over 10 agencies.</p>
          <h3 class="primary--text">Key stats</h3>
          <ul>
          <li>Multiple hires - Java Developers, Automation QAs and Senior Product Manager</li>
          <li>Real-time market analysis to demonstrate brand strength within local hiring market</li>
          <li>4-6 week hiring timeline for each position</li>
          <li>95% CV to Interview ratio</li>
          </ul>
          <h3 class="primary--text mt-4">The Result</h3>
          <p>Confido successful scaled the product tribe and is now the exclusive Tech and Design Hiring Partner.</p>
          <h3 class="primary--text">About Benefex</h3>
          <p>Founded by CEO Matt Macri-Waller in 2003, Benefex is an employee experience provider.Employees look to their employers to design an experience that works for them, Benefex deliver those experiences through technology.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            class="px-4 py-2"
            @click="benefex = false"
          >
            Close
          </v-btn>
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
          <v-img src="../../public/images/visionbox-white.png" width="150" contain eager class="startups mt-8 mt-md-16" v-bind="attrs"
          v-on="on"/>
      </template>
      <v-card>
      <v-img src="https://www.confidotalent.com/application/files/2415/6154/4295/vision_box.jpg" height="200" gradient="to top right, rgba(100,115,201,1), rgba(25,32,72, .7)" >
        <v-img src="../../public/images/visionbox-white.png" width="150" contain eager class="startups mt-16" />
      </v-img>
          <h2 class="primary--text px-8 pt-8">Engineering Function Scaling</h2>
        <v-card-text class="text-left mt-4 px-8 pt-0">
          <h3 class="primary--text">The Challenge</h3>
          <p>The CTO needed to scale the entire engineering function; firstly hiring theirmanagement layer, then scaling the Development, DevOps and QA functions. They weren't seeing enough volume or quality from their existing recruitment channels and wanted a specialist search partner to attract top talent from allover Europe.</p>
          <h3 class="primary--text">Key stats</h3>
          <ul>
          <li>11 hires in 14 weeks</li>
          <li>30% referral applicants</li>
          <li>56% outreach response rate</li>
          <li>90% offer acceptance</li>
          </ul>
          <h3 class="primary--text mt-4">The Result</h3>
          <p>Our relationship with Vision-Box is going from strength to strength - stay tuned for more updates</p>
          <h3 class="primary--text">About Vision-Box</h3>
          <p>Confido have accelerated the hiring process for Vision-Box and will continue to be used for Tech and Design hiring across the offices in Lisbon and Porto. </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            class="px-4 py-2"
            @click="visionbox = false"
          >
            Close
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
          </v-col>
          <v-col cols="6">
            <v-img src="../../public/images/thirdspace-white.png" width="150" contain eager class="startups mt-md-2" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="my-16 full-width-green" no-gutters style="height: 8px;">
  </v-row>
  <v-row id="onsite" class="text-left mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12">
      <h1>On-site.</h1>
    </v-col>
    <v-col cols="12" sm="6">
      <h2>
        Working onsite with startups to sustainably scale product and tech teams.
      </h2>
    </v-col>
    <v-col cols="12" sm="6" class="text-right">
      <v-btn class="btn--outlined font-weight-bold mx-auto px-8 py-4" outlined color="primary" rounded href="mailto:contact@confidotalent.com?subject=Startup: I'd like to know more about how On-site services work">
        Talk to us about on-site support
      </v-btn>
    </v-col>
  </v-row>
  <v-row class="mx-0 mx-md-6 mx-lg-16">
    <v-col cols="12" md="6">
      <ColorCard v-for="card in greenCards" :key="card" :card="card" />
    </v-col>
    <v-col cols="12" md="6">
      <v-card color="accent" class="pa-8 my-2 white--text text-left card-shadow">
        <v-card-title class="headline font-weight-bold">
          Case studies.
        </v-card-title>
        <v-row class="ma-4">
          <v-col cols="6">
          <v-dialog
      v-model="unmind"
      width="1000px"
      class="overflow-hidden"
    >
      <template v-slot:activator="{ on, attrs }">
          <v-img src="../../public/images/unmind-white.png" width="150" contain eager class="startups" v-bind="attrs"
          v-on="on"/>
      </template>
      <v-card>
      <v-img src="https://www.confidotalent.com/application/files/3615/6224/8669/unmind_1.png" height="200" gradient="to top right, rgba(100,115,201,1), rgba(25,32,72, .7)" >
        <v-img src="../../public/images/unmind-white.png" width="150" contain eager class="startups mt-16" />
      </v-img>
          <h2 class="primary--text px-8 pt-8">Mobile and Web Team Scaling</h2>
        <v-card-text class="text-left mt-4 px-8 pt-0">
          <h3 class="primary--text">The Challenge</h3>
          <p>To scale their cross-platform product, the CTO needed to make some key React Native hires & a mobile SME. Having exhausted direct & referral networks, AI platforms and other agencies without success, he turned to Confido.</p>
          <h3 class="primary--text">Key stats</h3>
          <ul>
          <li>Shortlist within 3 weeks</li>
          <li>100% CV to interview ratio</li>
          <li>90% CV to final interview</li>
          <li>4 offers, 3 acceptances</li>
          <li>Average times from submission to offer reduced from 4 to 2 weeks.</li>
          </ul>
          <h3 class="primary--text mt-4">The Result</h3>
          <p>Following successful hires, Confido is now an exclusive hiring partner for the wider engineering team.</p>
          <h3 class="primary--text">About Unmind</h3>
          <p>Unmind's B2B workplace wellness platform is shown to decrease stress, enhance sleep, and improve business performance of your employees.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            class="px-4 py-2"
            @click="unmind = false"
          >
            Close
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
            <v-img src="../../public/images/feedr-white.png" width="150" contain eager class="startups mt-8 mt-md-16" />
          </v-col>
          <v-col cols="6">
          <v-img  class="startups">
            <svg width="150" height="58" fill="white" viewBox="0 0 150 58" xmlns="http://www.w3.org/2000/svg" class="mt-md-2"><path d="M112.647 9.109v2.986h5.625v3.84h-5.625v2.975h7.161v3.931H108.56V5.178h11.248v3.93h-7.161zM96.783 14.01L92.77 5.18h-4.548l8.561 17.862 8.561-17.861h-4.548l-4.013 8.83zm-14.219 1.342l5.91 7.488h-4.876l-5.624-7.174h-.048v7.174h-4.092V5.178h6.846a5.518 5.518 0 013.458 1.226 5.211 5.211 0 011.847 3.094 5.115 5.115 0 01-.618 3.527 5.36 5.36 0 01-2.803 2.328zm-.457-4.775c0-.24-.049-.471-.146-.692a1.788 1.788 0 00-1.02-.96 1.872 1.872 0 00-.715-.12h-2.3v3.513h2.3a1.834 1.834 0 001.326-.479 1.73 1.73 0 00.413-.575 1.75 1.75 0 00.142-.688zm-17.377 5.15c0 2.137-1.356 3.482-3.35 3.482-1.992 0-3.338-1.341-3.338-3.482V5.177H53.95v10.505c0 4.428 3.095 7.361 7.441 7.361s7.437-2.937 7.437-7.361V5.178h-4.091l-.008 10.549zm-44.27 4.917a.41.41 0 00-.157.109.365.365 0 00-.086.164.352.352 0 00.004.187c.015.06.049.116.09.164.176.265.49.721.944 1.364.453.643.806 1.132 1.053 1.476.101.172.24.183.416.037a17.572 17.572 0 001.81-1.73 13.505 13.505 0 002.978-6.55c.027-.026-.026 0-.15.075-3.342 2.245-5.642 3.815-6.901 4.704zm6.172-11.718c-.038-.011-.135.03-.285.127l-4.68 3.165a838.855 838.855 0 01-4.56 3.09c-.224.13-.4.321-.509.55-.038.145.041.366.243.665l1.878 2.611c.176.247.314.382.416.404.1.023.277-.049.528-.22a73.148 73.148 0 012.506-1.708 95.563 95.563 0 002.282-1.536 124.95 124.95 0 002.87-1.95.674.674 0 00.378-.59 14.36 14.36 0 00-.895-4.373c-.079-.142-.135-.22-.172-.235zm-13.706 1.82c0 .216.079.425.225.59l1.91 2.72c.15.22.263.337.36.348a.88.88 0 00.473-.202c.48-.318 2.09-1.405 4.833-3.27 2.417-1.644 4.002-2.697 4.755-3.236.25-.145.382-.257.393-.328.011-.075-.056-.22-.21-.441a14.127 14.127 0 00-2.3-2.612c-.251-.25-.42-.374-.51-.374a1.621 1.621 0 00-.584.292.076.076 0 00-.042.01.082.082 0 00-.033.027c-.012.011-.064.03-.075.037.015 0-.012.008 0 0a6279.944 6279.944 0 01-8.794 5.96.855.855 0 00-.4.479zm6.95 12.921c-.416-.575-.685-.96-.809-1.158-.202-.27-.352-.419-.453-.441a1.3 1.3 0 00-.604.145 9.696 9.696 0 01-6.054.479 8.934 8.934 0 01-4.927-2.933c-1.964-2.347-2.604-4.937-1.926-7.762.877-3.703 3.143-5.975 6.793-6.808a9.19 9.19 0 014.983.284.921.921 0 00.49.056.947.947 0 00.45-.202c.102-.074.645-.44 1.627-1.102.955-.639 1.51-1.02 1.66-1.14.15-.12.24-.194.262-.22 0-.049-.087-.123-.263-.22A13.295 13.295 0 0012.48.988a13.317 13.317 0 00-7.898 3.897 13.087 13.087 0 00-3.563 6.368 12.848 12.848 0 00.438 7.238 12.846 12.846 0 004.361 5.892 13.087 13.087 0 007.262 2.725 13.584 13.584 0 007.636-1.622.284.284 0 00.127-.079.3.3 0 00.071-.13.274.274 0 00-.082-.27c-.225-.31-.54-.758-.956-1.34zm13.775-9.712c-.026 4.981 3.863 9.237 10.082 9.267 2.942.015 4.886-.971 6.786-2.47l-2.24-3.202a6.524 6.524 0 01-4.523 1.715c-3.361-.015-5.448-2.35-5.433-5.287.015-2.937 2.128-5.25 5.485-5.235a6.513 6.513 0 014.504 1.756l2.274-3.18c-1.88-1.517-3.822-2.522-6.759-2.537-6.223-.019-10.158 4.204-10.184 9.185l.008-.012z"></path></svg>
          </v-img>
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
      benefex: false,
      visionbox: false,
      unmind: false,
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
};
</script>
