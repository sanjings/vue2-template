<template>
  <div class="list-wrapper">
    <list-item v-for="(item, index) of listData" :key="index" :data="item" />
  </div>
</template>

<script>
import ListItem from './item';

export default {
  name: 'List',
  components: {
    ListItem
  },
  props: {
    listData: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  margin: 0 auto;
  width: 1200px;
}
</style>
