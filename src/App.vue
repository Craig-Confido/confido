<template>
<v-app>
  <v-app-bar app class="accent" flat height="100">
    <v-img src="./assets/Logo.svg" max-height="300" max-width="300" contain />
    <v-spacer />
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white--text d-md-none"></v-app-bar-nav-icon>
    <v-btn v-for="link in links.slice(0, 4)" :key="`${link.label}--page-link`" class="my-2 mx-1 white--text d-none d-md-flex" text :to="link.url">
      <v-text class="font-weight-medium">{{ link.label }}</v-text>
    </v-btn>
    <v-btn v-for="social in socials" :key="`${social.icon}--page-link`" class="my-2 mx-1 white--text d-none d-md-flex" text rounded target="_blank" :href="social.url">
      <v-text class="font-weight-medium">
        <v-icon>{{ social.icon }}</v-icon>
      </v-text>
    </v-btn>
    <v-navigation-drawer v-model="drawer" color="accent" class="d-md-none" right absolute temporary rounded app>
      <v-app-bar-icon @click.stop="drawer = !drawer" class="white--text d-md-none">
        <v-btn class="white--text mt-7" right absolute rounded icon>
          <v-icon class="text-right">mdi-close</v-icon>
        </v-btn>
      </v-app-bar-icon>
      <v-list class="mt-16 pt-4">
        <v-list-item v-for="link in links.slice(0, 4)" :key="`${link.label}--page-link`" class="my-2 mx-0 white--text" rounded text :to="link.url">
          <v-list-item-content class="font-weight-medium white--text">
            {{ link.label }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="my-2 mx-0 white--text" rounded text to="/subscribe">
          <v-list-item-content class="font-weight-medium white--text">
            Subscribe to newsletter
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="social in socials" :key="`${social.icon}--page-link`" class="my-2 mx-1 white--text" text rounded target="_blank" :href="social.url">
          <v-icon class="font-weight-medium white--text text-left">{{ social.icon }}</v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
  <v-content id="intro">
    <router-view />
    <v-speed-dial v-model="fab" fixed bottom right alt="Scroll to top">
      <template v-slot:activator>
        <v-btn v-model="fab" color="accent" style="opacity: 0.7;" fab @click="$vuetify.goTo('#intro')">
          <v-icon>
            mdi-arrow-up
          </v-icon>
        </v-btn>
      </template>
    </v-speed-dial>
  </v-content>
  <v-footer class="secondary">
    <v-row>
      <v-col cols="12">
        <v-btn v-for="link in links" :key="`${link.label}--page-link`" class="my-2 mx-1 white--text" text :to="link.url">
          <v-text class="font-weight-medium">{{ link.label }}</v-text>
        </v-btn>
      </v-col>
      <v-col cols="12">
        <p class="white--text text-sm-caption">©2020 Confido. All rights reserved.</p>
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
      multiLine: true,
      snackbar: true,
      drawer: false,
      group: null,
      links: [{
          label: "About",
          url: "/",
        },
        {
          label: "Startups",
          url: "/startups",
        },
        {
          label: "Talent",
          url: "/talent",
        },
        {
          label: "Hub",
          url: "/hub",
        },
        {
          label: "Contact",
          url: "/contact",
        },
        {
          label: "Privacy & Cookies",
          url: "/privacy-cookies",
        },
        {
          label: "Newsletter signup",
          url: "/newsletter-signup",
        },
      ],
      socials: [{
          icon: "mdi-twitter",
          url: "https://twitter.com/confidotalent",
        },
        {
          icon: "mdi-linkedin",
          url: "https://www.linkedin.com/company/confido-talent/",
        },
      ],
    };
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
};
</script>
