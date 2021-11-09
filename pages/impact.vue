<template>
  <v-container fluid class="pa-0 ma-0">
    <section class="mx-4 mx-lg-16">
      <v-row class="text-left mt-4">
        <v-img
          :src="require('../static/images/impactImage.png')"
          class="d-flex d-md-none mx-md-16 "
          alt="image of people"
          height="100"
          width="100"
          contain
        />
        <v-col cols="12" sm="7" class="mt-md-16">
          <h1
            class="text-h3  text-md-h2 font-weight-bold"
            aria-label="Intro text"
          >
            Our commitment to balancing planet and profit.
          </h1>
          <h2 class="text-h5 my-8">
            While our purpose is to support tech for good startups and the
            amazing work they do, we think it’s just as important to make an
            impact as a business outside of the office, too.
          </h2>
        </v-col>
        <v-spacer />
        <v-col cols="12" sm="5" class="my-auto">
          <v-img
            :src="require('../static/images/impactImage.png')"
            class="d-none d-md-flex mx-auto my-auto"
            height="240"
            width="240"
            contain
            alt="image of people"
          />
        </v-col>
      </v-row>
    </section>

    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <v-card class="pa-8 my-2 text-left card-shadow">
          <v-card-title class="headline font-weight-bold primary--text">
            Confido's commitments
          </v-card-title>
          <v-card-text class="text-h6 primary--text">
            Each year we choose four of the UN's SDG's (Sustainable Development
            Goals) to support. This year, we're focussing on:
            <strong class="secondary--text"
              >No Poverty, Clean Water, Climate Action,</strong
            >
            and <strong class="secondary--text">Life Below Water</strong>.
          </v-card-text>
          <!-- <v-row class="primary--text mx-auto text-center mt-4">
            <v-col cols="6" sm="3" class="d-flex mx-auto">
              <v-img
                :src="require('../static/images/no-poverty.png')"
                height="100"
                width="100"
                contain
              />
            </v-col>
            <v-col cols="6" sm="3" class="d-flex mx-auto">
              <v-img
                :src="require('../static/images/clean-water.png')"
                height="100"
                width="100"
                contain
              />
            </v-col>
            <v-col cols="6" sm="3" class="d-flex mx-auto">
              <v-img
                :src="require('../static/images/climate-action.png')"
                height="100"
                width="100"
                contain
              />
            </v-col>
            <v-col cols="6" sm="3" class="d-flex mx-auto">
              <v-img
                :src="require('../static/images/life-below.png')"
                height="100"
                width="100"
                contain
              />
            </v-col>
          </v-row> -->
          <v-card-text class="text-h6 primary--text">
            We're now working on making a positive impact in these areas
            through:
          </v-card-text>
          <v-row class="primary--text mx-auto text-center mt-4">
            <v-col cols="12" md="4">
              <v-icon class="secondary--text text-h2">
                mdi-leaf
              </v-icon>
              <h6 class="text-h6">
                Becoming carbon neutral and plastic-free
              </h6>
            </v-col>
            <v-col cols="12" md="4">
              <v-icon class="secondary--text text-h2">
                mdi-account-group
              </v-icon>
              <h6 class="text-h6">Organising four Impact Days a year</h6>
            </v-col>
            <v-col cols="12" md="4">
              <v-icon class="secondary--text text-h2">
                mdi-charity
              </v-icon>
              <h6 class="text-h6">
                Donating at least 2% of our profits to charity
              </h6>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="text-left mx-0 mx-md-6 mx-lg-16 pt-md-8">
      <v-col cols="12" md="7">
        <h1>Great causes we support.</h1>
      </v-col>
      <v-spacer cols="0" md="1" />
      <v-col cols="0" md="4" class="d-none d-md-flex mx-md-auto">
        <h1 class="text-center mx-md-auto pr-8">Our impact.</h1>
      </v-col>
    </v-row>

    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12" v-for="impact in impacts" :key="impact.title">
        <v-card
          class="d-flex flex-column pa-8 my-auto text-left card-shadow"
          min-height="360"
        >
          <v-row>
            <v-col cols="12" md="7" class="my-auto">
              <v-img :src="`${impact.logo}`" width="160" contain />
              <p class="text-h6 primary--text pt-md-8">
                {{ impact.content }}
              </p>
              <a :href="`${impact.link}`" target="_blank" no-referrer
                >Learn more.</a
              >
            </v-col>
            <v-spacer cols="0" md="1" />
            <v-col cols="12" md="4" class="my-auto">
              <v-img
                :src="`${impact.image}`"
                width="160"
                contain
                class="mx-auto"
              />
              <v-card-text class="text-h6 secondary--text text-center">
                <strong>{{ impact.task }}</strong>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mx-0 mx-md-6 mx-lg-16 mt-md-8">
      <v-col cols="12">
        <v-card
          color="accent"
          class="pa-8 my-2 white--text text-left card-shadow"
        >
          <v-card-title class="headline font-weight-bold">
            Our guiding Impact principles.
          </v-card-title>
          <v-card-text class="text-md-h6 white--text">
            We’re dedicated to balancing profit with purpose and a positive
            impact on the planet. We want to take this a step further and
            practice what we preach through a mixture of fundraising, team
            initiatives and company donations. We’ll be sharing a transparent
            overview of everything we’ve achieved in regular impact reports to
            show how we want to help build a better future in every way.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- <v-row class="text-left mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <h1>Team impact days.</h1>
      </v-col>
    </v-row>
    <v-row class="text-left mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="3">
            <v-card height="340" width="340">
              <v-card-text class="d-flex mx-auto my-auto">
                Placeholder
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-md-h6 primary--text">
              Once a quarter we organise team impact days to further support our
              chosen Sustainable Development Goals. For our first event, we
              (more info, then link to relevant blog post)
            </p>
            <v-btn color="secondary text--white">Read our impact report</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row> -->

    <v-row id="getInTouch" class="mx-0 mx-md-6 mx-lg-16 mb-12">
      <v-col cols="12">
        <GetInTouch :contact="contact" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GetInTouch from "../components/GetInTouch";

