<template>
<v-card class="pa-8 my-2 white--text text-left card-shadow" style="border: 4px solid #3EC1B9">
  <v-row>
    <v-col cols="12" md="6">
      <v-card-title class="headline font-weight-bold primary--text" v-if="!status">Contact us.</v-card-title>
      <v-form v-if="!status" v-model="valid" ref="form" @submit="sendForm" lazy-validation>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="name" :rules="nameRules" label="Name" required class="mx-4 white px-2 py-4" />
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="email" :rules="emailRules" label="Email" required class="mx-4 white px-2 py-4" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea v-model="message" :rules="messageRules" :counter="280" label="Your message" required class="mx-4 white px-2 py-4" />
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn v-if="!valid || null " disabled type="submit" class="btn--outlined font-weight-bold mx-auto px-8 py-0" outlined color="success" rounded>
            Send
          </v-btn>
          <v-btn v-else type="submit" class="btn--outlined font-weight-bold mx-auto px-8 py-0" outlined color="success" rounded>
            Send
          </v-btn>
          <v-btn @click="reset" class="btn--outlined font-weight-bold mx-auto px-8 py-0" outlined color="grey" rounded>
            Reset
          </v-btn>
        </v-card-actions>
      </v-form>
      <h2 v-if="status === 'success'" class="primary--text mx-auto my-4">
        <v-icon class="mr-4 secondary--text">mdi-check-circle-outline</v-icon>Thank you, we got your submission!
      </h2>
      <h2 v-if="status === 'error'" class="error--text mx-auto my-4">
        <v-icon class="mr-4 error--text">mdi-alert-circle-outline</v-icon>Oops, something went wrong. Please try again.
      </h2>
    </v-col>
    <v-col cols=" 12" md="6">
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
  data: () => ({
      status: null,
      name: null,
      email: null,
      message: null,
      valid: false,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length >= 3 || "Name must be at least than three characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      messageRules: [
        (v) => !!v || "Message is required",
        (v) => v.length <= 280 || "Message must be less than 280 characters",
      ],
    }),
  methods: {
    sendForm: function (event) {
      event.preventDefault()

      fetch('https://formcarry.com/s/R9fKjLvH_g6E', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message
          })
        })
        .then(response => response.json())
        .then(response => {
          if (response.code === 200) {
            this.status = 'success'
          } else {
            // Formcarry error
            this.status = 'error'
          }
        })
        // network error
        .catch(() => (this.status = 'error'))
    },
    reset () {
      this.$refs.form.reset()
    },
  },
};
</script>
