<template>
  <div>
    <h2>Gerenciar Permissões</h2>
    <ul>
      <li v-for="permissao in permissoes" :key="permissao.id">
        <span>ID do Usuário: {{ permissao.idUsuario }}</span>
        <span>ID do Menu: {{ permissao.idMenu }}</span>
        <button @click="editarPermissao(permissao)">Editar</button>
        <button @click="removerPermissao(permissao.id)">Remover</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      permissoes: []
    };
  },
  methods: {
    carregarPermissoes() {
      // Aqui você pode fazer uma solicitação para carregar a lista de permissões do backend
      // Em vez disso, para demonstração, vou simular alguns dados de permissões
      this.permissoes = [
        { id: 1, idUsuario: 1, idMenu: 1 },
        { id: 2, idUsuario: 2, idMenu: 2 },
        { id: 3, idUsuario: 3, idMenu: 3 }
      ];
    },
    editarPermissao(permissao) {
      // Aqui você pode implementar a lógica para editar a permissão
      console.log('Editar permissão:', permissao);
    },
    removerPermissao(id) {
      // Aqui você pode implementar a lógica para remover a permissão com o ID fornecido
      console.log('Remover permissão com ID:', id);
    }
  },
  mounted() {
    // Carregar a lista de permissões quando o componente for montado
    this.carregarPermissoes();
  }
};
</script>
