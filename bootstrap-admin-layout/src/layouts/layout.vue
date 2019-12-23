<template>
  <div>
    <Navigation />
    <Sidebar />
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigation from "./navigation.vue";
import Sidebar from "./sidebar.vue";
import Footer from "./footer.vue";
export default {
  name: "Layout",
  components: {
    Navigation,
    Sidebar,
    Footer
  }
};
</script>