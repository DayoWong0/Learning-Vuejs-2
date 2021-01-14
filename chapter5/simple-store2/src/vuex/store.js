import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const state = {
  message: 'Hello Vue!'
}

const mutations = {
  changeMessage(state, message) {
    state.message = message
  }
}

export default new Vuex.Store({
  state, mutations, getters
})
