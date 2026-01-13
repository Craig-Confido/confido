<template>
  <v-container fluid class="pa-0 ma-0 holding-page">
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" class="text-center">
        <v-img 
          :src="require('../assets/Logo.svg')" 
          max-height="120" 
          max-width="300" 
          contain 
          class="mx-auto mb-12"
          alt="Confido Logo"
        />
        
        <h1 class="text-h4 text-md-h3 font-weight-bold mb-6 primary--text">
          New website on its way
        </h1>
        
        <p class="text-h6 text-md-h5 mb-8 grey--text text--darken-1">
          If you're interested in fractional TA services, get in touch:
        </p>
        
        <v-card class="pa-6 mx-auto contact-card" max-width="500" elevation="2">
          <v-icon class="mb-4 accent--text" size="48">mdi-email-outline</v-icon>
          <h2 class="text-h5 font-weight-bold mb-2">Craig Turner</h2>
          <a 
            href="mailto:craig@confidotalent.com" 
            class="text-h6 accent--text text-decoration-none email-link"
          >
            craig@confidotalent.com
          </a>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const title = "Confido - New Website Coming Soon",
  desc = "New website on its way. If you're interested in fractional TA services, contact Craig Turner at craig@confidotalent.com",
  url = "https://confidotalent.com"

export default {
  name: "HoldingPage",
  head: {
    title: title,
    meta: [
      { hid: "description", name: "description", content: desc },
      { hid: "og:title", property: "og:title", content: title },
      { hid: "og:url", property: "og:url", content: url },
      { hid: "og:description", property: "og:description", content: desc },
      { property: "twitter:domain", content: url },
      { hid: "twitter:title", property: "twitter:title", content: title },
      { hid: "twitter:description", property: "twitter:description", content: desc },
      { hid: "twitter:url", property: "twitter:url", content: url },
    ],
    link: [{ rel: "canonical", href: url }],
  },
}
</script>

<style scoped>
.holding-page {
  min-height: calc(100vh - 200px);
}

.contact-card {
  border-radius: 16px;
}

.email-link:hover {
  text-decoration: underline !important;
}
</style>
