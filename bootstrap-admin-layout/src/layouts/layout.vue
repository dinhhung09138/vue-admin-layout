<template>
  <v-app>
    <v-card flat tile>
      <v-toolbar color="primary" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-row>
      <v-col cols="12" md="12"></v-col>
    </v-row>
    <div>
      <Navigation />
      <Sidebar />
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
      <Footer />
    </div>
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