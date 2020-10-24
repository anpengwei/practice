import Vue from "vue";
const Coms = [
  //   {
  //     name: "",
  //     component: () => import(),
  //   },
];
const vueComponents = () => {
  Coms.forEach((item) => {
    return Vue.component(item.name, item.component);
  });
};
export default vueComponents;
