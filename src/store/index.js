import { createStore } from "vuex";
import { postModule } from "./postModule";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    post: postModule,
  },
});
