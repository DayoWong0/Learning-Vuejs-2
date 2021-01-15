import * as types from './mutation_types'
import _ from 'underscore'
import {WORKING_TIME, RESTING_TIME} from './config'

// 切换 工作/休息 时间
function togglePomodoro (state, toggle) {
  if (_.isBoolean(toggle) === false) {
    toggle = !state.isWorking
  }
  state.isWorking = toggle
  state.counter = state.isWorking ? WORKING_TIME : RESTING_TIME
}

// 倒计时
function tick (state) {
  if (state.counter === 0) {
    togglePomodoro(state)
  }
  state.counter --
  state.timestamp = new Date().getTime()
  console.log(state.timestamp)
}

export default {
  [types.START] (state) {
    state.started = true
    state.paused = false
    state.stopped = false
    state.interval = setInterval(() => tick(state), 1000)
  },
  [types.PAUSE] (state) {
    state.started = true
    state.paused = true
    state.stopped = false
    clearInterval(state.interval)
  },
  [types.STOP] (state) {
    state.started = false
    state.paused = false
    state.stopped = true
    togglePomodoro(state, true)
    clearInterval(state.interval)
  }
}
