<template>
  <footer class="footer-wrapper">Footer</footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss" scoped>
.footer-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  font-size: $font-size-large;
  background-color: $color-blue;
  color: $color-white;
}
</style>
