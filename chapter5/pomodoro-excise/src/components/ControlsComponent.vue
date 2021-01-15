<template>
  <span>
    <button title="start" @click="start" :disabled="isStarted && !isPaused">
      <i class="glyphicon glyphicon-play"></i>
    </button>
    <button title="pause" @click="pause" :disabled="!isStarted || isPaused || isStopped">
      <i class="glyphicon glyphicon-pause"></i>
    </button>
    <button title="stop" @click="stop" :disabled="!isStarted || isStopped">
      <i class="glyphicon glyphicon-stop"></i>
    </button>
  </span>
</template>

<style scoped>
button:disabled i {
  color: gray;
}
</style>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  computed: mapGetters(['isStarted', 'isPaused', 'isStopped']),
  methods: mapActions(['start', 'stop', 'pause'])
}
</script>
