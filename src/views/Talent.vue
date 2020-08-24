<template>
  <v-container>
    STUFF HERE
  </v-container>
</template>

<script>

export default {
  name: "LazyPDF",
  data() {
    return {
      hero: "https://res.cloudinary.com/kejk/image/upload/v1585992488/macbook-pro-space-gray-on-the-wooden-table_e6bu8w.jpg",
      url: "https://res.cloudinary.com/kejk/raw/upload/v1587568180/Lazy%20PDF%20-%20V1.1.zip"
    };
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 600
    },
  }
};
</script>
