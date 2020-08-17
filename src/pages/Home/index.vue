<template>
  <div class="home">
    <List :data="listData"></List>
  </div>
</template>

<script>
import List from './List'

export default {
  name: 'Home',
  components: {
    List
  },
  data() {
    return {
      listData: [
        { name: '张三', age: 28, sex: '男' },
        { name: '李四', age: 38, sex: '男' },
        { name: '王五', age: 24, sex: '男' },
        { name: '翠花', age: 25, sex: '女' },
        { name: '张三', age: 28, sex: '男' },
        { name: '李四', age: 38, sex: '男' }
      ]
    }
  }
}
</script>