<template>
  <div class="home">
    <List :listData="userList"></List>
  </div>
</template>

<script>
import List from './List';
import { userList } from '@/config/localData';

export default {
  name: 'Home',
  components: {
    List
  },
  data() {
    return {
      userList
    };
  }
};
</script>
