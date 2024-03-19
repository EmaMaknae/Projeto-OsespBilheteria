import { BContainer } from 'bootstrap-vue';

<template>
  <div>
    <div class="background-image"></div>

    <b-container fluid class="login-form-container">
      <div class="login-form">
        <img src="@/assets/LOGO SP.png" alt="Logo" class="logo">
        <h2 class="text-center mb-5 title-login">Faça o login</h2>

        <div class="form-group">
          <label for="inputEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="Digite seu e-mail" v-model.trim="form.email">
        </div>

        <div class="form-group">
          <label for="inputPassword" class="form-label">Senha</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Digite sua senha" v-model.trim="form.password">
        </div>

        <div class="form-group">
          <a href="#" class="forgot-password">Esqueceu sua senha?</a>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block" @click="login">
            <i class="fas fa-sign-in-alt"></i> Entrar
          </button>
        </div>

        <!-- Mensagem de erro -->
        <div v-if="loginError" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const form = ref({
      email: "",
      password: ""
    });

    const router = useRouter(); 

    const loginError = ref(false); // Variável para controlar se ocorreu um erro no login
    const errorMessage = ref(""); // Mensagem de erro detalhada

    const login = async () => {
      loginError.value = false; // Limpa a mensagem de erro ao tentar fazer login novamente

      try {
        const response = await axios.post('http://localhost:3000/api/login', {
          email: form.value.email,
          password: form.value.password
        });

        // Se a resposta do backend indicar sucesso, redirecione para a página do menu
        if (response.status === 200) {
          console.log('Login successful:', response.data);
          // Redireciona para a página do menu
          router.push('/menu');
        } else {
          // Se o backend indicar falha, exiba a mensagem de erro correspondente
          console.error('Error logging in:', response.data.error);
          loginError.value = true;
          errorMessage.value = response.data.error;
        }
      } catch (error) {
        console.error('Error logging in:', error.response.data);
        loginError.value = true; // Define loginError como true ao ocorrer um erro de login
        if (error.response && error.response.data) {
          console.error('Error logging in:', error.response.data);
          errorMessage.value = error.response.data.error;
        } else {
          console.error('Error logging in:', error);
        }
        // Trate os erros de login aqui (exibindo uma mensagem de erro, etc.)
      }
    };

    return { form, login, loginError, errorMessage };
  }
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

.login-form-container {
  position: relative;
}

.login-form {
  border-radius: 25px;
  max-width: 400px;
  padding: 40px;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; 
  background-color: azure;
}

.title-login {
  font-weight: bold;
}

.logo {
  width: 100px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.forgot-password {
  font-size: 14px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-block {
  width: 100%;
}
</style>
