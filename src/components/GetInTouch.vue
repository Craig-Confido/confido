/* eslint-disable */
<template>
<v-card class="pa-8 my-2 white--text text-left card-shadow">
  <v-row>
    <v-col cols="12">
      <v-card-title class="headline font-weight-bold primary--text" v-if="!status">Get in touch.</v-card-title>
      <v-card-title class="title pt-0 mt-0 font-weight-bold primary--text" v-if="!status">We'd love to hear from you.</v-card-title>
      <v-form v-if="!status" v-model="valid" ref="form" @submit="sendForm" lazy-validation>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="name" :rules="nameRules" label="Name *" required class="mx-4 white px-2" />
            <v-text-field v-model="email" :rules="emailRules" label="Email *" required class="mx-4 white px-2" />
            <v-text-field v-model="title" label="Job title" class="mx-4 white px-2" />
          </v-col>
          <v-col cols="6">
            <v-textarea v-model="message" :rules="messageRules" :counter="1000" label="Your message *" required class="mx-4 white px-2" />
          </v-col>
        </v-row>
        <v-card-actions>
            <v-spacer />
                <v-col cols="12" class="mx-auto text-center">
                    <v-btn v-if="!valid || null " disabled type="submit" class="btn--outlined font-weight-bold mx-2 px-8 py-0 mt-2 mt-sm-0" outlined color="gray" rounded>
                        Send
                    </v-btn>
                    <v-btn v-else type="submit" class="btn--outlined font-weight-bold mx-2 px-8 py-0 mt-2 mt-sm-0" outlined color="secondary" rounded>
                        Send
                    </v-btn>
                    <v-btn @click="reset" class="btn--outlined font-weight-bold mx-2 px-8 py-0 mt-2 mt-sm-0" outlined color="primary" rounded>
                        Reset
                    </v-btn>
                </v-col>
            <v-spacer />
        </v-card-actions>
      </v-form>
      <h2 v-if="status === 'success'" class="primary--text mx-auto my-4">
        <v-icon class="mr-4 secondary--text">mdi-check-circle-outline</v-icon>Thank you, we got your submission!
      </h2>
      <h2 v-if="status === 'error'" class="error--text mx-auto my-4">
        <v-icon class="mr-4 error--text">mdi-alert-circle-outline</v-icon>Oops, something went wrong. Please try again.
      </h2>
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
        title: null,
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
            (v) => v.length <= 1000 || "Message must be less than 1000 characters",
        ],
    }),
    methods: {
        sendForm: function (event) {
            event.preventDefault();

            fetch("https://formcarry.com/s/R9fKjLvH_g6E", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        Name: this.name,
                        Email: this.email,
                        Role: this.title,
                        Message: this.message,
                    }),
                })
                .then((response) => response.json())
                .then((response) => {
                    if (response.code === 200) {
                        this.status = "success";
                    } else {
                        // Formcarry error
                        this.status = "error";
                    }
                })
                // network error
                .catch(() => (this.status = "error"));
        },
        reset() {
            this.$refs.form.reset();
        },
    },
};
</script>
