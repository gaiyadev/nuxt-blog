<template>
  <v-container fluid>
    <v-row class="text-center"></v-row>
    <v-row>
      <v-col cols="12" md="10" sm="12">
        <h2 class="mb-3 purple--text text-uppercase" color="purple--text">{{ loadedPost.title }}</h2>
        <!-- <v-img :src="blogPost.imageURL" elevation="4" class="ml-n6 mr-n12"></v-img> -->
        <h4 class="font-weight-black mt-4">
          {{loadedPost.date}}
          <span class="primary--text">Admin</span>
        </h4>

        <p style=" font-size: 18px;" class="mt-4">{{ loadedPost.content }}</p>
      </v-col>
      <v-col cols="12" md="2" sm="12"></v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  asyncData(context) {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve({
          loadedPost: {
            id: 1,
            title: 'Now a single Post (ID: " ' + context.params.id + ')',
            imageURL: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            date: '2020-1-5',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda incidunt sit adipisci aliquid facere dolorem quidem nihil deleniti corporis, ea iusto quasi corrupti eius debitis quisquam, hic accusamus totam pariatur.'
          }
        })
      }, 1000)
    })
      .then((data) => {
        return data
      })
      .catch((e) => {
        context.error(new Error())
      })
  }
}
</script>