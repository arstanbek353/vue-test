<template>
  <div class="home">
    <div class="container" v-if="isPostsLoading">Loading</div>
    <template v-else>
      <div class="container grid">
        <base-card
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :body="post.body"
          :postId="post.id"
        ></base-card>
      </div>
      <div class="container more-wrapper">
        <button
          class="more"
          type="button"
          @click="loadMorePosts"
          :disabled="isEnd"
        >
          Download more
        </button>
      </div>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseCard from "@/components/BaseCard.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "HomeView",
  components: {
    BaseCard,
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      isEnd: (state) => state.post.isEnd,
    }),
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
}
.more-wrapper {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}
.more {
  display: inline-block;
  padding: 1rem 3rem;
  background-color: rgb(244, 255, 140);
}
</style>
