import { required, email, minLength } from 'vuelidate/lib/validators';

<template>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group
        label="E-mail"
        label-for="email"
        :state="getFieldState('email')"
      >
        <b-form-input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          v-model.trim="form.email"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.email.required">
          Campo de e-mail é obrigatório.
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.email.email">
          E-mail inválido.
        </b-form-invalid-feedback>
      </b-form-group>
  
      <b-form-group
        label="Senha"
        label-for="password"
        :state="getFieldState('password')"
      >
        <b-form-input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          v-model.trim="form.password"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.password.required">
          Campo de senha é obrigatório.
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.password.minLength">
          A senha deve ter pelo menos 6 caracteres.
        </b-form-invalid-feedback>
      </b-form-group>
  
      <b-button type="submit" variant="primary" block>
        Entrar
      </b-button>
    </b-form>
  </template>
  
  <script>
  import { required, email, minLength } from 'vuelidate/lib/validators';
  
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      };
    },
    validations: {
      form: {
        email: { required, email },
        password: { required, minLength: minLength(6) }
      }
    },
    methods: {
      getFieldState(field) {
        const validation = this.$v.form[field];
        if (!validation.$dirty) return null;
        return !validation.$invalid;
      },
      handleSubmit() {
        this.$v.$touch();
        if (this.$v.$invalid) return;
        
        // Aqui você pode fazer algo com os dados do formulário
        console.log('Formulário válido. Dados:', this.form);
      }
    }
  };
  </script>
  
  <style>
  /* Estilos opcionais aqui */
  </style>
  