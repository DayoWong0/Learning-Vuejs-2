const POMODORO_STATES = {
  WORK: "work",
  REST: "rest"
}

const WORKING_TIME_LENGTH_IN_MINUTES = 1
const RESTING_TIME_LENGTH_IN_MINUTES = 1

const STATES = {
  STARTED: "started",
  STOPPED: "stopped",
  PAUSED: "paused"
}

new Vue({
  el: '#app',
  data: {
    minute: WORKING_TIME_LENGTH_IN_MINUTES,
    second: 0,
    pomodoroState: POMODORO_STATES.WORK,
    timestamp: 0,
    status: STATES.STOPPED
  },
  computed: {
    title: function () {
      return this.pomodoroState === POMODORO_STATES.WORK ? "Work" : "Rest"
    },

    min: function () {
      if (this.minute < 10) {
        return "0" + this.minute
      }
      return this.minute
    },

    sec: function () {
      if (this.second < 10) {
        return '0' + this.second
      }
      return this.second
    },
  },
  methods: {
    start: function () {
      this._tick()
      this.interval = setInterval(this._tick, 1000)
      this.status = STATES.STARTED
    },

    _tick: function () {
      if (this.second !== 0) {
        this.second--
        return
      }
      if (this.minute !== 0) {
        this.minute--
        this.second = 59
        return
      }

      this.pomodoroState = this.pomodoroState === POMODORO_STATES.WORK ? POMODORO_STATES.REST : POMODORO_STATES.WORK

      if (this.pomodoroState == POMODORO_STATES.WORK) {
        this.minute = WORKING_TIME_LENGTH_IN_MINUTES
      } else {
        this.minute = RESTING_TIME_LENGTH_IN_MINUTES
      }
    },

    stop: function () {
      clearInterval(this.interval)
      this.status = STATES.STOPPED
      this.pomodoroState = POMODORO_STATES.WORK
      this.minute = WORKING_TIME_LENGTH_IN_MINUTES
      this.second = 0
    },

    pause: function () {
      clearInterval(this.interval)
      this.status = STATES.PAUSED
    },

  }
})