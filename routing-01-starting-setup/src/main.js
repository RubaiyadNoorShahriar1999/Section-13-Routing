import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  // How to create browsing history
  history: createWebHistory(),
  //   All the routes managed by the router
  routes: [
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);
// Making vue aware of the router we just set up
app.use(router);
app.mount('#app');
