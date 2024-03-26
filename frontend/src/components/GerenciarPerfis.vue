<template>
  <div>
    <h2>Gerenciar Perfis</h2>
    <ul>
      <li v-for="perfil in perfis" :key="perfil.id">
        <span>Descrição: {{ perfil.descricao }}</span>
        <span>Administrador: {{ perfil.administrador ? 'Sim' : 'Não' }}</span>
        <button @click="editarPerfil(perfil)">Editar</button>
        <button @click="removerPerfil(perfil.id)">Remover</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perfis: []
    };
  },
  methods: {
    carregarPerfis() {
      // Aqui você pode fazer uma solicitação para carregar a lista de perfis do backend
      // Em vez disso, para demonstração, vou simular alguns dados de perfis
      this.perfis = [
        { id: 1, descricao: 'Perfil 1', administrador: true },
        { id: 2, descricao: 'Perfil 2', administrador: false },
        { id: 3, descricao: 'Perfil 3', administrador: true }
      ];
    },
    editarPerfil(perfil) {
      // Aqui você pode implementar a lógica para editar o perfil
      console.log('Editar perfil:', perfil);
    },
    removerPerfil(id) {
      // Aqui você pode implementar a lógica para remover o perfil com o ID fornecido
      console.log('Remover perfil com ID:', id);
    }
  },
  mounted() {
    // Carregar a lista de perfis quando o componente for montado
    this.carregarPerfis();
  }
};
</script>
