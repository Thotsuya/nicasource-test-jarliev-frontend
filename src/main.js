import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faLink } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);
library.add(faLink);

createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
