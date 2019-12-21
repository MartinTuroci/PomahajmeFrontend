import axios from 'axios';

const state = () => ({
  token: getSavedState('user-token'),
  isAuthenticated: false,
});
const getters = {
  isAuthenticated: state => !!state.token,
};
const actions = {
  login({ commit }, token) {
    commit('SET_CURRENT_TOKEN', token);
  },
  logout({ commit }) {
    commit('UNSET_CURRENT_TOKEN');
  },
};
const mutations = {
  SET_CURRENT_TOKEN(state, token) {
    state.token = token;
    saveToken('user-token', token);
    setDefaultAuthHeaders(token);
  },
  UNSET_CURRENT_TOKEN(state) {
    state.token = '';
    saveToken('user-token', '');
    setDefaultAuthHeaders('');
  },
};

// ===
// Private helpers
// ===

function getSavedState(key) {
  return process.browser ? window.localStorage.getItem(key) || '' : '';
}

function saveToken(key, token) {
  window.localStorage.setItem(key, token);
}

function setDefaultAuthHeaders(token) {
  axios.defaults.headers.common.Authorization = token;
}

export default {
  state,
  getters,
  actions,
  mutations,
};
