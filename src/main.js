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
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBars,
  faLink,
  faArrowRight,
  faFacebook,
  faInstagram,
  faLinkedin,
  faSkype,
  faFacebookF
);

createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
