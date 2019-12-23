<template>
  <nav class="main-header navbar navbar-expand text-sm navbar-dark navbar-cyan">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#">
          <i class="fas fa-bars"></i>
        </a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link tag="a" to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link tag="a" to="/hello-world" class="nav-link">Hello world</router-link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link tag="a" to="/contact" class="nav-link">Contact</router-link>
      </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input
          class="form-control form-control-navbar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->
      <NavigationChat />
      <!-- Notifications Dropdown Menu -->
      <NavigationNotification />
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
          <i class="fas fa-th-large"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
import NavigationChat from "./navigation.chat.vue";
import NavigationNotification from "./navigation.notification.vue";

export default {
  name: "Navigation",
  components: {
    NavigationChat,
    NavigationNotification
  }
};
</script>
<style scoped>
</style>