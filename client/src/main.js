import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import store from './store/store'
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import ApplicationForm from "./components/AppForm.vue";
import Jobs from "./views/Jobs.vue";
import Dashboard from "./views/Dashboard.vue";
import Profile from "./views/Profile.vue";
import Blog from "./views/Blog.vue";
import WeeklyPicture from "./views/WeeklyPicture.vue";
import BlogPost from "./views/BlogPost.vue";
import UserDetail from "./views/UserDetail.vue"
const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Register },
  { path: "/blogs", component: Blog },
  { path: "/register", component: Register },
  { path: "/jobs", component: Jobs },
  { path: "/dashboard", component: Dashboard },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/post/:id",
    name: "BlogPost",
    component: BlogPost,
    props: true,
  },
  {
    path: "/attendance",
    name: "WeeklyPicture",
    component: WeeklyPicture,
    props: true,
  },
  {
    path: "/apply",
    name: "ApplicationForm",
    component: ApplicationForm,
    props: true,
  },
  {
    path: "/applications/:id",
    name: "UserDetail",
    component: UserDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(store).mount("#app");

