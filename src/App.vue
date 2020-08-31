<template>
<v-app>
  <v-app-bar app class="accent" flat height="100">
    <v-img src="./assets/Logo.svg" max-height="300" max-width="300" contain />
    <v-spacer />
    <v-btn v-for="link in links.slice(0, 4)" :key="`${link.label}--page-link`" class="my-2 mx-1 white--text" text :to="link.url">
      <v-text class="font-weight-medium">
        {{ link.label }}
      </v-text>
    </v-btn>
    <v-btn v-for="social in socials" :key="`${social.icon}--page-link`" class="my-2 mx-1 white--text" text rounded target="_blank" :href="social.url">
      <v-text class="font-weight-medium">
        <v-icon>
          {{ social.icon }}
        </v-icon>
      </v-text>
    </v-btn>
  </v-app-bar>
  <v-content>
    <router-view />
  </v-content>
  <v-footer class="secondary">
    <v-row>
      <v-col cols="12">
        <v-btn v-for="link in links" :key="`${link.label}--page-link`" class="my-2 mx-1 white--text" text :to="link.url">
          <v-text class="font-weight-medium">
            {{ link.label }}
          </v-text>
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
      links: [{
          label: "About",
          url: "/"
        },
        {
          label: "Startups",
          url: "/startups"
        },
        {
          label: "Talent",
          url: "/talent"
        },
        {
          label: "Hub",
          url: "/hub"
        },
        {
          label: "Contact",
          url: "/contact"
        },
        {
          label: "Privacy & Cookies",
          url: "/privacy-cookies"
        },
        {
          label: "Newsletter signup",
          url: "/newsletter-signup"
        }
      ],
      socials: [{
          icon: "mdi-twitter",
          url: "https://twitter.com/confidotalent"
        },
        {
          icon: "mdi-linkedin",
          url: "https://www.linkedin.com/company/confido-talent/"
        },
      ]
    };
  }
};
</script>
