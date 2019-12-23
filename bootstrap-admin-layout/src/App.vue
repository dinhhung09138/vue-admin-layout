<template>
  <div id="app">
    <Navigation />
    <Sidebar />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Navigation from "./components/layout/navigation.vue";
import Sidebar from "./components/layout/sidebar.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Navigation,
    Sidebar
  }
};
</script>

<style>
</style>
