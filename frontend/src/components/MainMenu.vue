<template>
  <div>
    <!-- Background com foto em tela cheia -->
    <div class="background-image"></div>

    <!-- Barra de navegação -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Menu</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/cadastro" class="nav-link">Cadastro</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Containers com informações -->
    <div class="container">
      <!-- Container 1 -->
      <div class="container mt-5">
        <!-- Conteúdo do container 1 -->
      </div>

      <!-- Container 2 -->
      <div class="container mt-5">
        <!-- Conteúdo do container 2 -->
      </div>

      <!-- Container 3 -->
      <div class="container mt-5">
        <!-- Conteúdo do container 3 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
};
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



.container {
  margin-top: 100px; 
}


</style>
