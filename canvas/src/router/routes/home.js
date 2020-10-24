export default {
    path: '/home',
    name: "home",
    meta: {
        auth: true,
        title: '首页'
    },
    component: () => import('../../views/home/index.vue'),
    children: [],
}