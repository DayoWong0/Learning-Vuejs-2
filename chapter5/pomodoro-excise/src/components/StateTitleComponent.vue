<template>
  <div>
    <h3>
      {{ isWorking ? workingTitle : restingTitle }}
    </h3>
  </div>
</template>

<style scoped>
</style>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        workingTitle: 'Work!',
        restingTitle: 'Rest!'
      }
    },
    computed: mapGetters(['isWorking'])
  }
</script>

