import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LoginForm from './components/LoginForm.vue';
import MainMenu from './components/MainMenu.vue';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const routes = [
  { path: '/', component: LoginForm },
  { path: '/menu', component: MainMenu },
  // Defina outras rotas aqui, se necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
