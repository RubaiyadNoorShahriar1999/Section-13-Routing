import { createApp } from 'vue';

import App from './App.vue';
import route from './router.js';

const app = createApp(App);
app.use(route);

app.mount('#app');
