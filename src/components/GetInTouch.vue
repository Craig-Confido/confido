<template>
<v-card class="pa-8 my-2 white--text text-left" style="box-shadow: 0px 20px 70px rgba(46, 49, 174, 0.05); border: 4px solid #3EC1B9">
  <v-row>
    <v-col cols="12" md="6">
      <v-card-title class="headline font-weight-bold primary--text" v-if="!status">Contact us.</v-card-title>
      <v-form v-if="!status" ref="form" @submit="sendForm">
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="name" label="Name" required class="mx-4 white px-2 py-4" style="border-radius: 8px;" />
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="email" label="Email" required class="mx-4 white px-2 py-4" style="border-radius: 8px;" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea v-model="message" :counter="280" label="Your message" required class="mx-4 white px-2 py-4" style="border-radius: 8px;" />
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn type="submit" class="btn--outlined font-weight-bold mx-auto px-8 py-0" outlined color="success" rounded>
            Send
          </v-btn>
        </v-card-actions>
      </v-form>
      <h2 v-if="status === 'success'" class="primary--text mx-auto my-4">
        <v-icon class="mr-4 secondary--text">mdi-check-circle-outline</v-icon>Thank you, we got your submission!
      </h2>
      <h2 v-if="status === 'error'" class="error--text mx-auto my-4">
        Oops, something went wrong. Please try again.
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
  data: function () {
    return {
      status: null,
      name: null,
      email: null,
      message: null
    }
  },
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
    }
  },
};
</script>
