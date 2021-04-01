import {createApp} from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/css/materialize.min.css'

const app = createApp(App);

app.use(VueAxios, axios).use(store).use(router).mount('#app');