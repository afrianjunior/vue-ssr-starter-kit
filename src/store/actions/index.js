import * as types from './types'

import {
  ADD_TODO,
} from './../mutations/types'

export default {
  [types.ADD_TODO]: ({ commit }, payload) => {
    commit(ADD_TODO, payload)
  }
}
