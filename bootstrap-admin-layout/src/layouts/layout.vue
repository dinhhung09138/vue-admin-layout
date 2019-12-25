<template>
  <v-app>
    <Navigation />
    <Sidebar />
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>
<script>
import Vuetify from "vuetify";
import Navigation from "./navigation.vue";
import Sidebar from "./sidebar.vue";
import Footer from "./footer.vue";
export default {
  name: "Layout",
  vuetify: new Vuetify(),
  components: {
    Navigation,
    Sidebar,
    Footer
  }
};
</script>