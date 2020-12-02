<template>
  <v-container
    fluid
    class="pa-0 ma-0"
  >
      <v-row class="mt-15 mb-15">
        <v-col
        >
          <h1 
            class="text-center text-h3  text-md-h2 font-weight-bold"
            v-if="error.statusCode === 404"
          >
            {{ pageNotFound }}
          </h1>
          <h1 
            class="text-center text-h3  text-md-h2 font-weight-bold"
            v-else
          >
            {{ otherError }}
          </h1>
      </v-col>
    </v-row>
    <v-row
      id="getInTouch"
      class="mx-0 mx-md-6 mx-lg-16 mb-12 mt-5"
    >
      <v-col cols="12">
        <GetInTouch :contact="contact" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GetInTouch from "../components/GetInTouch";
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      components: {
        GetInTouch
      },
      contact:[]
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
