// index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../../../../Projeto-OsespBilheteria-origin/frontend/src/components/LoginForm.vue';
import MainMenu from '../../../../Projeto-OsespBilheteria-origin/frontend/src/components/MainMenu.vue';
import CadastroUsuario from '../../../../Projeto-OsespBilheteria-origin/frontend/src/components/CadastroUsuario.vue';
import GerenciarUsuarios from '../../../../Projeto-OsespBilheteria-origin/frontend/src/components/GerenciarUsuarios.vue';
import CadastroPerfil from '../../../../Projeto-OsespBilheteria-origin/frontend/src/components/CadastroPerfil.vue';
import GerenciarPerfis from '../../../../Projeto-OsespBilheteria-origin/frontend/src/components/GerenciarPerfis.vue';
import CadastroPermissao from '../../../../Projeto-OsespBilheteria-origin/frontend/src/components/CadastroPermissao.vue';
import GerenciarPermissoes from '../../../../Projeto-OsespBilheteria-origin/frontend/src/components/GerenciarPermissoes.vue';

// Substituindo a função warn do Vue Router para evitar a chamada indesejada de console.warn
function warn(msg) {
  // avoid using ...args as it breaks in older Edge builds
  const args = Array.from(arguments).slice(1);
  console.warn.apply(console, ['[Vue Router warn]: ' + msg].concat(args));
}

const routes = [
  { path: '/', redirect: '/login' }, // Redireciona a raiz para a página de login
  { path: '/login', name: 'LoginForm', component: LoginForm },
  { path: '/menu', name: 'MainMenu', component: MainMenu, meta: { requiresAuth: true }, },
  { path: '/cadastro-usuario', name: 'CadastroUsuario', component: CadastroUsuario },
  { path: '/usuario', name: 'GerenciarUsuarios', component: GerenciarUsuarios },
  { path: '/cadastro-perfil', name: 'CadastroPerfil', component: CadastroPerfil },
  { path: '/perfil-usuario', name: 'GerenciarPerfis', component: GerenciarPerfis },
  { path: '/cadastro-permissao', name: 'CadastroPermissao', component: CadastroPermissao },
  { path: '/permissao', name: 'GerenciarPermissoes', component: GerenciarPermissoes },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Sobrescrevendo a função warn do Vue Router
router.constructor.warn = warn;

router.beforeEach((to, from, next) => {
  const isAuthenticated = checkAuthentication(); // Verificar se está autenticado
  console.log('Navigating to:', to.name);
  console.log('Route:', to.name);
  console.log('Requires authentication:', to.meta.requiresAuth);
  console.log('Is authenticated:', isAuthenticated);


  if (to.meta.requiresAuth && !isAuthenticated) {
    console.log('Redirecting to login page...');
    next({ name: 'LoginForm' }); // Redirecionar para o login se não estiver autenticado
  } else if (to.name === 'LoginForm' && isAuthenticated) {
    console.log('Redirecting to MainMenu...');
    next({ name: 'MainMenu' }); // Redirecionar para a página principal se estiver autenticado
  } else {
    console.log('Continuing to the next route...');
    next(); // Continuar para a próxima rota
  }
});

function checkAuthentication() {
  const token = localStorage.getItem('token');
  return !!token;
}

export default router;
