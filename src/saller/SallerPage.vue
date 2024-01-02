<script>
import ProductCard from '../components/common/productCard.vue';
import Products from './Products.vue';
import SallerInfo from "./SallerInfo.vue";
import SallerProduct from './SallerProduct.vue';
import SideBar from "./SideBar.vue";
export default {
  components: { SideBar, SallerInfo, ProductCard, SallerProduct, Products },
};
</script>

<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar -->
        <div
          class="container-fluid  d-flex flex-column justify-content-between align-items-center col-lg-2"
        >
          <side-bar class="pt-2 pb-2"></side-bar>
        </div>

        <!-- Main Content -->
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-10 offset-lg-2">
             <products></products>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$tema-color: #212529;
$font-color: #e9ecef;
$font: "Abril Fatface";

</style>
