import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    // lazy load component
    component: () => import("../pages/Home.vue"),
  },

  {
    path: "/add",
    name: "AddProject",
    // lazy load component
    component: () => import("../pages/AddProject.vue"),
  },

  {
    path: "/projects/:id",
    name: "EditProject",
    // lazy load component
    component: () => import("../pages/EditProject.vue"),
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
