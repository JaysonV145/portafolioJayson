import "./assets/main.css";
import "@/styles/home.css";
import "@/styles/global.css"; /**Esta e sotra forma */
import store from "../store";
import "animate.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
app.use(router);
app.use(store);
app.mount("#app");
