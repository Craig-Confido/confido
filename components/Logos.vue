<template>
  <v-card
    color="white"
    class="pt-8 px-4 py-4 pa-md-8 py-md-8 my-0 card-shadow"
  >
    <h1 class="mb-0 ml-3 text-left">
      Startups we've scaled.
    </h1>
    <h4 class="mt-0 ml-3 text-left">
      Click a logo to learn more.
    </h4>
    <v-row class="mx-4 my-4 d-none d-sm-flex">
      <v-dialog
        max-width="1000px"
        overflow-hidden
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            :src="require('../static/images/benefex.png')"
            max-width="160"
            contain
            class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <CaseStudySmallCard
          v-for="(card, index_1) in cards.slice(0, 1)"
          :key="index_1"
          :card="card"
        />
      </v-dialog>
      <v-dialog
        max-width="1000px"
        overflow-hidden
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            :src="require('../static/images/thirdSpace.png')"
            max-width="160"
            contain
            class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <CaseStudySmallCard
          v-for="(card, index_2) in cards.slice(6, 7)"
          :key="index_2"
          :card="card"
        />
      </v-dialog>
      <v-dialog
        max-width="1000px"
        overflow-hidden
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            :src="require('../static/images/feedr.webp')"
            max-width="160"
            contain
            class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <CaseStudySmallCard
          v-for="(card, index_3) in cards.slice(9, 10)"
          :key="index_3"
          :card="card"
        />
      </v-dialog>
      <v-dialog
        max-width="1000px"
        overflow-hidden
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            :src="require('../static/images/matr.png')"
            max-width="160"
            contain
            class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <CaseStudySmallCard
          v-for="(card, index_4) in cards.slice(5, 6)"
          :key="index_4"
          :card="card"
        />
      </v-dialog>
      <v-dialog
        max-width="1000px"
        overflow-hidden
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            :src="require('../static/images/unmind.png')"
            max-width="160"
            contain
            class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <CaseStudySmallCard
          v-for="(card, index_5) in cards.slice(3, 4)"
          :key="index_5"
          :card="card"
        />
      </v-dialog>
      <v-dialog
        max-width="1000px"
        overflow-hidden
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            :src="require('../static/images/wagestream.png')"
            max-width="160"
            contain
            class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <CaseStudySmallCard
          v-for="(card, index_6) in cards.slice(10, 11)"
          :key="index_6"
          :card="card"
        />
      </v-dialog>
      <v-dialog
        max-width="1000px"
        overflow-hidden
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            :src="require('../static/images/homehero.svg')"
            max-width="160"
            contain
            class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <CaseStudySmallCard
          v-for="(card, index_7) in cards.slice(2, 3)"
          :key="index_7"
          :card="card"
        />
      </v-dialog>
      <v-dialog
        max-width="1000px"
        overflow-hidden
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            :src="require('../static/images/curve.png')"
            max-width="160"
            contain
            class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <CaseStudySmallCard
          v-for="(card, index_8) in cards.slice(4, 5)"
          :key="index_8"
          :card="card"
        />
      </v-dialog>
      <v-dialog
        max-width="1000px"
        overflow-hidden
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            :src="require('../static/images/vision-box.svg')"
            max-width="160"
            contain
            class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <CaseStudySmallCard
          v-for="(card, index_9) in cards.slice(8, 9)"
          :key="index_9"
          :card="card"
        />
      </v-dialog>
      <v-dialog
        max-width="1000px"
        overflow-hidden
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            :src="require('../static/images/houseKeep.png')"
            max-width="160"
            contain
            class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <CaseStudySmallCard
          v-for="(card, index_10) in cards.slice(1, 2)"
          :key="index_10"
          :card="card"
        />
      </v-dialog>
      <v-dialog
        max-width="1000px"
        overflow-hidden
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            :src="require('../static/images/octopusWealth.png')"
            max-width="160"
            contain
            class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <CaseStudySmallCard
          v-for="(card, index_11) in cards.slice(7, 8)"
          :key="index_11"
          :card="card"
        />
      </v-dialog>
    </v-row>

    <v-row class="mx-4 my-4 d-flex d-sm-none">
      <v-col cols="6">
        <v-dialog
          max-width="1000px"
          overflow-hidden
        >
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="require('../static/images/benefex.png')"
              max-width="160"
              contain
              class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <CaseStudySmallCard
            v-for="(card, index_12) in cards.slice(0, 1)"
            :key="index_12"
            :card="card"
          />
        </v-dialog>
        <v-dialog
          max-width="1000px"
          overflow-hidden
        >
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="require('../static/images/thirdSpace.png')"
              max-width="160"
              contain
              class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <CaseStudySmallCard
            v-for="(card, index_13) in cards.slice(6, 7)"
            :key="index_13"
            :card="card"
          />
        </v-dialog>
        <v-dialog
          max-width="1000px"
          overflow-hidden
        >
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="require('../static/images/feedr.webp')"
              max-width="160"
              contain
              class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <CaseStudySmallCard
            v-for="(card, index_14) in cards.slice(9, 10)"
            :key="index_14"
            :card="card"
          />
        </v-dialog>
        <v-dialog
          max-width="1000px"
          overflow-hidden
        >
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="require('../static/images/matr.png')"
              max-width="160"
              contain
              class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <CaseStudySmallCard
            v-for="(card, index_15) in cards.slice(5, 6)"
            :key="index_15"
            :card="card"
          />
        </v-dialog>
        <v-dialog
          max-width="1000px"
          overflow-hidden
        >
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="require('../static/images/unmind.png')"
              max-width="160"
              contain
              class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <CaseStudySmallCard
            v-for="(card, index_16) in cards.slice(3, 4)"
            :key="index_16"
            :card="card"
          />
        </v-dialog>
      </v-col>
      <v-col cols="6">
        <v-dialog
          max-width="1000px"
          overflow-hidden
        >
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="require('../static/images/wagestream.png')"
              max-width="160"
              contain
              class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <CaseStudySmallCard
            v-for="(card, index_17) in cards.slice(10,11)"
            :key="index_17"
            :card="card"
          />
        </v-dialog>
        <v-dialog
          max-width="1000px"
          overflow-hidden
        >
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="require('../static/images/homehero.svg')"
              max-width="160"
              contain
              class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <CaseStudySmallCard
            v-for="(card, index_18) in cards.slice(2,3)"
            :key="index_18"
            :card="card"
          />
        </v-dialog>
        <v-dialog
          max-width="1000px"
          overflow-hidden
        >
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="require('../static/images/curve.png')"
              max-width="160"
              contain
              class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <CaseStudySmallCard
            v-for="(card, index_19) in cards.slice(4,5)"
            :key="index_19"
            :card="card"
          />
        </v-dialog>
        <v-dialog
          max-width="1000px"
          overflow-hidden
        >
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="require('../static/images/vision-box.svg')"
              max-width="160"
              contain
              class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <CaseStudySmallCard
            v-for="(card, index_20) in cards.slice(8,9)"
            :key="index_20"
            :card="card"
          />
        </v-dialog>
        <v-dialog
          max-width="1000px"
          overflow-hidden
        >
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="require('../static/images/houseKeep.png')"
              max-width="160"
              contain
              class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <CaseStudySmallCard
            v-for="(card, index_21) in cards.slice(1,2)"
            :key="index_21"
            :card="card"
          />
        </v-dialog>
        <v-dialog
          max-width="1000px"
          overflow-hidden
        >
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="require('../static/images/octopusWealth.png')"
              max-width="160"
              contain
              class="mx-4 mx-sm-8 my-8 my-md-4 pointer"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <CaseStudySmallCard
            v-for="(card, index_22) in cards.slice(7,8)"
            :key="index_22"
            :card="card"
          />
        </v-dialog>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CaseStudySmallCard from "../components/CaseStudySmallCard";

