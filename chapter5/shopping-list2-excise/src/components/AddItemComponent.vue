<template>
  <div class="input-group">
    <input type="text" @keyup.enter="addItem({ id: id, text: newItem.trim()})" v-model="newItem" placeholder="add shopping list item"
           class="form-control">
    <span class="input-group-btn">
      <button @click="addItem({ id: id, text: newItem.trim()})" class="btn btn-default" type="button">Add!</button>
    </span>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      newItem: ''
    }
  },
  methods: mapActions({
    addItem: 'addItem'
  }),
  props: ['id']
}
</script>

<style scoped>
</style>
