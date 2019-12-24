<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="4" xs="12" md="4">col</v-col>
        <v-col cols="12" sm="4" xs="12" md="4">
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    required
                    maxlength="50"
                    counter
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    :error-messages="emailErrors"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12" xs="12">
                  <v-text-field
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    label="Password"
                    required
                    maxlength="50"
                    counter
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                    hint="Min 6 characters"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                    :error-messages="passwordErrors"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="8" md="8" xs="8">
                      <v-checkbox
                        v-model="rememberMe"
                        class="pd-0 mt-10"
                        color="info"
                        label="Remember me"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="4" md="4" xs="4">
                      <v-btn class="ma-2" tile color="indigo" dark @click="login">Login</v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>
        <v-col cols="12" sm="4" xs="12" md="4">col</v-col>
      </v-row>
      <div class="login-box">
        <div class="login-logo">
          <a href="/">
            <b>Admin</b>LTE
          </a>
        </div>
        <div class="card">
          <div class="card-body login-card-body">
            <p class="login-box-msg">Sign in to start your session</p>
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
    </v-container>
  </v-app>
</template>
<script>
import Vuetify from "vuetify";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  name: "Login",
  vuetify: new Vuetify(),
  data() {
    return {
      email: null,
      password: null,
      showPassword: false,
      rememberMe: true
    };
  },
  validations: {
    email: { required, email, maxLength: maxLength(50) },
    password: { required, minLength: minLength(6), maxLength: maxLength(50) }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;

      !this.$v.email.required && errors.push("Email is required");

      !this.$v.email.maxLength &&
        errors.push("Email requird maximun 50 characters");
      !/.+@.+/.test(this.$v.email) && errors.push("Email invalid");

      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;

      !this.$v.password.required && errors.push("Password is required");

      !this.$v.password.minLength &&
        errors.push("Password require minimun 6 characters");

      !this.$v.password.maxLength &&
        errors.push("Password requird maximun 50 characters");
      return errors;
    }
  },
  methods: {
    login: function() {
      //
      // this.$v.$touch();
      // if (this.$v.$error) {
      //   return;
      // }
      window.console.log("Login");
      window.console.log(this.email);
      window.console.log(this.password);
    }
  }
};
</script>
<style scoped>
.pd-0 {
  padding: 0px !important;
}
.mt-10 {
  margin-top: 10px !important;
}
</style>