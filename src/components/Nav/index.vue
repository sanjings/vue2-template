<template>
  <nav class="nav-wrapper">
    <router-link to="/" class="nav-item">HOME</router-link>
    <router-link to="./about" class="nav-item">ABOUT</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 250px;
  height: 100px;
  font-size: $font-size-large;
  .router-link-exact-active.nav-item {
    color: $color-green;
  }
}
</style>
