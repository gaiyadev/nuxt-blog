<template>
  <v-container fluid>
    <v-row class="text-center"></v-row>
    <v-row v-for="post in loadedPosts" :key="post.id">
      <v-col cols="12" md="10" sm="12">
        <h2 class="mb-3 purple--text text-uppercase" color="purple--text">{{post.title}}</h2>
        <v-img :src="post.imageURL" elevation="4" class="ml-n6 mr-n12"></v-img>
        <h4 class="font-weight-black mt-4">
          {{post.date}}
          <span class="primary--text">{{post.author}}</span>
        </h4>

        <p style=" font-size: 18px;" class="mt-4">{{ post.content }} .</p>
      </v-col>
      <v-col cols="12" md="2" sm="12"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  head: {
    title: 'Blog post page'
  }
}
</script>
