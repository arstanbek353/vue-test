<template>
  <div class="Base-Card">
    <h3>{{ title }}</h3>
    <p>{{ body }}</p>
    <a class="link" @click="$router.push(`/posts/${postId}`)">More</a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: "none",
    },
    postId: {
      type: String,
      default: "none",
    },
  },
};
</script>

<style lang="scss" scoped>
.Base-Card {
  padding: 2rem;
  box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.3);
}
h2 {
  margin-bottom: 1.5rem;
}
p {
  margin-bottom: 1rem;
}
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  background-color: #d4d9d4;
}
</style>
