<template>
  <v-container fluid>
    <v-row class="text-center"></v-row>
    <v-row>
      <v-col cols="12" md="10" sm="12">
        <h2 class="mb-3 purple--text text-uppercase" color="purple--text">{{ loadedPost.title }}</h2>
        <v-img :src="loadedPost.imageURL" elevation="4" class="ml-n6 mr-n12"></v-img>
        <h4 class="font-weight-black mt-4">
          {{loadedPost.date }}
          <span class="primary--text">Admin</span>
        </h4>

        <p style=" font-size: 18px;" class="mt-4">{{ loadedPost.content }}</p>
      </v-col>
      <v-col cols="12" md="2" sm="12"></v-col>
    </v-row>
  </v-container>
</template>
<script>
const axios = require('axios')

export default {
  asyncData(context) {
    return axios
      .get(
        'https://nuxt-blog-186be.firebaseio.com/posts/' +
          context.route.params.id +
          '.json'
      )
      .then((res) => {
        return {
          loadedPost: res.data
        }
      })
      .catch((e) => {
        context.error(e)
      })
  }
}
</script>