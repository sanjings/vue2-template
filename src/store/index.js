import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import homeStore from 'pages/Home/store'
import aboutStore from 'pages/About/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    home: homeStore,
    about: aboutStore
  }
})
