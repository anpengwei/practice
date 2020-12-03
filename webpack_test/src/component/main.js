import Vue from "vue";
const components = [
  {
    name: "boxLayout",
    component: () => import("./layout/box_layout.vue"),
  },
];
const VueComponents = () => {
  components.forEach((item) => {
    return Vue.component(item.name, item.component);
  });
};
export default VueComponents;
