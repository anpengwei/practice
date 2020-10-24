import Vue from "vue";
import App from "./App.vue";
import ViewUI from "view-design";
import vueComponents from "./components/index";
import router from "./router/index";
Vue.config.productionTip = false;
Vue.use(ViewUI);
vueComponents();
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
