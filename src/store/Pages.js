import client from "../plugins/axios";

export const state = {
  pages: [],
};

export const mutations = {
  SET_PAGES(state, pages) {
    state.pages = pages;
  },
};

export const actions = {
  async getPages({ commit }) {
    try {
      const response = await client.get("/pages?order=asc");
      commit("SET_PAGES", response.data);
    } catch (error) {
      console.log(error);
    }
  },
};

export const getters = {
  pages: (state) => state.pages,
};
