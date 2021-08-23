import { createRouter, createWebHashHistory } from "vue-router";
import Hello from "./study/Hello.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/home', component: Hello }
    ]
})