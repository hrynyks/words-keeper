import { createRouter, createWebHistory } from "vue-router";
import HomePageView from "@/components/homePage/HomePageView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePageView,
  },
  {
    path: "/counter",
    name: "counter",
    component: () => import("../components/counter/CounterView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
