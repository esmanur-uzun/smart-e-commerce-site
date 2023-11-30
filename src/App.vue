<script>
import AppFooter from './components/common/appFooter.vue'
import appHeader from "./components/common/appHeader.vue"
import MainPage from './views/MainPage.vue'
export default{
    components: { appHeader, AppFooter, MainPage }

}

</script>

<template>
  <div>
    <!-- <app-header></app-header>
    <app-footer></app-footer> -->
    <main-page></main-page>
  </div>
</template>

<style scoped>

</style>
