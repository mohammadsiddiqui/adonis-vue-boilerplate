import Vue from "vue";
import App from "./App";

// Vue.component(
//   "users-count",
//   import(/* webpackChunkName: "about" */ "./components/UsersCount.vue")
// );

Vue.component("users-count", function(resolve) {
  require(["./components/UsersCount"], resolve);
});

const app = new Vue().$mount("#app");
