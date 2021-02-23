import Vue from "vue";
import boxLayout from "./layout/box_layout.vue";
const components = [
  {
    name: "boxLayout",
    component: boxLayout,
  },
];
const VueComponents = () => {
  components.forEach((item) => {
    return Vue.component(item.name, item.component);
  });
};
export default VueComponents;
