import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  // How to create browsing history
  history: createWebHistory(),
  //   All the routes managed by the router
  routes: [
    // We can do this to redirect the user to a specific page or add "alias: '/'" to the teams route
    // In alias the URL doesn't change but the component changes and in redirect the URL changes
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    { path: '/users', component: UsersList },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);
// Making vue aware of the router we just set up
app.use(router);
app.mount('#app');
