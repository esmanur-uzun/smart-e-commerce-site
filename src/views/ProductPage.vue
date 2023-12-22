<script>
import appHeader from '../components/common/appHeader.vue'
import ProductCard from '../components/common/productCard.vue'
export default{
  components: { appHeader, ProductCard },
 }
</script>

<template>
    <div class="container">
        <app-header></app-header>
        <div class="row d-flex justify-content-center">
            <div class="col-lg-3 mt-5 d">deneme</div>
            <div class="col-lg-9 row">
                <div v-for="i in 20 " :key="i" class="col-lg-4 mb-4 mt-5 ">
                    <product-card></product-card>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.d{
    height: 30px;
    background-color: red;
}
.s{
    height: 30px;
    background-color: blue;
}
</style>