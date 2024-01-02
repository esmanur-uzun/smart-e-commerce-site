<script>
import SallerProduct from './SallerProduct.vue'
export default{
  components: { SallerProduct },}
</script>

<template>
    <div class="container">
        <div class="row">
            <div v-for="x in 10 " :key="x" class="col-lg-6 mb-4">
            <saller-product></saller-product>
        </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>