import { createApp } from "vue";
import { createStore } from "vuex";

import "./index.css";

import App from "./App.vue";

const app = createApp(App);
const store = createStore({
  state() {
    return {
      cartItems: 10,
    };
  },
});

app.use(store);
app.mount("#app");
