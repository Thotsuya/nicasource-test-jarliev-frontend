import { createStore } from "vuex";
import * as pages from "./Pages";
import * as podcasts from "./Podcasts";
import * as posts from "./Posts";

export default createStore({
  state: {
    ...pages.state,
    ...podcasts.state,
    ...posts.state,
  },
  mutations: {
    ...pages.mutations,
    ...podcasts.mutations,
    ...posts.mutations,
  },
  actions: {
    ...pages.actions,
    ...podcasts.actions,
    ...posts.actions,
  },
  getters: {
    ...pages.getters,
    ...podcasts.getters,
    ...posts.getters,
  },
});
