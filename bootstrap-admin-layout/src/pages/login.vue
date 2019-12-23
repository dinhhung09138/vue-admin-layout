<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="/">
        <b>Admin</b>LTE
      </a>
    </div>
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <form @submit.prevent="login">
          <div class="input-group mb-3" :class="{'has-error': $v.form.email.$error}">
            <input type="email" class="form-control" placeholder="Email" v-model="form.email" />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
            <span class="w-100" v-if="$v.form.email.$error">Email invalid</span>
          </div>
          <div class="input-group mb-3" :class="{'has-error' : $v.form.password.$error}">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="form.password"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
            <span class="w-100" v-if="$v.form.password.$error">Password invalid</span>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember" v-model="form.rememberMe" />
                <label for="remember">Remember Me</label>
              </div>
            </div>
            <div class="col-4">
              <button type="submit" class="btn btn-primary btn-block">Sign In</button>
            </div>
          </div>
        </form>
        <div class="social-auth-links text-center mb-3">
          <p>- OR -</p>
          <a href="#" class="btn btn-block btn-primary">
            <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
          </a>
          <a href="#" class="btn btn-block btn-danger">
            <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
          </a>
        </div>
        <p class="mb-1">
          <a href="forgot-password.html">I forgot my password</a>
        </p>
        <p class="mb-0">
          <a href="register.html" class="text-center">Register a new membership</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: null,
        password: null,
        rememberMe: true
      }
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  },
  methods: {
    login: function() {
      //
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return;
      }
      window.console.log("Login");
      window.console.log(this.form.email);
      window.console.log(this.form.password);
    }
  }
};
</script>
<style scoped>
.login-box {
  margin: auto;
}
.accent-info a {
  color: #fff;
}
.has-error label,
.has-error span {
  color: red;
}
.has-error input {
  border-color: red;
}
.w-100 {
  width: 100%;
}
</style>