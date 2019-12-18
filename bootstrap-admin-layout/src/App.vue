<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
@import "./assets/plugins/fontawesome-free/css/all.min.css";
@import "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";
@import "./assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
@import "./assets/dist/css/adminlte.min.css";
@import "./assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
@import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
