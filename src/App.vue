<script>
import AppFooter from './components/common/appFooter.vue'
import appHeader from "./components/common/appHeader.vue"
import ProductCard from './components/common/productCard.vue'
import MainPage from './views/MainPage.vue'
export default{
    components: { appHeader, AppFooter, MainPage, ProductCard }

}

</script>

<template>
  <div>
    <!-- <app-header></app-header>
    <app-footer></app-footer> -->
    <main-page></main-page>
    <!-- <product-card></product-card> -->
  </div>
</template>

<style scoped>

</style>
