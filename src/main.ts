import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./index.css";

import App from './App.vue'
import router from './router'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBagShopping, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faUserSecret,faApple, faBagShopping )

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
