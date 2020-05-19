<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col cols="12" md="12" sm="12">
        <v-btn color="primary" @click="CreatePage" class="white--text">Create Post</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10" sm="12">
        <h2 class="mb-3 purple--text text-uppercase" color="purple--text">Post title</h2>
        <nuxt-link :to="'/admins/' + 3 ">
          <v-img src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg" height="400">
            <v-row align="end" wrap class="lightbox white--text pa-2 fill-height">
              <v-col>
                <div class="subheading float-left">
                  post title
                  <br />
                  <span>2020-2-12</span>
                  <br />
                </div>
                <br />
              </v-col>
            </v-row>
          </v-img>
        </nuxt-link>
        <h4 class="font-weight-black mt-4">
          post date
          <span class="primary--text">Admin</span>
        </h4>

        <p
          style=" font-size: 18px;"
          class="mt-4"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda incidunt sit adipisci aliquid facere dolorem quidem nihil deleniti corporis, ea iusto quasi corrupti eius debitis quisquam, hic accusamus totam pariatur.</p>
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
  methods: {
    CreatePage() {
      this.$router.push('/admins/new_post/')
    }
  }
}
</script>
