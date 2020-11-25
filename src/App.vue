/* eslint-disable */
<template>
  <v-app>
    <v-app-bar app class="accent" flat height="100">
      <a href="/">
        <v-img
          src="./assets/Logo.svg"
          max-height="300"
          max-width="300"
          contain
        />
      </a>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="white--text d-md-none"
      ></v-app-bar-nav-icon>
      <v-btn
        v-for="link in links.slice(0, 4)"
        :key="`${link.label}--page-link`"
        class="my-2 mx-8 white--text d-none d-md-flex"
        text
        :to="link.url"
      >
        <v-text class="font-weight-medium">{{ link.label }}</v-text>
      </v-btn>
      <v-spacer class="d-none d-md-flex" />
      <v-btn
        class="my-2 mx-1 white--text d-none d-md-flex"
        text
        @click="$vuetify.goTo('#getInTouch')"
      >
        <v-text class="font-weight-medium">Contact</v-text>
      </v-btn>
      <v-btn
        v-for="social in socials"
        :key="`${social.icon}--page-link`"
        class="my-2 mx-1 white--text d-none d-md-flex"
        icon
        target="_blank"
        :href="social.url"
      >
        <v-text class="font-weight-medium">
          <v-icon>{{ social.icon }}</v-icon>
        </v-text>
      </v-btn>
      <v-navigation-drawer
        v-model="drawer"
        color="accent"
        class="d-md-none"
        right
        absolute
        temporary
        app
      >
        <v-app-bar-icon
          @click.stop="drawer = !drawer"
          class="white--text d-md-none"
        >
          <v-btn class="white--text mt-7 mr-4" right absolute icon>
            <v-icon class="text-right">mdi-close</v-icon>
          </v-btn>
        </v-app-bar-icon>
        <v-list class="mt-16 pt-4" rounded>
          <v-list-item
            v-for="link in links.slice(0, 4)"
            :key="`${link.label}--page-link`"
            class="my-2 mx-0 white--text"
            text
            :to="link.url"
          >
            <v-list-item-icon>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="font-weight-medium white--text">{{
              link.label
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item
              class="my-2 mx-1 white--text"
              text
              @click="$vuetify.goTo('#getInTouch')"
          >
            <v-list-item-icon class="white--text">
              <v-icon class="white--text text-left">mdi-human-greeting-proximity</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="font-weight-medium white--text">Contact</v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="social in socials"
            :key="`${social.icon}--page-link`"
            class="my-2 mx-1 white--text"
            text
            target="_blank"
            :href="social.url"
          >
            <v-list-item-icon class="white--text">
              <v-icon class="white--text text-left">{{ social.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="font-weight-medium white--text">{{
              social.label
            }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
    <v-content id="intro">
      <router-view />
    <v-snackbar
      v-model="snackbar"
      light
      fixed
      bottom
      :timeout="timeout"
    >
      By continuing to use this site, you accept our <a href="/privacy" class="text-decoration-underline">privacy and cookies policy.</a>
      <template>
        <v-btn
          color="secondary"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
      <v-speed-dial v-model="fab" fixed bottom right alt="Scroll to top">
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            color="accent"
            style="opacity: 0.7"
            fab
            @click="$vuetify.goTo('#intro')"
          >
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
        </template>
      </v-speed-dial>
    </v-content>
    <v-footer class="success">
      <v-row>
        <v-col cols="12">
          <v-btn
            v-for="link in links.slice(0, 5)"
            :key="`${link.label}--page-link`"
            class="my-2 mx-1 white--text"
            text
            :to="link.url"
          >
            <v-text class="font-weight-medium">{{ link.label }}</v-text>
          </v-btn>
        </v-col>
        <v-col cols="12">
          <p class="white--text text-sm-caption">
            ©2020 Confido. All rights reserved.
          </p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      snackbar: true,
      timeout: -1,
      drawer: false,
      group: null,
      links: [
        {
          icon: "mdi-information",
          label: "About",
          url: "/",
        },
        {
          icon: "mdi-sprout",
          label: "Startups",
          url: "/startups",
        },
        {
          icon: "mdi-account-group",
          label: "Talent",
          url: "/talent",
        },
        {
          icon: "mdi-id-card",
          label: "Hub",
          url: "/hub",
        },
        {
          label: "Privacy & Cookies",
          url: "/privacy",
        },
        {
          icon: "mdi-information-outline",
          label: "Newsletter signup",
          url: "/newsletter-signup",
        },
      ],
      socials: [
        {
          icon: "mdi-twitter",
          label: "Twitter",
          url: "https://twitter.com/confidotalent",
        },
        {
          icon: "mdi-linkedin",
          label: "LinkedIn",
          url: "https://www.linkedin.com/company/confido-talent/",
        },
      ],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