export default {
  name: "Logos",
  components: {
    CaseStudySmallCard
  },
  data() {
    return {
      cards: [
        {
          image: "../images/benefex-white.png",
          title: "Benefex build workplace tech that transforms the employee experience, and focuses on improving employee wellbeing.",
          cols4: true,
          icon1: "mdi-account-group",
          label1: "12 key new hires",
          icon2: "mdi-clock-check",
          label2: "Hire time reduced from 12+ weeks to 4-6",
          icon3: "mdi-charity",
          label3: "Built out leadership team",
          icon4: "mdi-check-circle",
          label4: "100% success rate across all hires",
          hiresMade: "14",
          subtitle: "Hires made by Confido",
          overviewText: "Benefex needed a partner that knew how to attract product-minded engineers in a small local market. Since summer 2018, we’ve sourced over 14 Benefex-ers across Dev, QA, Platform, Product and UX. We’ve built out their next leadership layer with a VP of Engineering and Chapter Leads, and hired their third squad to build a brand new product.",
          quote: "Confido have partnered with us in the truest sense. The team have taken the time to get a deep understanding of our culture and vision for the future of Benefex, helping us grow our Product Engineering tribe more in the last six months than we achieved with others over the previous twelve. Whether the role has been in Engineering, Product or Leadership, Confido have demonstrated an emotional intelligence with candidates that I have not seen previously. In a location with a limited pool of majority passive candidates, Confido have shown a unique ability to marry the needs of Benefex and a candidate’s true career drivers. This has resulted in not just an increase to our tribe’s numbers, but enabled us to find true Benefex’ers who have both the skillset, drive to improve themselves and personality that makes our culture what it is today. In my role as CTO, Confido have been a reliable source of market trends and a constructive sounding board for what the market can provide at a particular time. This has enabled us to find the right balance in the roles and skillsets we use to grow Benefex in a sustainable way. Without them, I am sure we wouldn’t be as far along our journey as we currently are; long may it continue.",
          person: "Paul Smith – CTO, Benefex",
        },
        {
          image: "../images/houseKeep-white.png",
          title: "Housekeep is a B2C marketplace connecting business and  home owners with trusted cleaners.",
          cols4: true,
          icon1: "mdi-account-group-outline",
          label1: "Each hire made from shortlist of 3 candidates",
          icon2: "mdi-rocket-launch-outline",
          label2: "First dedicated frontend hire",
          icon3: "mdi-percent",
          label3: "100% submittal to interview ratio",
          icon4: "mdi-check-circle-outline",
          label4: "100% success rate across all hires",
          hiresMade: "2",
          subtitle: "Hires made by Confido",
          overviewText: "Housekeep needed to make two critical hires to fit within their small, tightknit team. Quality and time were of the essence for this project, so moving fast without compromising on talent calibre was key. Within five weeks, we connected Housekeep with two great engineers to add further backend and frontend capacity.",
          quote: "Craig and his team quickly understood the profile we were looking for in terms of technology, seniority and, crucially, culture. They were able to go beyond this by advising on how to communicate our brand and the opportunity to the market, and build out an efficient process to attract the top tier candidates we wanted. We're delighted to have made two hires very quickly and are continuing to work together. I'd highly recommend Confido.",
          person: "Avin Rabheru – CEO, Housekeep",
        },
        {
          image: "../images/homehero-white.png",
          title: "HomeHero takes care of all the household tasks and admin that you don't want to, leaving you time for things that really matter in life.",
          cols4: true,
          icon1: "mdi-charity",
          label1: "Key leadership hire made",
          icon2: "mdi-rocket-launch-outline",
          label2: "New hire helped launch new product offering",
          icon3: "mdi-account-group-outline",
          label3: "Shortlist of 3 interviewed within 48 hours",
          icon4: "mdi-clock-outline",
          label4: "Critical hire made within 1 week",
          hiresMade: "2",
          subtitle: "Hires made by Confido",
          overviewText: "Preparing for growth and a new product launch, HomeHero needed to invest in their product team. We were able to help them attract a top Head of Product and Product Designer to enable them to launch their newest service offering to the market.",
          quote: "You rarely come across a recruiter as efficient as Confido. I had the pleasure of working with them to help us find a new Product Designer to join our team. The Confido team have the fantastic ability to ask pertinent questions to properly understand a job brief and then only send through candidates that meet our high standard. We had a shortlist of candidates within 48 hours and we were able to put a job offer out within a week. I can wholeheartedly recommend Confido to help grow your team.",
          person: "David Riley – Head of Design, HomeHero",
        },
        {
          secondQuote: false,
          image: "../images/unmind-white.png",
          title: "Unmind is a workplace mental health platform. They empower employees to measure, understand, and improve their mental wellbeing.",
          cols4: true,
          icon1: "mdi-lightbulb",
          label1: "Core squads doubled",
          icon2: "mdi-rocket-launch-outline",
          label2: "25% improvement in process speed",
          icon3: "mdi-cash-multiple",
          label3: "Cost saving of over £75k",
          icon4: "mdi-account-group-outline",
          label4: "Improved team diversity",
          hiresMade: "24",
          subtitle: "Hires made by Confido",
          overviewText: "We’ve supported Unmind through Seed and Series A funding rounds. Initially, we hired three Full Stack Engineers to join the core team, then later doubled their squads from two to four. Overall, we’ve helped them make over 24 hires, mainly Full Stack Engineers, Lead Engineers and Engineering Managers.",
          quote: "Unmind had huge growth plans following Series A investment and needed to double the engineering team in a short time frame whilst retaining our core values and safeguarding our culture. We needed an embedded talent partner that would lead our end-to-end candidate experience for engineering at the same time as delivering on the ambitious growth plans. Confido partnered with us in the truest sense and delivered on both levels. As acting members of the team, the Confido team were natural Unminders. They quickly calibrated on what we needed and we saw hires made within the first few weeks. They also worked closely with key stakeholders across the business on wider initiatives like our referral policy. What clearly stood out was that Confido ensured we had a diverse candidate pipeline that were aligned with our company values. They put together a structure and set of processes that will continue to help us grow in the long term. It made complete sense to extend Confido as our growth continued to accelerate, and they also made sure there was a seamless transition as our new Head of People joined. If you're a startup looking to scale quickly without sacrificing on values alignment or diversity, then I would highly recommend Confido.",
          person: "Phil Mullan – CTO, Unmind"
        },
        {
          secondQuote: true,
          image: "../images/curve-white.png",
          title: "Curve is on a mission to simplify the way people spend, send, see and save money. Curve allows the user to combine their accounts and cards through the Curve app.",
          cols4: true,
          icon1: "mdi-rocket-launch",
          label1: "Reduced time to hire by 26%",
          icon2: "mdi-lightbulb",
          label2: "Increased fill rate by 20%",
          icon3: "mdi-cash-multiple",
          label3: "Reduced agency spend by £175k",
          icon4: "mdi-account-group",
          label4: "46% of new starters were diverse hires",
          hiresMade: "4",
          subtitle: "Hires made by Confido",
          overviewText: "Following their Series B funding round, Curve needed to attract top engineers whilst re-structuring their talent function for long term success. We helped make a number of hires, before moving into an interim Head of Talent role. This involved working with key stakeholders to ensure their talent team was structured for sustainable growth.",
          quote: "The team at Confido are unlike any other recruitment business I have worked with. This was important in more ways than I can express, from both a personal and Curve standpoint. Confido's ability to quickly connect with people and business functions ensured consistent delivery of solutions that could and have been relied upon. Whether it’s a hiring goal, upskilling internal talent teams, or working with budget holders to effectively workforce and scenario plan, Confido have partnered with us in every sense of the word. Sharp, resourceful and totally committed. Great job. ",
          quote2: "Appointing a recruitment partner is a challenge; finding one you can trust with your business as if it were their own is near impossible. Confido live up to the high expectations they set for themselves and they have been instrumental in helping Curve hire people that not only have the skills, but also fit our culture and company values. Beyond hiring, Confido have worked closely with myself and the People Ops team to improve our recruitment processes, use of data and documentation, driving consistency and improving the relationships talent has across the business. Highly recommended.",
          person: "Matt Collinge – CTO, Curve",
          person2: "Kate James – Head of People, Curve",
        },
        {
          image: "../images/matr-white.png",
          title: "Matr provide affordable, online one-to-one tutoring to families. This includes online maths tuition used by over 50000 UK children for SATs, 11+ and secondary school.",
          icon1: "mdi-lightbulb",
          label1: "Built out the core team",
          icon2: "mdi-account-group-outline",
          label2: "Scaled a team of contract and permament hires",
          icon3: "mdi-bullseye-arrow",
          label3: "New hires delivered MVP within 5 months",
          icon4: "",
          label4: "",
          hiresMade: "6",
          subtitle: "Hires made by Confido",
          overviewText: "Matr needed to launch the first version of their new product to a tight deadline. We built a small team of interim engineers to build the MVP whilst hiring permanent replacements in the background. The product was launched one month early, which allowed them to secure their next funding round.",
          quote: "Confido have been a true partner to us over the last 18 months, both in advice and execution for a number of key hires across the engineering and product teams. I’d recommend them highly to anyone needing to scale up their product and engineering functions.",
          person: "Tom Hooper – CEO, Matr",
        },
        {
          image: "../images/thirdspace-white.png",
          title: "Third Space Learning are the largest provider of 1-to-1 maths tutor support in the UK.",
          icon1: "mdi-account-group-outline",
          label1: "Rebuilt core engineering team",
          icon2: "mdi-clock-outline",
          label2: "5 week average time to hire",
          icon3: "mdi-trophy-outline",
          label3: "100% success rate",
          icon4: "",
          label4: "",
          hiresMade: "8",
          subtitle: "Hires made by Confido",
          overviewText: "Third Space Learning needed to build out their core product and engineering team to enable growth into new markets. We’ve helped them hire eight people across Dev, DevOps, Product and UX.",
          quote: "It's a pleasure working with Confido. Simply put, they deliver. At Third Space Learning we've filled multiple engineering positions through Confido over the past six months, covering full-stack, frontend and DevOps, and both contract and permanent roles. Confido have sourced universally high-quality candidates, then worked seamlessly with us to manage a candidate-centred interview process and close offers. Confido have approached the whole process as a true partnership, and that has definitely helped us overcome the inevitable bumps in the road that happen when growing a team. I look forward to working with Confido in future - highly recommended.",
          person: "Sam Stagg – CTO, Third Space Learning",
        },
        {
          image: "../images/octopusWealth-white.png",
          title: "Octopus Wealth help you do more with your money, with a tailored financial plan that's clear, straightforward and convenient.",
          icon1: "mdi-account-group-outline",
          label1: "Hired Tech Co-Founder to enable MVP launch",
          icon2: "mdi-clock-outline",
          label2: "Hire made within 3 weeks",
          icon3: "mdi-trophy-outline",
          label3: "100% interview success rate",
          icon4: "",
          label4: "",
          hiresMade: "2",
          subtitle: "Hires made by Confido",
          overviewText: "Octopus Wealth required a Technical Co-Founder to help them build out their engineering team, they needed a top tier tech leader within a short timeframe. The hire was made from a shortlist of three candidates within three weeks. ",
          quote: "Confido worked really closely with me to help me find our new Head of Engineering. The most important aspect for me was calibrating with Confido really quickly on what we were looking for. Within days of spec’ing out the role, we were seeing CVs and meeting potential candidates so we could quickly agree and hone-in on what we were looking for. The Confido team were really keen to understand exactly what I was looking for from the start, and as a result the candidates we met were all high caliber and very credible. This meant the whole process was much quicker than I’ve experienced on similar searches in the past.",
          person: "Richard Wazacz – CEO, Octopus Wealth",
        },
        {
          image: "../images/visionbox-white.png",
          title: "Vision-box are creating a world where everyone can travel seamlessly without the need for physical documentation using cutting edge biometrics and cyber security.",
          cols4: true,
          icon1: "mdi-account-group-outline",
          label1: "Helped new CTO reshape and scale his team",
          icon2: "mdi-clock-outline",
          label2: "Created QA and DevOps functions",
          icon3: "mdi-trophy-outline",
          label3: "11 hires made within 13 weeks",
          icon4: "mdi-finance",
          label4: "Time to hire reduced by 30%",
          hiresMade: "12",
          subtitle: "Hires made by Confido",
          overviewText: "Vision-Box needed to accelerate their engineering hiring after struggling with direct hiring and local partners. Within 13 weeks we made 11 hires across Dev, QA, Release and DevOps, including five Head of departments. We were able to attract both local and international candidates.",
          quote: "I’ve worked with Confido twice now. Once, building a team for an early-stage startup from the ground up. Then now, scaling a team for a global business. Both times, Confido have delivered to my high expectations. At Vision-Box, I needed to scale my team quickly, with top engineers. When I joined, we’d only made one hire in six months and I didn’t know the local market in Lisbon. Confido acted as a true recruiting partner, not only did they attract some of the best engineers I’ve come across, but they fed back valuable intel about the local market and what our competitors were doing. We were able to make 10+ hires in the first 3 months and speed up our hiring. Honestly, if you’re a startup that needs to make hires, you need to speak to Confido!",
          person: "Andrea Candian – CTO, Vision-Box",
        },
        {
          image: "../images/feedr-white.png",
          title: "Feedr is on a mission to make it easier for people to get healthy, delicious food at the office, every day.",
          cols4: true,
          icon1: "mdi-finance",
          label1: "4x increase in hiring velocity",
          icon2: "mdi-clock-outline",
          label2: "12 hires made in 14 weeks",
          icon3: "mdi-trophy-outline",
          label3: "Overall cost saving of 37.5%",
          icon4: "mdi-account-group-outline",
          label4: "Team diversity improved by 44%",
          hiresMade: "12",
          subtitle: "Hires made by Confido",
          overviewText: "Following their acquisition, Feedr needed to double the size of their product and engineering teams within a three month timeframe. We tripled the previous hiring speed to make 12 hires in 14 weeks across product management, development and QA.",
          quote: "Working with Confido was incredibly helpful when we needed to double the size of our engineering and product teams within a period of 3 months. From day one, it felt like the Confido team was a natural extension of our brand/business that we could trust to go to market on our behalf. They partnered with us to learn about our team and what we needed in our hires, working closely with the full team in screening, interviewing, and finding the right candidate fit. As a result, we were able to achieve our demanding hiring goals, bringing in top engineers that will help take the product to the next level. Outside of hiring, Confido provided clear hiring data and metrics that we could action, and supported our strategic focus on building a diverse and inclusive team, ensuring we achieved an agreed ratio of diverse hires. We very rarely work with recruiters, but I'd recommend working with the team at Confido.",
          quote2: "I have really enjoyed working with Confido. We needed to scale a small startup team about 3x in a short space of time, but didn't want to compromise on the quality of candidates. We'd tried alternative recruitment arrangements but hadn't seen results until we engaged Confido. Not only did they source quality candidates, but they were engaged throughout the interview process and gave really useful insight into our whole process.",
          person: "Lyz Swanton – COO, Feedr",
          person2: "Mark Somerfield – VP of Engineering, Feedr",
        },
        {
          image: "../images/wagestream-white.png",
          title: "Wagestream allows users to track what they’ve earnt, stream those wages when they need them, and whilst doing so become better educated on making their money go further.",
          icon1: "mdi-percent-outline",
          label1: "100% submittal to interview rate",
          icon2: "mdi-account-group-outline",
          label2: "Shortlist of 3 candidates per hire",
          icon3: "mdi-lightbulb",
          label3: "Critical hires made in order to scale globally",
          icon4: "",
          label4: "",
          hiresMade: "3",
          subtitle: "Hires made by Confido",
          overviewText: "Wagestream were struggling to attract the right calibre of software engineer through traditional recruitment routes. Following their Series B funding round, they needed to grow quickly as they were launching in new markets. We’ve made three key hires: Senior Product Engineer, System Architect and Senior Platform Engineer.",
          quote: "In the past, hiring skilled candidates in DevOps roles has always been nothing short of painful.  This, refreshingly, was not the case with Confido: they quickly calibrated with what we needed, I was quickly supplied with two high quality, well vetted candidates who were a pleasure to interview. Communication through the entire process was always quick, easy and very professional. In short - I wouldn't hesitate to use Confido’s services again for any of my future technical staffing needs and recommend that anyone looking for similar do the same.",
          person: "Charlie Livingston – Head of Infrastructure and Security, Wagestream",
        }
      ],
    }
  },
};
</script>
