import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VIcon from "@/components/VIcon/VIcon";

const app = createApp(App);

app.component("VIcon", VIcon);

app.use(router);
app.mount("#app");
