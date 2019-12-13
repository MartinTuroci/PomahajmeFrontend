const state = () => ({
  token: process.browser ? localStorage.getItem("user-token") || "" : "",
  isAuthenticated: false
});
const getters = {
  isAuthenticated: state => state.isAuthenticated || !!state.token,
  token: token => state.token
};
const actions = {
  setIsAuthenticated({ commit }, payload) {
    commit("SET_IS_AUTHENTICATED", payload);
  }
};
const mutations = {
  SET_IS_AUTHENTICATED(state, payload) {
    state.isAuthenticated = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
