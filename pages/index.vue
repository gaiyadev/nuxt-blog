<template>
  <no-ssr>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4" sm="4" v-for="post in loadedPosts" :key="post.id">
          <v-card>
            <nuxt-link :to="'posts/' + post.id">
              <v-img :src="post.imageURL" height="400">
                <v-row align="end" wrap class="lightbox white--text pa-2 fill-height">
                  <v-col>
                    <div class="subheading float-left">
                      {{ post.title }}
                      <br />
                      <span></span>
                      <br />
                      {{ post.date }}
                    </div>
                    <br />
                    <div class="body-1">{{ post.content }}</div>
                    <v-btn :to="'/posts/' + post.id" class="white--text" color="purple darken-4">
                      Read More
                      <v-icon>arrow_forward</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-img>
            </nuxt-link>
          </v-card>
        </v-col>

        <!-- <v-col cols="12" md="4" sm="4">
          <v-card>
            <nuxt-link :to="'posts/' +2">
              <v-img src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" height="400">
                <v-row align="end" wrap class="lightbox white--text pa-2 fill-height">
                  <v-col>
                    <div class="subheading float-left">
                      post title
                      <br />
                      <span>2020-2-12</span>
                      <br />
                    </div>
                    <br />
                    <br />
                    <div class="body-1">content</div>
                    <v-btn :to="'/posts/' + 2" class="white--text" color="purple darken-4">
                      Read More
                      <v-icon>arrow_forward</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-img>
            </nuxt-link>
          </v-card>
        </v-col>-->

        <!-- <v-col cols="12" md="4" sm="4">
          <v-card>
            <nuxt-link :to="'/posts/' + 1">
              <v-img src="https://cdn.vuetifyjs.com/images/carousel/bird.jpg" height="400">
                <v-row align="end" wrap class="lightbox white--text pa-2 fill-height">
                  <v-col>
                    <div class="subheading float-left">
                      post title
                      <br />
                      <span>2020-2-12</span>
                      <br />
                    </div>
                    <br />
                    <br />
                    <div class="body-1">content</div>
                    <v-btn :to="'/posts/' + 1" class="white--text" color="purple darken-4">
                      Read More
                      <v-icon>arrow_forward</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-img>
            </nuxt-link>
          </v-card>
        </v-col>-->
      </v-row>
    </v-container>
  </no-ssr>
</template>
<script>
export default {
  // fetch(context) {

  // },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },

  created() {
    //this.loadedPosts
    // this.$store.dispatch('setPosts', this.postImages)
  }
}
</script>


