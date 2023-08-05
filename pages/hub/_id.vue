<template>
  <v-container>
    <v-row class="mx-4 mx-lg-16">
      <v-col cols="12" md="12">
        <v-row align="center" class="blog-900" style="margin: 0px auto">
          <v-row>
            <v-btn text to="/hub" class="my-4">
              <v-icon class="mr-2"> mdi-arrow-left </v-icon>
              Back to all posts
            </v-btn>
          </v-row>
          <Post v-if="page" :post="page" />
        </v-row>
      </v-col>
    </v-row>
    <v-row id="getInTouch" class="mx-0 mx-md-6 mx-lg-16 mb-12">
      <v-col cols="12">
        <GetInTouch />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Post from '../../components/Post';
import GetInTouch from '../../components/GetInTouch';
import { createBucketClient } from '@cosmicjs/sdk';
const bucket = createBucketClient({
  bucketSlug: 'confido',
  readKey: 'OrYlRGLrDpOrxqbRXMMw7gd7OzEL6jZCqHvfwJrhUbB0Q1Khcj',
});

export default {
  name: 'PostView',
  components: {
    Post,
    GetInTouch,
  },
  async asyncData({ route, redirect }) {
    try {
      const data = await bucket.objects
        .findOne({
          type: 'posts',
          slug: route.params.slug,
        })
        .status('any')
        .props('slug,title,content,metadata,modified_at,created_at,status');
      return { page: await data.object };
    } catch (error) {
      console.log('error', error);
      redirect('/hub');
    }
  },
  computed: {
    myRoute() {
      return this.$route.params.id;
    },
  },
};
</script>
