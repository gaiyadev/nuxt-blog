import Vue from "vue";
import Vuex from "vuex";
const axios = require('axios')


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
                return axios.get('https://nuxt-blog-186be.firebaseio.com/posts.json').then(res => {
                    const postArray = [];
                    for (let key in res.data) {
                        postArray.push({ ...res.data[key], id: key });
                    }
                    vuexContext.commit('setPosts', postArray);
                })
                    .catch(e => {
                        context.error(e);
                    });
            },
            setPosts(vuexContext, post) {
                vuexContext.commit('setPosts', post);
            }
        },

        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },
            loadedPostId(state) {
                return postId => {
                    return state.loadedPosts.find(post => {
                        return post.id === postId;
                    });
                };
            },
        },
    });
}

export default createStore;
