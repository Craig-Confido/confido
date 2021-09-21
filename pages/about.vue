<template>
  <v-container fluid class="pa-0 ma-0">
    <section class="ma-4 ma-lg-16">
      <v-row class="text-left mt-4">
        <v-row class="mt-3 mb-5">
          <v-col v-for="role in roles" :key="role._id" cols="12" md="3">
            <LiveRoles :role="role" />
          </v-col>
        </v-row>
      </v-row>
    </section>
  </v-container>
</template>

<script>
const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
  slug: "confido",
  read_key: "0O6acZ2ATKQSdKr8rLb5b489Kxg4yNPQRvVii3KCL8T8atx3gn",
});

export default {
  name: "About",
  data() {
    return {
      roles: {},
    };
  },
  created() {
    this.getRoles();
  },
  methods: {
    async getRoles() {
      this.error = this.role = null;
      this.loading = true;
      await bucket
        .getObjects({
          query: {
            type: "roles",
          },
          props: "_id,slug,title,content,metadata,created_at,modified_at",
          sort: "-created_at",
        })
        .then((data) => {
          const roles = data.objects;
          this.loading = false;
          this.roles = roles;
        });
    },
  },
};
</script>
