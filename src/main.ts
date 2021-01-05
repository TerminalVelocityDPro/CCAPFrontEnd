import { createApp } from "vue";
import fetch from "node-fetch";
import App from "./App.vue";

// Get Data from the Backend
const getData = async () => {
  const data = await fetch("./php/backend.php", { method: "GET" });
  const json = await data.json(); // Should eventually type this JSON

  console.log(json);
};

createApp(App).mount("#app");
