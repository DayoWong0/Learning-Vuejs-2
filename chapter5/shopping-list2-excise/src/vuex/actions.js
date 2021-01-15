import * as types from './mutation_types'

export default {
  changeTitle: ({commit}, data) => {
    console.log('exec changeTitle in actions.js. data is ' + JSON.stringify(data))
    commit(types.CHANGE_TITLE, data)
  },
  addItem: ({commit}, data) => {
    console.log('exec addItem in actions.js. data is ' + JSON.stringify(data))
    if (data.text) {
      commit(types.ADD_ITEM, data)
    } else {
      console.log('data is empty')
    }
  }
}

