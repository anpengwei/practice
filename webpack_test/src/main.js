// debugger;
import Vue from "vue";
// console.log(Vue);
import app from "./app.vue";

new Vue({
  render: (h) => h(app),
}).$mount("#app");
