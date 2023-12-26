<script>
import appHeader from "../components/common/appHeader.vue";
import ProductCard from "../components/common/productCard.vue";
export default {
  components: { appHeader, ProductCard },
};
</script>

<template>
  <div class="container">
    <app-header></app-header>
    <div class="row d-flex justify-content-center">
      <div class="col-lg-3 mt-5 ">
        İlgili Kategoriler
        <hr />
        <div class="brand">
          <span>Marka</span>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
        <div class="d-block">
          <p v-for="z in 5" :key="z">deneme</p>
          <hr />
        </div>
        <div class="brand">
          <span>Beden</span>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
        <div class="d-block">
          <p v-for="z in 5" :key="z">deneme</p>
          <hr />
        </div>
        <div class="brand">
          <span>Cinsiyet</span>
        </div>
        <div v-for="y in 3" :key="y" class="form-check">
          <input 
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
      </div>
      <div class="col-lg-9 row">
        <div v-for="i in 20" :key="i" class="col-lg-4  mb-4 mt-5">
          <router-link class="products" :to="{name: 'ProductDetail'}">
            <product-card></product-card>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products{
  text-decoration: none;
}
</style>
