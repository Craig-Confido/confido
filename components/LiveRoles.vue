<template v-if="role.metadata">
  <v-card color="white" class="px-2 py-2 my-0 card-shadow">
    <div class="d-flex justify-space-between">
      <v-card-title
        ><strong>{{ role.title }}</strong></v-card-title
      >
      <v-btn class="accent rounded px-4 mt-4 mr-4"
        ><a
          :href="
            `mailto:contact@confidotalent.com?subject=${role.title +
              ' @ ' +
              role.metadata.subtitle}`
          "
          style="text-decoration: none;"
          class="white--text"
          >Apply now</a
        ></v-btn
      >
    </div>
    <v-card-text>
      <div class="d-flex">
        <p class="secondary--text">
          <strong>{{ role.metadata.subtitle }}</strong>
        </p>
        <!-- <p class="pr-4">{{ role.metadata.location }}</p>
        <a :href="`${role.metadata.link}`">
          <p class="grey--text text--darken-1">
            <strong>{{ role.metadata.company }}</strong>
          </p>
        </a> -->
      </div>
      <div class="d-block">
        <p v-html="role.content"></p>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "Roles",
  props: {
    role: {
      type: Object,
      default: () => {
        "No roles are loaded";
      },
    },
  },
};
</script>
