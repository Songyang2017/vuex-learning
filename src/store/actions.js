import { getAppName } from '@/api/api'

const actions = {
  updateAppName ({ commit }) {
    getAppName().then(res => {
      console.log(res)
      commit('changeAppName', {
        name: res.info.name
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}

export default actions
