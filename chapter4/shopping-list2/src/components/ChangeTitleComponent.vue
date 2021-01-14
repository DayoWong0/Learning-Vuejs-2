<template>
  <div>
    <em>Change the title of your shopping list here</em>
    <input v-model="value" v-on:input="onInput"/>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    methods: {
      onInput (event) {
        // this.$emit('input', this.value)
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<style scoped>
</style>
