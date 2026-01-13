<template>
  <v-app>
    <v-app-bar app class="accent" flat height="100">
      <NuxtLink to="/">
        <v-img :src="require('../assets/Logo.svg')" max-height="300" max-width="300" contain />
      </NuxtLink>
      <v-spacer />
    </v-app-bar>

    <v-main id="intro">
      <nuxt />

      <v-snackbar v-model="snackbar" light fixed bottom :timeout="timeout" class="cookieBanner">
        By continuing to use this site, you accept our privacy and cookies policy.
        <template>
          <v-btn color="secondary" text @click="snackbar = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </v-main>

    <v-footer class="success text-center">
      <v-row>
        <v-col cols="12">
          <p class="white--text text-sm-caption mb-0">©2020 Confido. All rights reserved.</p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      snackbar: true,
      timeout: -1,
    }
  },
}
</script>
