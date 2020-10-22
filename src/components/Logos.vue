/* eslint-disable */
<template>
  <v-card
    color="white"
    class="pt-8 px-4 py-4 pa-md-8 py-md-8 my-4 my-md-16 card-shadow"
  >
    <h1 class="mb-0 mb-md-12 ml-3 text-left">Companies we've scaled.</h1>
    <v-row class="mx-4 my-4 d-none d-md-flex">
      <v-dialog
        v-model="benefex"
        width="2000px"
        class="overflow-hidden"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            src="../../public/images/benefex.png"
            width="150"
            contain
            class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0 pointer"
            v-bind="attrs"
            v-on="on"
          />
        </template>
          <CaseStudySmallCard v-for="card in cards.slice(0, 1)" :key="card" :card="card" />
        </v-dialog>
      <v-img
        src="../../public/images/defty.svg"
        width="150"
        contain
        class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0"
      />
    <v-dialog
      v-model="benefex"
      width="2000px"
      class="overflow-hidden"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-img
          src="../../public/images/houseKeep.png"
          width="150"
          contain
          class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0 pointer"
          v-bind="attrs"
          v-on="on"
        />
      </template>
          <CaseStudySmallCard v-for="card in cards.slice(1, 2)" :key="card" :card="card" />
        </v-dialog>
      <v-img
        src="../../public/images/octopusWealth.png"
        width="150"
        contain
        class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0"
      />
      <v-img
        src="../../public/images/homehero.svg"
        width="150"
        contain
        class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0"
      />
      <v-img
        src="../../public/images/unmind.png"
        width="150"
        contain
        class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0"
      />
      <v-img
        src="../../public/images/curve.png"
        width="150"
        contain
        class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0"
      />
      <v-img
        src="../../public/images/vision-box.svg"
        width="150"
        contain
        class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0"
      />
      <v-img
        src="../../public/images/matr.png"
        width="150"
        contain
        class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0"
      />
      <v-img
        src="../../public/images/thirdSpace.png"
        width="150"
        contain
        class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0"
      />
      <v-img
        src="../../public/images/upp.png"
        width="150"
        contain
        class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0"
      />
      <v-img
        src="../../public/images/unbabel.png"
        width="150"
        contain
        class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0"
      />
    </v-row>

    <v-row class="d-flex d-md-none">
      <v-col cols="6">
        <v-dialog
        v-model="benefex"
        width="2000px"
        class="overflow-hidden"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            src="../../public/images/benefex.png"
            width="150"
            contain
            class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0 pointer"
            v-bind="attrs"
            v-on="on"
          />
        </template>
          <CaseStudySmallCard v-for="card in cards.slice(0, 1)" :key="card" :card="card" />
        </v-dialog>
        <v-img
          src="../../public/images/defty.svg"
          width="150"
          contain
          class="my-8"
        />
        <v-dialog
      v-model="benefex"
      width="2000px"
      class="overflow-hidden"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-img
          src="../../public/images/houseKeep.png"
          width="150"
          contain
          class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0 pointer"
          v-bind="attrs"
          v-on="on"
        />
      </template>
          <CaseStudySmallCard v-for="card in cards.slice(1, 2)" :key="card" :card="card" />
        </v-dialog>
        <v-img
          src="../../public/images/octopusWealth.png"
          width="150"
          contain
          class="my-8"
        />
        <v-img
          src="../../public/images/homehero.svg"
          width="150"
          contain
          class="my-8"
        />
        <v-img
          src="../../public/images/unmind.png"
          width="150"
          contain
          class="my-8"
        />
      </v-col>
      <v-col cols="6">
        <v-img
          src="../../public/images/curve.png"
          width="150"
          contain
          class="my-8"
        />
        <v-img
          src="../../public/images/vision-box.svg"
          width="150"
          contain
          class="my-8"
        />
        <v-img
          src="../../public/images/matr.png"
          width="150"
          contain
          class="my-8"
        />
        <v-img
          src="../../public/images/thirdSpace.png"
          width="150"
          contain
          class="my-8"
        />
        <v-img
          src="../../public/images/upp.png"
          width="150"
          contain
          class="my-8"
        />
        <v-img
          src="../../public/images/unbabel.png"
          width="150"
          contain
          class="my-8"
        />
      </v-col>
    </v-row>
    <v-row class="mt-md-12 mx-auto justify-center">
      <v-btn
        to="/startups"
        class="ma-2 mt-4 px-6 btn--outlined font-weight-black"
        outlined
        color="accent"
        rounded
        width="auto"
        height="50"
        >Scale your team</v-btn
      >
      <v-btn
        to="/talent"
        class="ma-2 mt-4 px-6 btn--outlined font-weight-black"
        outlined
        color="success"
        rounded
        width="auto"
        height="50"
        >Join a startup</v-btn
      >
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
      showing: false,
      cards: [
        {
          tech: true,
          product: true,
          image: "../images/benefex.png",
          title: "Benefex build workplace tech that transforms the employee experience, and focuses on improving employee wellbeing.",
          subtitle: "Hires made by Confido",
          boxOneTitle: "Tech",
          boxOneTextOne: "Java Engineer",
          boxOneTextTwo: "Frontend Engineer",
          boxOneTextThree: "Go Backend Engineer",
          boxOneTextFour: "VP of Engineering",
          boxOneTextFive: "2x QA Automation Engineers",
          boxOneTextSix: "2x Platform / iOS-Mobile Lead",
          boxTwoTitle: "Product",
          boxTwoTextOne: "QA Lead",
          boxTwoTextTwo: "UX Design Lead",
          boxTwoTextThree: "Product Designer",
          quote: "Confido have partnered with us in the truest sense. Craig and his team have taken the time to get a deep understanding of our culture and vision for the future of Benefex, helping us grow our Product Engineering tribe more in the last six months than we achieved with others over the previous twelve.",
          person: "Paul Smith – CTO, Benefex",
          icon1: "mdi-account-group-outline",
          label1: "12 key new hires",
          icon2: "mdi-clock-check-outline",
          label2: "Hire time reduced from 12+ weeks to 4-6",
          icon3: "mdi-check-circle-outline",
          label3: "100% success rate across all hires",
        },
        {
          tech: true,
          product: false,
          image: "../images/houseKeep.png",
          title: "Housekeep is a B2C marketplace connecting business and  home owners with trusted cleaners.",
          subtitle: "Hires made by Confido",
          boxOneTitle: "Tech",
          boxOneTextOne: "Frontend Developer",
          boxOneTextTwo: "Senior Backend Developer",
          boxOneTextThree: "",
          boxOneTextFour: "",
          boxOneTextFive: "",
          boxOneTextSix: "",
          boxTwoTitle: "",
          boxTwoTextOne: "",
          boxTwoTextTwo: "",
          boxTwoTextThree: "",
          quote: "Craig and his team quickly understood the profile we were looking for in terms of technology, seniority and, crucially, culture. They were able to go beyond this by advising on how to communicate our brand and the opportunity to the market, and build out an efficient process to attract the top tier candidates we wanted.",
          person: "Avin Rabheru – CEO, Housekeep",
          icon1: "mdi-rocket-launch-outline",
          label1: "First dedicated frontend hire",
          icon2: "mdi-account-group-outline",
          label2: "Each hire made from shortlist of 3 candidates",
          icon3: "mdi-check-circle-outline",
          label3: "100% submittal to interview ratio",
        }
      ],
    }
  }
};
</script>
