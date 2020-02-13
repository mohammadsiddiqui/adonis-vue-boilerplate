import Vue from "vue";

Vue.component("users-count", function(resolve) {
  require(["./components/UsersCount"], resolve);
});

const app = new Vue().$mount("#app");
