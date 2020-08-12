<template>
  <div id="app" class="app">
    <page-header />
    <nav-menu />
    <router-view />
    <page-footer class="footer" />
  </div>
</template>

<script>
import PageHeader from 'components/Header';
import PageFooter from 'components/Footer';
import NavMenu from 'components/Nav';

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    NavMenu
  }
}
</script>

<style lang="scss">
  .app{
    padding-bottom: 140px;
    .footer{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  }
  
</style>
