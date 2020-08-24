<template>
  <v-container>
    <v-row class="text-left">
      <v-col>
        <h1 
          class="display-2 font-weight-black mb-3 mt-6" 
          aria-label="Lazy PDF product"
        >
          Confido
        </h1>
        <h2
          class="headline mb-3 mt-3" style="line-height: 1.4rem"
          aria-label="Karl's posts"
        >
          Effortless and interfaceless PDF creation.
        </h2>
        <v-img
          :src="`${hero}`"
          class="mt-10 img"
          alt="image of Lazy PDF app in use"
        />
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12" md="4">
        <a 
          href="https://www.producthunt.com/posts/lazy-pdf?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-lazy-pdf" 
          target="_blank"
          class="my-2 mx-1 v-btn v-btn--contained"
        >
          <img 
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=191366&theme=light" 
            alt="Lazy PDF - Effortless and interfaceless PDF creation | Product Hunt Embed" 
            style="width: 250px; height: 54px;" 
            width="250px" 
            height="54px" 
          >
        </a>
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <v-btn
          class="my-2 mx-1"
          width="250px"
          height="55px"
          color="#fff"
          style="border-radius: 10px;"
          light
          :href="`${url}`"
        >
          <v-text class="font-weight-medium title" style="text-transform: capitalize;">
            Download
            <v-icon class="ml-4">
              mdi-download
            </v-icon>
          </v-text>
        </v-btn> 
      </v-col>
      <v-col cols="12">
        <h3 class="mb-3 title font-weight-bold">
          Simple and invisible
        </h3>
        <p
          class="body-1"
        >
        Effortlessly create a PDF from a set of selected images through an interfaceless system with only the Finder selection UI.
        </p>
        <h3 class="mt-2 mb-3 title font-weight-bold">
          Grab and go
        </h3>
        <p
          class="body-1"
        >
        Lazy PDF is deliberately designed to be simple and have a low overhead, to make it easier to grab a set of design files and throw them together into a PDF. 
        </p>
        <v-img class="img" src="https://res.cloudinary.com/kejk/image/upload/v1585993877/Picking_selection_ckdioy.png" />
        <h3 class="mt-2 mb-3 title font-weight-bold">
          On your terms
        </h3>
        <p
          class="body-1"
        >
        Your logical file order is always respected, so number your files if you want to order in sequence, otherwise, move them around afterwards in any PDF viewer. 
        </p>
        <v-img class="img" src="https://res.cloudinary.com/kejk/image/upload/v1587570775/Frame_10_zub1ud.png" />
        <h3 class="mt-2 mb-3 title font-weight-bold">
          Lossless
        </h3>
        <p
          class="body-1"
        >
        Respecting your image sizes, Lazy PDF doesn't try to compress everything to printable sizes, ideal for sharing work with teammates and management.
        </p>
        <v-img class="img" src="https://res.cloudinary.com/kejk/image/upload/v1585993878/Rendered_PDF_zpdrza.png" />
        <h3 class="mt-2 mb-3 title font-weight-bold">
          Better than native
        </h3>
        <p
          class="body-1"
        >
        macOS' native 1-click PDF creation (left) pushes all files into a printable page collection, Lazy PDF (right) leaves your images alone. Perfect for long design files such as mobile layouts, or ultrawide files when visualising a 21:9 video concept.
        </p>
        <v-img class="img" src="https://res.cloudinary.com/kejk/image/upload/v1586353512/Apple_versus_Lazy_mhp5ey.png" />
      </v-col>
    </v-row>
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
