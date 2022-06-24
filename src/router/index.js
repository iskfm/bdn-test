import { createWebHistory, createRouter } from "vue-router";
import UserRegister from "../views/UserRegister.vue";
import UserList from "../views/UserList.vue";

const routes = [
  { path: "/", redirect: "/register" },
  {
    path: "/register",
    name: "UserRegister",
    component: UserRegister,
  },
  {
    path: "/user",
    name: "UserList",
    component: UserList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
