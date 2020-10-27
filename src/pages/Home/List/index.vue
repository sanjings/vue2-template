<template>
  <div class="list-wrapper">
    <list-item
      v-for="(item, index) of data"
      :key="index"
      :data="item"
    />
    <button @click="setCount(3)">set</button>
  </div>
</template>

<script>
import ListItem from './item'

export default {
  name: 'List',
  components: {
    ListItem
  },
  props: {
    data: {
      type: Array,
      default: () => []
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