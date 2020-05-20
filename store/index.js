import Vue from "vue";
import Vuex from "vuex";
const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, post) {
                state.loadedPosts = post;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, rejected) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {
                                id: 1,
                                title: 'first Post',
                                imageURL: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                                date: '2020-1-5',
                                content: 'post one content'
                            },
                            {
                                id: 2,
                                title: 'second Post',
                                imageURL: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                                date: '2020-1-15',
                                content: 'post two content'
                            },
                            {
                                id: 3,
                                title: 'thrid Post',
                                imageURL: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                                date: '2020-1-25',
                                content: 'post three content'
                            }


                        ])
                        resolve()
                    }, 1500)
                })
                    .then((data) => {
                        context.store.commit('setPosts', data.loadedPosts)
                    })
                    .catch((e) => {
                        context.error(new Error())
                    })
            },
            setPosts(vuexContext, post) {
                vuexContext.commit('setPosts', post);
            }
        },

        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        },
    });
}

export default createStore;
