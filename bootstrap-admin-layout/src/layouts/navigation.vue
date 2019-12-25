<template>
  <v-app-bar color="blue darken-3" dark dense tile flat fixed clipped-left app>
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
    <v-menu>
      <template v-slot:activator="{ on }">
        <v-btn dark icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
    </v-menu>
    <v-menu nudge-bottom="0" offset-y>
      <template v-slot:activator="{ on }">
        <v-list-item-avatar v-on="on">
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg" />
        </v-list-item-avatar>
      </template>
      <v-list>
        <v-list-item @click="true">
          <v-list-item-icon>
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item @click="true">
          <v-list-item-title>
            <v-icon>mdi-format-list-bulleted-square</v-icon>&nbsp;Change password
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="true">
          <v-list-item-title :append-icon="mdi-heart">Forgot password</v-list-item-title>
        </v-list-item>
        <v-list-item @click="true">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  name: "Navigation",
  components: {}
};
</script>
<style scoped>
</style>