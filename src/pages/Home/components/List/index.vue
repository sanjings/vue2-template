<template>
  <div class="list-wrapper">
    <item
      v-for="(item, index) of data"
      :key="index"
      :data="item"
    />
    <button @click="setCount(3)">set</button>
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'List',
  components: {
    Item
  },
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-wrapper{
    margin: 0 auto;
    width: 1200px;
  }
</style>