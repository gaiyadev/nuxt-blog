<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col col="12" md></v-col>
      <v-col cols="12" md="8" sm="12">
        <!-- <v-card v-if="error" elevation="11">
          <alert @dismissed="onDismissed" :text="error.message"></alert>
        </v-card>-->
        <v-card elevation="11" class="pt-10">
          <h2 class="purple--text text-uppercase">{{ title }}</h2>
          <v-divider color="purple" class="mt-2"></v-divider>
          <v-form
            @submit.prevent="onCreatePost"
            ref="form"
            class="mt-10 mb-6 pr-8 pl-8 pb-8 pt-4"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="post"
              color="purple"
              outlined
              append-icon="subject"
              error-count="2"
              :rules="titleRules"
              :counter="10000"
              label="Post Title"
              required
            ></v-text-field>
            <v-text-field
              v-model="author"
              color="purple"
              outlined
              append-icon="subject"
              error-count="2"
              :rules="authorRules"
              :counter="10000"
              label="Author Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="imageURL"
              color="primary"
              outlined
              append-icon="subject"
              error-count="2"
              :rules="imageRules"
              :counter="10000"
              label="Image Link"
              required
            ></v-text-field>
            <v-menu
              ref="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="Date"
                  color="purple"
                  append-icon="event"
                  outlined
                  v-on="on"
                  :rules="DateRules"
                  required
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
            <v-textarea
              append-icon="comment"
              v-model="description"
              outlined
              color="purple"
              error-count="5"
              :counter="100000"
              :rules="descriptionRules"
              label="Content"
              required
            ></v-textarea>
            <!-- {{category}} -->
            <v-btn
              shaped
              block
              x-large
              type="submit"
              :disabled="!valid"
              color="purple darken-4"
              class="mr-4"
              @click="validate"
            >
              <span class="white--text">Create Post</span>
              <span style="display: none" class="custom-loader">
                <v-icon light>cached</v-icon>
              </span>
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" md></v-col>
    </v-row>
  </v-container>
</template>

<script>
const axios = require('axios')

export default {
  data() {
    return {
      title: 'Create Post',
      date: new Date().toISOString().substr(0, 10),
      modal: false,
      menu2: false,
      valid: true,
      show1: false,
      show2: false,
      image: null,
      post: '',
      titleRules: [
        (v) => !!v || 'Title is required',
        (v) => (v && v.length >= 4) || 'Title must be less than 10 characters'
      ],
      author: '',
      authorRules: [
        (v) => !!v || 'Title is required',
        (v) => (v && v.length >= 4) || 'Title must be less than 10 characters'
      ],

      DateRules: [(v) => !!v || 'Date is required'],

      description: '',
      descriptionRules: [
        (v) => !!v || 'Content is required',
        (v) =>
          (v && v.length > 50) || 'Content must be less than 100 characters'
      ],
      imageURL: [],
      imageRules: [
        (v) => !!v || 'Post image is required'
        // (v) =>
        //   !v ||
        //   (v && v.size < 2000000) ||
        //   'Image size should be less than 2 MB!'
      ]
    }
  },

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    onCreatePost() {
      axios
        .post('https://nuxt-blog-186be.firebaseio.com/posts.json', {
          title: this.post,
          author: this.author,
          description: this.description,
          imageURL: this.imageURL,
          date: this.date
        })
        .then(function(data) {
          console.log(data)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
// this.$store
//   .dispatch('addPost', {
//     title: this.post,
//     author: this.author,
//     description: this.description,
//     imageURL: this.imageURL,
//     date: this.date
//   })
//   .then(() => {
//     this.$router.push('/admins')
//   })
//   .catch((e) => {
//     console.log(e)
//   })
</script>

