<template>
  <div class="home-container">
    <HomeHeader></HomeHeader>
    <div class="home-content">
      <Introduce></Introduce>
      <List :listData="userList"></List>
    </div>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from './Header';
import HomeFooter from './Footer';
import { userList } from '@/configs/localData';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeFooter,
    Introduce: () => import('@/components/Introduce'),
    List: () => import('./List')
  },
  data() {
    return {
      userList
    };
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  .home-content {
    margin: {
      top: 100px;
      bottom: 100px;
    }
  }
}
</style>
