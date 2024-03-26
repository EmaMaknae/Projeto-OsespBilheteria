<template>
  <div>
    <div v-if="isAuthenticated">
      <div class="background-image"></div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Menu</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenu">
                  <li><router-link to="/cadastro" class="dropdown-item">Cadastro</router-link></li>
                  <li><router-link to="/menu" class="dropdown-item">Gerenciar Menus</router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownUsuario" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Usuario
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownUsuario">
                  <li><router-link to="/cadastro-usuario" class="dropdown-item">Cadastro</router-link></li>
                  <li><router-link to="/usuario" class="dropdown-item">Gerenciar Usuarios</router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPerfil" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Perfil Usuario
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownPerfil">
                  <li><router-link to="/cadastro-perfil" class="dropdown-item">Cadastro</router-link></li>
                  <li><router-link to="/perfil-usuario" class="dropdown-item">Gerenciar Perfis</router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPermissao" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Permissão
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownPermissao">
                  <li><router-link to="/cadastro-permissao" class="dropdown-item">Cadastro</router-link></li>
                  <li><router-link to="/permissao" class="dropdown-item">Gerenciar Permissões</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <!-- Seção para criar, ler, atualizar e excluir menus -->
        <div>
          <!-- Adicione aqui o código do CRUD do menu -->
          <!-- Por favor, utilize o código fornecido na resposta anterior -->
        </div>
        <router-view></router-view>
      </div>
    </div>
    <div v-else>
      <router-link to="/login"></router-link>
    </div>
  </div>
</template>

<script>
// No arquivo de configuração do Vue Router (normalmente router/index.js)
import { createRouter, createWebHistory } from 'vue-router';
import MainMenu from '../../../../Projeto-OsespBilheteria-origin/frontend/src/components/MainMenu.vue';
const routes = [
  {
    path: '/menu',
    name: 'MainMenu',
    component: MainMenu,
    props: route => ({ token: route.params.token }) // Configuração para passar o parâmetro token
  },
  // outras rotas...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;


</script>

<style>
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/teatro.png');
  background-size: cover;
  background-position: center;
  z-index: -1;
}
</style>
