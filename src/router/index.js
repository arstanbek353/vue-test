import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts/:id",
    name: "post",
    component: PostView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
