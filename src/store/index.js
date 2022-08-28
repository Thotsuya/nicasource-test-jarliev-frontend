import { createStore } from "vuex";
import * as pages from "./pages";
import * as podcasts from "./podcasts";

export default createStore({
  state: {
    ...pages.state,
    ...podcasts.state,
  },
  mutations: {
    ...pages.mutations,
    ...podcasts.mutations,
  },
  actions: {
    ...pages.actions,
    ...podcasts.actions,
  },
  getters: {
    ...pages.getters,
    ...podcasts.getters,
  },
});
