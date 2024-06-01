import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import store from './stores/store'
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Jobs from "./views/Jobs.vue";
import Dashboard from "./views/Dashboard.vue";
import Profile from "./views/Profile.vue";
import Blog from "./views/Blog.vue";
import BlogPost from "./views/BlogPost.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Register },
  { path: "/blogs", component: Blog },
  { path: "/register", component: Register },
  { path: "/jobs", component: Jobs },
  { path: "/dashboard", component: Dashboard },
  {
    path: "/user",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/post/:id",
    name: "BlogPost",
    component: BlogPost,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(store).mount("#app");

