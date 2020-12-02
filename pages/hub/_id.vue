<template>
<v-container>
  <v-row class="mx-4 mx-lg-16 ">
    <v-col
      cols="12"
      md="12"
    >
      <v-row align="center" class="blog-900" style="margin:0px auto;">
                <v-row>
        <v-btn 
          text
          to="/hub" 
        >
          <v-icon class="mr-2">
            mdi-arrow-left
          </v-icon>
          Back to all posts
        </v-btn>
      </v-row>
      <Post
        v-if="page"
        :post="page"
      />
      </v-row>
    </v-col>
  </v-row>
    <v-row
      id="getInTouch"
      class="mx-0 mx-md-6 mx-lg-16 mb-12"
    >
      <v-col cols="12">
        <GetInTouch  />
      </v-col>
    </v-row>
</v-container>
</template>

<script>
import Post from "../../components/Post";
import GetInTouch from "../../components/GetInTouch";

import getPost from "../../queries/getPost";

export default {
  name: "PostView",
  components: {
    Post,
    GetInTouch
  },
  async asyncData({ app, route, redirect }) {
    let data = {};
    try {
      const d = await app.apolloProvider.defaultClient.query({
        query: getPost,
        variables: { slug: route.params.id },
      });
      const data = d.data;
    //   console.log("data", data);
      return {
        page: data.getObject,
      };
    } catch (error) {
      console.log("error", error);
      redirect("/hub");
    }
  },
  mounted() {
    console.log(this.myRoute);
  },
  computed: {
    myRoute() {
      return this.$route.params.id;
    },
  },
};
</script>