const state = () => ({
  username: "",
  email: "",
  password: "",
  status: ""
})

const mutations = {
  login(state, username, email, password) {
    state.email = email,
      state.password = password,
      state.username = username,
      state.status = 'loggedIn'
  },
  logout(state) {
    state.status = 'loggedOut',
      state.username = ''
  },
}

const actions = {
  login({
    commit
  }, user) {
    commit('login', user, email, password)
  },
  logout({
    commit
  }) {
    auth.signOut().then(() => {
      commit('logout')
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
