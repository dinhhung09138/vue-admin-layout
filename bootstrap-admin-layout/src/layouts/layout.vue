<template>
  <v-app>
    <v-app-bar color="blue darken-3" dark dense tile flat fixed>
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
      <v-btn icon>
        <v-badge>
          <template v-slot:badge>0</template>
          <v-icon>mdi-email</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
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
    <v-bottom-navigation background-color="blue darken-3" color="white" dense tile flat>
      <v-btn tile outlined x-small color="success">
        <span>Favorites</span>
      </v-btn>
      <span>Data content</span>
      abc def
    </v-bottom-navigation>
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