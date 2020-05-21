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
                state.loadedPosts.push(post);
            },
            addPost(state, post) {
                state.loadedPosts = post
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post =>
                    post.id === editedPost.id);
                state.loadedPosts[postIndex] = editedPost;

            }
        },
        actions: {
            addPost(vuexContext, posts) {
                const postData = {
                    title: posts.title,
                    description: posts.description,
                    date: posts.date,
                    author: posts.author,
                    imageURL: posts.imageURL
                };
                return axios
                    .post('https://nuxt-blog-186be.firebaseio.com/posts.json', postData)
                    .then(function (res) {
                        vuexContext.commit('addPost', { ...postData, id: res.data.id });
                        console.log(res)
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            editPost(vuexContext, editedPost) { },


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
