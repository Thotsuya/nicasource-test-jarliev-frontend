import client from "../plugins/axios";

export const state = {
  pages: [],
  hero: {},
};

export const mutations = {
  SET_PAGES(state, pages) {
    state.pages = pages;
  },
  SET_HERO(state, hero) {
    state.hero = hero;
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
  async getHero({ commit }) {
    try {
      const response = await client.get("/pages?search=home");
      commit("SET_HERO", response.data[0]); // This is because the search returns an array of pages, but we only want the first one, which is the home page.
    } catch (error) {
      console.log(error);
    }
  },
};

export const getters = {
  pages: (state) => state.pages,
  hero: (state) => state.hero,
  gallery: (state) => state.hero?.acf?.gallery,
};
