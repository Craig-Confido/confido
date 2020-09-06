<template>
<v-card color="white" class="pt-8 px-4 py-4 pa-md-8 py-md-8 my-4 my-md-16 card-shadow">
  <h1 class="mb-0 mb-md-12 ml-3 text-left">Companies we've scaled.</h1>
  <v-row class="mx-4 my-4 d-none d-md-flex">
    <v-img src="../../public/images/benefex.png" width="150" contain class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0" />
    <v-img src="../../public/images/defty.svg" width="150" contain class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0" />
    <v-img src="../../public/images/housekeep.png" width="150" contain class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0" />
    <v-img src="../../public/images/octopusWealth.png" width="150" contain class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0" />
    <v-img src="../../public/images/homehero.svg" width="150" contain class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0" />
    <v-img src="../../public/images/unmind.png" width="150" contain class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0" />
    <v-img src="../../public/images/curve.png" width="150" contain class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0" />
    <v-img src="../../public/images/vision-box.svg" width="150" contain class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0" />
    <v-img src="../../public/images/matr.png" width="150" contain class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0" />
    <v-img src="../../public/images/thirdSpace.png" width="150" contain class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0" />
    <v-img src="../../public/images/upp.png" width="150" contain class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0" />
    <v-img src="../../public/images/unbabel.png" width="150" contain class="mx-4 mx-sm-8 my-8 my-md-4 my-lg-0" />
  </v-row>
  <v-row class="d-flex d-md-none">
    <v-col cols="6">
      <v-img src="../../public/images/benefex.png" width="150" contain class="my-8" />
      <v-img src="../../public/images/defty.svg" width="150" contain class="my-8" />
      <v-img src="../../public/images/houseKeep.png" width="150" contain class="my-8" />
      <v-img src="../../public/images/octopusWealth.png" width="150" contain class="my-8" />
      <v-img src="../../public/images/homehero.svg" width="150" contain class="my-8" />
      <v-img src="../../public/images/unmind.png" width="150" contain class="my-8" />
    </v-col>
    <v-col cols="6">
      <v-img src="../../public/images/curve.png" width="150" contain class="my-8" />
      <v-img src="../../public/images/vision-box.svg" width="150" contain class="my-8" />
      <v-img src="../../public/images/matr.png" width="150" contain class="my-8" />
      <v-img src="../../public/images/thirdSpace.png" width="150" contain class="my-8" />
      <v-img src="../../public/images/upp.png" width="150" contain class="my-8" />
      <v-img src="../../public/images/unbabel.png" width="150" contain class="my-8" />
    </v-col>
  </v-row>
  <v-row class="mt-md-12 mx-auto justify-center">
    <v-btn to="/startups" class="ma-2 mt-4 px-6 btn--outlined font-weight-black" outlined color="accent" rounded width="auto" height="50">Scale your team</v-btn>
    <v-btn to="/talent" class="ma-2 mt-4 px-6 btn--outlined font-weight-black" outlined color="success" rounded width="auto" height="50">Join a startup</v-btn>
  </v-row>
</v-card>
</template>

<script>
export default {
  name: "Logos",
};
</script>
