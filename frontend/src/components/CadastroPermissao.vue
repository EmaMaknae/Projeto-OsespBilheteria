<template>
  <div>
    <h2>Cadastro de Permissão</h2>
    <!-- Formulário para adicionar nova permissão -->
    <form @submit.prevent="adicionarPermissao">
      <div>
        <label for="idUsuario">ID do Usuário:</label>
        <input type="number" id="idUsuario" v-model.number="novaPermissao.idUsuario" required>
      </div>
      <div>
        <label for="idMenu">ID do Menu:</label>
        <input type="number" id="idMenu" v-model.number="novaPermissao.idMenu" required>
      </div>
      <button type="submit">Adicionar Permissão</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novaPermissao: {
        idUsuario: null,
        idMenu: null
      }
    };
  },
  methods: {
    adicionarPermissao() {
      // Aqui você pode enviar uma solicitação para adicionar a nova permissão ao backend
      console.log('Nova permissão:', this.novaPermissao);
      // Depois de adicionar a permissão, você pode limpar o formulário ou exibir uma mensagem de sucesso
    }
  }
};
</script>
