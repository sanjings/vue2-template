<template>
  <header class="header-wrapper">Header</header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  font-size: $font-size-large;
  background-color: $color-gray;
  color: $color-white;
}
</style>
