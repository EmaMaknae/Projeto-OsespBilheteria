<template>
  <div>
    <h2>Cadastro de Perfil</h2>
    <!-- Formulário para adicionar novo perfil -->
    <form @submit.prevent="adicionarPerfil" v-if="!editandoPerfil">
      <div>
        <label for="descricao">Descrição:</label>
        <input type="text" id="descricao" v-model="novoPerfil.descricao" required>
      </div>
      <div>
        <label for="administrador">Administrador:</label>
        <input type="checkbox" id="administrador" v-model="novoPerfil.administrador">
      </div>
      <button type="submit">Adicionar Perfil</button>
    </form>

    <!-- Formulário para editar perfil -->
    <form @submit.prevent="atualizarPerfil" v-if="editandoPerfil">
      <div>
        <label for="descricao">Descrição:</label>
        <input type="text" id="descricao" v-model="perfilEditado.descricao" required>
      </div>
      <div>
        <label for="administrador">Administrador:</label>
        <input type="checkbox" id="administrador" v-model="perfilEditado.administrador">
      </div>
      <button type="submit">Atualizar Perfil</button>
      <button @click.prevent="cancelarEdicao">Cancelar</button>
    </form>

    <!-- Lista de perfis -->
    <ul>
      <li v-for="perfil in perfis" :key="perfil.id">
        {{ perfil.descricao }} - {{ perfil.administrador ? 'Administrador' : 'Não Administrador' }}
        <button @click="editarPerfil(perfil)">Editar</button>
        <button @click="excluirPerfil(perfil.id)">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perfis: [],
      novoPerfil: {
        descricao: '',
        administrador: false
      },
      perfilEditado: {
        id: null,
        descricao: '',
        administrador: false
      },
      editandoPerfil: false
    };
  },
  mounted() {
    this.carregarPerfis();
  },
  methods: {
    async carregarPerfis() {
      // Aqui você deve fazer uma requisição para obter a lista de perfis do backend
      // Substitua essa parte do código pela lógica de obtenção de perfis do seu backend
      this.perfis = [
        { id: 1, descricao: 'Perfil 1', administrador: true },
        { id: 2, descricao: 'Perfil 2', administrador: false },
        { id: 3, descricao: 'Perfil 3', administrador: true }
      ];
    },
    async adicionarPerfil() {
      // Aqui você deve fazer uma requisição para adicionar o novo perfil ao backend
      // Substitua essa parte do código pela lógica de adição de perfil do seu backend
      console.log('Novo perfil:', this.novoPerfil);
      // Após adicionar o perfil com sucesso, você pode limpar o formulário e recarregar a lista de perfis
      this.novoPerfil = { descricao: '', administrador: false };
      this.carregarPerfis();
    },
    async editarPerfil(perfil) {
      // Carregar os dados do perfil a ser editado
      this.perfilEditado.id = perfil.id;
      this.perfilEditado.descricao = perfil.descricao;
      this.perfilEditado.administrador = perfil.administrador;
      // Mudar para o modo de edição
      this.editandoPerfil = true;
    },
    async atualizarPerfil() {
      // Aqui você deve fazer uma requisição para atualizar o perfil no backend
      // Substitua essa parte do código pela lógica de atualização de perfil do seu backend
      console.log('Perfil atualizado:', this.perfilEditado);
      // Após atualizar o perfil com sucesso, você pode limpar o formulário e recarregar a lista de perfis
      this.perfilEditado = { id: null, descricao: '', administrador: false };
      this.editandoPerfil = false;
      this.carregarPerfis();
    },
    async excluirPerfil(perfilId) {
      // Aqui você deve fazer uma requisição para excluir o perfil no backend
      // Substitua essa parte do código pela lógica de exclusão de perfil do seu backend
      console.log('Excluir perfil com ID:', perfilId);
      // Após excluir o perfil com sucesso, você pode recarregar a lista de perfis
      this.carregarPerfis();
    },
    cancelarEdicao() {
      // Cancelar a edição e limpar os dados do perfil editado
      this.perfilEditado = { id: null, descricao: '', administrador: false };
      this.editandoPerfil = false;
    }
  }
};
</script>
