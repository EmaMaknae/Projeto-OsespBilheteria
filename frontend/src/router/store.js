import { createStore } from 'vuex';

const store = createStore({
  state: {
    authenticated: false,
  },
  mutations: {
    setAuthentication(state, value) {
      state.authenticated = value;
    },
  },
});

export default store;
