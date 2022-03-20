import axios from "axios";

export const postModule = {
  namespaced: true,
  state: () => ({
    posts: [],
    post: {},
    isPostsLoading: false,
    page: 1,
    limit: 10,
    totalPages: 0,
    isEnd: null,
  }),
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPost(state, post) {
      state.post = post;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setEndPages(state, bool) {
      state.isEnd = bool;
    },
  },
  actions: {
    async fetchPostById({ commit }, id) {
      console.log(id);
      try {
        commit("setLoading", true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        commit("setPost", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
    async fetchPosts({ state, commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        if (state.page >= state.totalPages) {
          commit("setEndPages", true);
          return;
        }
        commit("setPage", state.page + 1);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", [...state.posts, ...response.data]);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
