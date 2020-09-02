<template>
<v-card class="pa-8 my-2 white--text text-left" style="box-shadow: 0px 20px 70px rgba(46, 49, 174, 0.05); border: 4px solid #3EC1B9">
  <v-row>
    <v-col cols="12" md="6">
      <v-card-title class="headline font-weight-bold primary--text">Contact us.</v-card-title>
      <v-row>
        <v-col cols="6">
          <v-text-field v-model="name" :rules="nameRules" label="Name" required class="mx-4 white px-2 py-4" style="border-radius: 8px;" />
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="email" :rules="emailRules" label="Email" required class="mx-4 white px-2 py-4" style="border-radius: 8px;" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea v-model="description" :rules="descriptionRules" :counter="280" label="Description" required class="mx-4 white px-2 py-4" style="border-radius: 8px;" />
        </v-col>
      </v-row>
      <v-card-actions>
        <v-btn class="btn--outlined font-weight-bold mx-auto px-8 py-4" outlined color="success" rounded href="mailto:info@confidotalent.com">
          Send
        </v-btn>
      </v-card-actions>
    </v-col>
    <v-col cols="12" md="6">
      <v-card-title class="headline font-weight-bold primary--text">Phone us.</v-card-title>
      <v-card-text class="text-h6 mb-14 success--text">
        <a href="tel:+44 203 000 0000" class="success--text">+44 203 000 0000</a>
      </v-card-text>
      <v-card-title class="headline font-weight-bold primary--text">Email us.</v-card-title>
      <v-card-text class="text-h6 mb-14 success--text">
        <a href="mailto:info@confidotalent.com" class="success--text">info@confidotalent.com</a>
      </v-card-text>
    </v-col>
  </v-row>
</v-card>
</template>

<script>
export default {
  name: "GetInTouch",
  valid: false,
  firstname: "",
  lastname: "",
  nameRules: [
    (v) => !!v || "Name is required",
    (v) => v.length >= 2 || "Name must be more than 2 characters",
  ],
  email: "",
  emailRules: [
    (v) => !!v || "E-mail is required",
    (v) => /.+@.+/.test(v) || "E-mail must be valid",
  ],
  description: "",
  descriptionRules: [
    (v) => !!v || "Description is required",
    (v) =>
    v.length <= 280 || "Description must be less than 280 characters",
  ],
};
</script>
