<template>
  <div>
    <h2>Gerenciar Usuários</h2>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        <span>Nome: {{ usuario.nome }}</span>
        <span>Login: {{ usuario.login }}</span>
        <span>ID Permissão de Acesso: {{ usuario.idPermissaoAcesso }}</span>
        <span>Ativo: {{ usuario.ativo ? 'Sim' : 'Não' }}</span>
        <button @click="editarUsuario(usuario)">Editar</button>
        <button @click="removerUsuario(usuario.id)">Remover</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: []
    };
  },
  methods: {
    carregarUsuarios() {
      // Aqui você pode fazer uma solicitação para carregar a lista de usuários do backend
      // Em vez disso, para demonstração, vou simular alguns dados de usuários
      this.usuarios = [
        { id: 1, nome: 'Usuário 1', login: 'usuario1', idPermissaoAcesso: 1, ativo: true },
        { id: 2, nome: 'Usuário 2', login: 'usuario2', idPermissaoAcesso: 2, ativo: false },
        { id: 3, nome: 'Usuário 3', login: 'usuario3', idPermissaoAcesso: 1, ativo: true }
      ];
    },
    editarUsuario(usuario) {
      // Aqui você pode implementar a lógica para editar o usuário
      console.log('Editar usuário:', usuario);
    },
    removerUsuario(id) {
      // Aqui você pode implementar a lógica para remover o usuário com o ID fornecido
      console.log('Remover usuário com ID:', id);
    }
  },
  mounted() {
    // Carregar a lista de usuários quando o componente for montado
    this.carregarUsuarios();
  }
};
</script>
