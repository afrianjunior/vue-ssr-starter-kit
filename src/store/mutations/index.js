import Chance from 'chance'

import {
  ADD_TODO
} from './types'

const chance = new Chance()

export default {
  ADD_TODO: (state, { payload }) => {
    state.todos = payload
  },
}
