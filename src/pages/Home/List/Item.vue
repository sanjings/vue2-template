<template>
  <p class="list-item">
    <span>姓名：{{data.name}}</span>
    <span>年龄：{{data.age}}</span>
    <span>性别：{{data.sex}}</span>
  </p>
</template>

<script>
export default {
  name: 'Item',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>