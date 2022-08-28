import { createStore } from "vuex";
import * as pages from "./pages";
import * as podcasts from "./podcasts";
import * as posts from "./posts";

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
