<template>
  <v-app>
    <v-navigation-drawer color="primary" v-model="drawer" absolute temporary elevation="9">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="white--text text-uppercase">
            <nuxt-link
              to="/"
              class="white--text animate__animated animate__flash"
              style="text-decoration: none;"
            >NuxtBlog</nuxt-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider color="white"></v-divider>

      <v-list dense>
        <v-list-item v-for="item in menuItems" :key="item.title" link router :to="item.href">
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark elevation="9">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <h2>
          <nuxt-link
            style="text-decoration:none;"
            class="white--text animate__animated animate__flash"
            id="log"
            to="/"
          >NuxtBlog</nuxt-link>
        </h2>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        text
        class="hidden-sm-and-down"
        v-for="link in menuItems"
        :key="link.title"
        router
        :to="link.href"
      >
        <span class="mr-2">{{ link.title }}</span>
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer color="purple darken-3" padless>
      <v-row justify="center" no-gutters>
        <v-col class="purple darken-4 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>
            NuxtBlog
            <span class="white--text">
              Designed With
              <v-icon color="white">favorite</v-icon>&nbsp; By
              <a
                class="white--text"
                target="_blank"
                href="https://gaiyaobed.com.ng"
              >Gaiya M. Obed</a>
            </span>
          </strong>
        </v-col>
      </v-row>
      <v-fab-transition>
        <v-btn
          v-scroll="onScroll"
          v-show="fab"
          fab
          dark
          fixed
          x-large
          bottom
          right
          color="purple darken-4"
          @click="toTop"
        >
          <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>h
      </v-fab-transition>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},

  data: () => ({
    drawer: false,
    fab: false,
    links: ['Proudly powered by Vuetify + firebase'],
    menuItems: [
      {
        title: 'Home',
        icon: 'home',
        href: '/'
      },
      {
        title: 'Blog',
        icon: 'home',
        href: '/posts'
      },
      {
        title: 'Login',
        icon: 'perm_identity',
        href: '/login'
      },
      {
        title: 'Register',
        icon: 'supervisor_account',
        href: '/register'
      },
      {
        title: 'Admins',
        icon: 'supervisor_account',
        href: '/admins'
      }
    ]
  }),

  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
<style >
body {
  margin: 0px;
  padding: 0px;
}
html {
  font-family: 'Lato', sans-serif;
}
</style>