let title = "Our commitment to balancing planet and profit",
  desc =
    "While our purpose is to support tech for good startups and the amazing work they do, we think it’s just as important to make an impact as a business outside of the office, too.",
  url = "https://confidotalent.com/impact";

export default {
  scrollToTop: true,
  head: {
    title: title,
    meta: [
      { hid: "description", name: "description", content: desc },

      { hid: "og:title", property: "og:title", content: title },
      { hid: "og:url", property: "og:url", content: url },
      { hid: "og:description", property: "og:description", content: desc },

      { property: "twitter:domain", content: url },
      { hid: "twitter:title", property: "twitter:title", content: title },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: desc,
      },
      { hid: "twitter:url", property: "twitter:url", content: url },
      { hid: "twitter:label1", property: "twitter:label1", content: title },
    ],
    link: [{ rel: "canonical", href: url }],
  },
  components: {
    GetInTouch,
  },
  data() {
    return {
      impacts: [
        {
          logo: "../images/beam-logo.png",
          task:
            "Supporting at least one homeless person a month back into work",
          title: "About Beam",
          image: "../images/beam.png",
          content:
            "Beam is the world’s first platform that crowdfunds training for homeless people and supports them into stable work. Our monthly donations help Beam's community hit their funding goals for a brighter future.",
          link: "https://beam.org/ConfidoTalent",
        },
        {
          logo: "../images/charity-water-logo.png",
          task: "Providing 50 people with clean drinking water for 10 years",
          title: "About charity: water",
          image: "../images/charity-water.png",
          content:
            "By donating to charity: water's The Spring community, each year we’re able to help 50 people gain access to clean drinking water. Over 47000 people will get clean water each month thanks to Spring members.",
          link: "https://www.charitywater.org/confido-talent",
        },
        {
          logo: "../images/ecologi-logo.png",
          task:
            "Offsetting our carbon footprint by planting 12 trees per employee per month",
          title: "About Ecologi",
          image: "../images/ecologi.png",
          content:
            "Ecologi calculates our team's collective carbon footprint and enables us to offset it through planting trees. That funding directly impacts atmospheric CO2 levels.",
          link: "https://ecologi.com/confidotalent",
        },
        {
          logo: "../images/cleanhub-logo.png",
          task: "3,000 kg of ocean-bound plastic recovered each year",
          title: "About Cleanhub",
          image: "../images/cleanhub.png",
          content:
            "Cleanhub enables the safe collection and recovery of ocean-bound plastic waste. Our contribution supports clean environments and creates sustainable jobs in the global south.",
          link: "https://confidotalent.cleanhub.io/",
        },
        {
          logo: "../images/onhand-logo.png",
          task:
            "Bi-weekly volunteering missions completed by each member of the team",
          title: "About onHand",
          image: "../images/onhand.png",
          content:
            "onHand (otherwise known as ‘the Uber for volunteering’) is the volunteering and climate impact platform for businesses and individuals. Through the onHand app, you can help your local communities and have global impact. ",
          link: "https://www.beonhand.co.uk/",
        },
      ],
      quotes: [
        {
          content:
            "We needed to scale a small startup team about 3x in a short space of time but didn't want to compromise on the quality of candidates. We'd tried alternative recruitment arrangements but hadn't seen results until we engaged Confido.",
          advocate: "Mark Somerfield - VP of Engineering, Feedr",
        },
        {
          content:
            "Unmind needed to double the engineering team in a short time frame. Confido quickly calibrated on what we needed and we saw hires made within the first few weeks. If you're a startup looking to scale quickly without sacrificing on values alignment or diversity, then I would highly recommend Confido.",
          advocate: "Phil Mullan – CTO, Unmind",
        },
        {
          content:
            "Confido have partnered with us in the truest sense. Helping us grow more in the last six months than we achieved with others over the previous twelve.",
          advocate: "Paul Smith – CTO, Benefex",
        },
        {
          content:
            "It's a pleasure working with Confido. Simply put, they deliver. Confido have sourced universally high-quality candidates, then worked seamlessly with us to manage a candidate-centred interview process and close offers. Highly recommended.",
          advocate: "Sam Stagg - CTO, Third Space Learning",
        },
        {
          content:
            "Whether it’s a hiring goal, upskilling internal talent teams, or working with budget holders to effectively workforce and scenario plan, Confido have partnered with us in every sense of the word. Sharp, resourceful and totally committed. Great job.",
          advocate: "Matt Collinge - CTO, Curve",
        },
        {
          content:
            "We had a shortlist of candidates within 48 hours and we were able to put a job offer out within a week. I can wholeheartedly recommend Confido to help grow your team.",
          advocate: "David Riley - Head of Design, HomeHero",
        },
        {
          content:
            "Confido have been a true partner to us over the last 18 months, both in advice and execution for a number of key hires across the engineering and product teams. I’d recommend them highly to anyone needing to scale up their product and engineering functions.",
          advocate: "Tom Hooper - CEO, Matr",
        },
        {
          content:
            "Confido were able to go beyond the norm by advising on how to communicate our brand and the opportunity to the market, and build out an efficient process to attract the top tier candidates we wanted.",
          advocate: "Avin Rabheru - CEO, Housekeep",
        },
        {
          content:
            "Confido worked really closely with me to help me find our new Head of Engineering. The candidates we met were all high calibre and very credible. The whole process was much quicker than I’ve experienced on similar searches in the past.",
          advocate: "Richard Wazacz - CEO, Octopus Wealth",
        },
        {
          content:
            "We had an urgent position to fill that we had been struggling with for 12 months. Confido came on and helped us to redefine the role and brief to better fit the market before carrying out a fantastic headhunting search that yielded a really diverse set of candidates. They also provided a huge amount of help with the process itself so that candidates always felt in to the loop, many of whom commenting on how well run everything was. From 12 months looking it took just weeks for Confido to fill the vacancy. But the biggest point for a B-Corp, like ourselves, was feeling safe that our brand was being presented well in the process. Any mission driven company would feel safe with Confido representing them.",
          advocate: "Adam Dunkley – Director of Technology, Allplants",
        },
      ],
      contact: [],
    };
  },
};
</script>
