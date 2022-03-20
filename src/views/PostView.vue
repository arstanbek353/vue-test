<template>
  <div v-if="isPostsLoading">Loading</div>
  <div v-else>
    {{ $route.params.id }}
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setPost: "post/setPost",
    }),
    ...mapActions({
      fetchPostById: "post/fetchPostById",
    }),
  },
  computed: {
    ...mapState({
      post: (state) => state.post.post,
      isPostsLoading: (state) => state.post.isPostsLoading,
    }),
  },
  mounted() {
    this.fetchPostById(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
