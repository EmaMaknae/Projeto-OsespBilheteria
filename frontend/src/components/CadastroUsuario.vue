<template>
  <div>
    <h2>Cadastro de Usuário</h2>
    <!-- Formulário para adicionar novo usuário -->
    <form @submit.prevent="adicionarUsuario">
      <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="novoUsuario.nome" required>
      </div>
      <div>
        <label for="login">Login:</label>
        <input type="text" id="login" v-model="novoUsuario.login" required>
      </div>
      <div>
        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="novoUsuario.senha" required>
      </div>
      <div>
        <label for="idPermissaoAcesso">ID da Permissão de Acesso:</label>
        <input type="number" id="idPermissaoAcesso" v-model.number="novoUsuario.idPermissaoAcesso" required>
      </div>
      <div>
        <label for="ativo">Ativo:</label>
        <input type="checkbox" id="ativo" v-model="novoUsuario.ativo">
      </div>
      <button type="submit">Adicionar Usuário</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novoUsuario: {
        nome: '',
        login: '',
        senha: '',
        idPermissaoAcesso: null,
        ativo: true
      }
    };
  },
  methods: {
    adicionarUsuario() {
      // Aqui você pode enviar uma solicitação para adicionar o novo usuário ao backend
      console.log('Novo usuário:', this.novoUsuario);
      // Depois de adicionar o usuário, você pode limpar o formulário ou exibir uma mensagem de sucesso
    }
  }
};
</script>
