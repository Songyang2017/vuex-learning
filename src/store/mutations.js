import Vue from 'Vue'

const mutations = {
  changeAppName (state, payload) {
    state.appName = payload.name
  },
  addAnother (state, payload) {
    Vue.set(state, payload.key, payload.value)
  }
}

export default mutations
