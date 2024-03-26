<template>
  <div>
    <div class="background-image"></div>

    <div class="login-form-container">
      <div class="login-form">
        <img src="@/assets/LOGO SP.png" alt="Logo" class="logo">
        <h2 class="text-center mb-5 title-login">Faça o login</h2>

        <!-- Início do formulário -->
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Digite seu e-mail"
              v-model.trim="form.login" autocomplete="email">
          </div>


          <div class="form-group">
            <label for="inputPassword" class="form-label">Senha</label>
            <div class="input-group">
              <input :type="showPassword ? 'text' : 'password'" class="form-control" id="inputPassword"
                placeholder="Digite sua senha" v-model.trim="form.senha" autocomplete="current-password">
              <button type="button" class="btn btn-outline-secondary" @click="togglePasswordVisibility">
                <img src="@/assets/eye.png" alt="Eye Icon" class="eye-icon">
              </button>
            </div>
          </div>

          <!-- Alerta de senha incorreta -->
          <div v-if="showPasswordAlert" class="alert alert-danger d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:">
              <use xlink:href="#exclamation-triangle-fill" />
            </svg>
            <div>
              Senha incorreta. Por favor, tente novamente.
            </div>
          </div>


          <div class="form-group">
            <a href="#" class="forgot-password">Esqueceu sua senha?</a>
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">
              <i class="fas fa-sign-in-alt"></i> Entrar
            </button>
          </div>
        </form>

        <!-- Mensagem de erro -->
        <div v-if="loginError" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importe o hook useRouter para obter acesso ao router
import axiosInstance from '@/router/axios'; // Importe o axiosInstance configurado

export default {
  setup() {
    const form = ref({
      login: "",
      senha: ""
    });

    const loginError = ref(false);
    const errorMessage = ref("");
    const showPassword = ref(false);
    const showPasswordAlert = ref(false);

    const router = useRouter(); // Obtenha a instância do router

    const login = async () => {
      // Limpa os erros anteriores
      loginError.value = false;

      console.log('Tentando fazer login...');
      console.log('Dados de login:', form.value);

      try {
        const response = await axiosInstance.post('/login', {
          login: form.value.login,
          senha: form.value.senha
        });

        console.log('Resposta do servidor:', response);

        if (response && response.data) {
          console.log('Login successful:', response.data);

          // Armazena o token JWT no Local Storage
          localStorage.setItem('token', response.data.token);
          console.log('Token armazenado no Local Storage:', response.data.token);

          // Configura o token JWT nos cabeçalhos Axios para todas as solicitações subsequentes
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

          // Redirecionar para o MainMenu com parâmetros
          router.push({ 
            name: 'MainMenu', 
            params: { 
              token: response.data.token 
            } 
          }).catch((err) => {
            // Tratar possíveis erros de redirecionamento
            console.error('Erro ao redirecionar para MainMenu:', err);
          });
          console.log('Redirecionando para MainMenu...');
        }
      } catch (error) {
        // Lidar com erros
        alert('Login ou senha incorretos, verifique e tente novamente.'); // Exibe um alerta de erro
        console.error('Erro ao fazer login:', error); // Exibe o erro no console
      }
    };

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    return { form, login, loginError, errorMessage, showPassword, togglePasswordVisibility, showPasswordAlert };
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

.input-group {
  position: relative;
}

.input-group button {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
}

.eye-icon {
  width: 20px;
  position: relative;
  top: 35%;
  transform: translateY(-50%);
  display: inline-block;
  vertical-align: middle;
}
</style>
