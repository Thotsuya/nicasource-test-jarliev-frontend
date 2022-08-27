import { createStore } from "vuex";
import * as pages from "./pages";

export default createStore({
  state: {
    ...pages.state,
  },
  mutations: {
    ...pages.mutations,
  },
  actions: {
    ...pages.actions,
  },
  getters: {
    ...pages.getters,
  },
});
