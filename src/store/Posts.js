import client from "../plugins/axios";

export const state = {
  posts: [],
};

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
};

export const actions = {
  async getPosts({ commit }) {
    try {
      const { data } = await client.get("/posts?order=asc&per_page=3&_embed");
      commit("SET_POSTS", data);
    } catch (error) {
      console.log(error);
    }
  },
};

export const getters = {
  posts: (state) => state.posts,
};
