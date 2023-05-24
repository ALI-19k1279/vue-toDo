import { createApp } from "vue";
import "./assets/reset.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
//import { makeServer } from "@/server";
const pinia = createPinia();
const app = createApp(App);

// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" });
// }
app.use(router);
app.use(pinia);
app.mount("#app");
