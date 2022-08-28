import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faLink,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

library.add(faBars);
library.add(faLink);
library.add(faArrowRight);
library.add(faFacebook);
library.add(faInstagram);
library.add(faLinkedin);
library.add(faSkype);

createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
