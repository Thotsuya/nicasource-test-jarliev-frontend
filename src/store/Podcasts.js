import client from "../plugins/axios";

export const state = {
  podcasts: [],
};

export const mutations = {
  SET_PODCASTS(state, podcasts) {
    state.podcasts = podcasts;
  },
};

export const actions = {
  async getPodcasts({ commit }) {
    try {
      const { data } = await client.get("/podcasts?order=asc&per_page=3");
      commit("SET_PODCASTS", data);
    } catch (error) {
      console.log(error);
    }
  },
};

export const getters = {
  podcasts: (state) => state.podcasts,
};
