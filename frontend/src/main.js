// main.js
import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import LoginForm from './components/LoginForm.vue';
import MainMenu from './components/MainMenu.vue'; // Importe o componente MainMenu
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router/index';
import store from './router/store'; // Importe o store Vuex

const app = createApp(LoginForm);

const appRouter = createRouter({
  history: createWebHistory(),
  routes: router.options.routes,
});

console.log('Routes:', appRouter.options.routes);

appRouter.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (to.meta.requiresAuth && !token) {
    console.log('Requires Auth:', to);
    next({ name: 'LoginForm' });
  } else if (to.name === 'LoginForm' && token) {
    console.log('Redirect to MainMenu:', to);
    next({ name: 'MainMenu' });
  } else {
    console.log('Allow Access:', to);
    next();
  }
});

// Use o componente MainMenu
app.component('MainMenu', MainMenu);

app.use(appRouter).use(store); // Adicione o uso do store Vuex

// Monte o aplicativo
app.mount('#app');
