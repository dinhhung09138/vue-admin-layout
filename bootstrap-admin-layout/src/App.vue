<template>
  <div id="app">
    <Navigation />
    <Sidebar />
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import VueRouter from "vue-router";
import Navigation from "./components/layout/navigation.vue";
import Sidebar from "./components/layout/sidebar.vue";
import Footer from "./components/layout/footer.vue";

import Home from "./components/modules/home.module.vue";
const HelloWorld = () => import("./components/HelloWorld.vue");

const routers = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/hello-world",
    component: HelloWorld
  }
];

const router = new VueRouter({
  routers
});

export default {
  name: "app",
  router,
  components: {
    Navigation,
    Sidebar,
    Footer
  }
};
</script>

<style>
</style>
