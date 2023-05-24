import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "All",
    component: () => import("../views/AllTasks.vue"),
  },
  {
    path: "/pending",
    name: "pending",
    component: () => import("../views/PendingTasks.vue"),
  },
  {
    path: "/completed",
    name: "completed",
    component: () => import("../views/CompletedTasks.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/NotFoundPage.vue"),
  },
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
