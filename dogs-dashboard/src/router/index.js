import Vue from "vue";
import VueRouter from "vue-router";
import DogDashboard from "../components/dog-dashboard";
import DogView from "../components/dog-view";

Vue.use(VueRouter);

const routes = [
  {
    path: "/view-doggos",
    name: "dashboard",
    component: DogDashboard
  },
  {
    path: "/view-doggos/:id",
    name: "view",
    component: DogView
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
