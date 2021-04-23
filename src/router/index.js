import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Intel from "@/views/Intel.vue";
//import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Intel",
    name: "Intel",
    component: Intel,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;