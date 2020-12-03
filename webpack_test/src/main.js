import Vue from "vue";
import app from "./app.vue";
import router from "./router";
import ViewUI from "view-design";
import VueComponents from "./component/main";
import "./assets/style/fonts/iconfont.css";
import "./assets/style/main.less";

VueComponents();
Vue.use(ViewUI);
new Vue({
  router,
  render: (h) => h(app),
}).$mount("#app");
