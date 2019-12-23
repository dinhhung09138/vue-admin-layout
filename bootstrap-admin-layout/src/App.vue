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
import Navigation from "./layout/navigation.vue";
import Sidebar from "./layout/sidebar.vue";
import Footer from "./layout/footer.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Sidebar,
    Footer
  }
};
</script>
