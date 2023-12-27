<script>
import AppFooter from '../components/common/appFooter.vue';
import appHeader from "../components/common/appHeader.vue";
import ProductCard from "../components/common/productCard.vue";
export default {
  components: { appHeader, ProductCard, AppFooter },
};
</script>

<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row d-flex justify-content-center mt-4">
        <div class="col-lg-10 row d-flex">
          <div class="img-box col-lg-6">
            <img
              src="../assets/medias/photos/1_org_zoom (1).webp"
              class="img-fluid"
              alt="..."
            />
          </div>
          <div class="feature col-lg-6 d-flex align-items-center ms-4">
            <div>
              <div class="product-price">
                <h4>Samsung Tablet</h4>
                <span>279 TL</span>
                <hr />
              </div>
              <div class="detail">
                <div class="mt-4">
                  <div>Renk</div>
                  <div class="d-flex">
                    <div class="me-2" v-for="x in 3" :key="x">
                      <input
                        type="checkbox"
                        class="btn-check"
                        id="btn-check-5"
                        checked
                        autocomplete="off"
                      />
                      <label class="btn btn-danger" for="btn-check-5"></label>
                    </div>
                  </div>
                </div>
                <div class="mt-4">
                  <div>Beden</div>
                  <div class="d-flex">
                    <div class="me-2" v-for="x in 3" :key="x">
                      <input
                        type="checkbox"
                        class="btn-check"
                        id="btn-check-5"
                        checked
                        autocomplete="off"
                      />
                      <label class="btn btn-danger" for="btn-check-5"></label>
                    </div>
                  </div>
                </div>
                <button class="btn add-cart">Sepete Ekle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <h1 class="text-center mt-5 pt-5">En Yeniler</h1>
          <div v-for="i in 20" :key="i" class="col-lg-3 mb-4 mt-5">
            <router-link class="products" :to="{ name: 'ProductDetail' }">
              <product-card></product-card>
            </router-link>
          </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<style lang="scss" scoped>
.img-box {
  border: 1px solid rgb(210, 210, 210);
  border-radius: 10px;
  width: 400px;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}
.product-price {
  span {
    font-weight: bold;
    color: #ffb703;
    font-size: 25px;
  }
  hr {
    width: 300px;
  }
}

.detail {
  .add-cart {
    background-color: #ffb703;
    width: 100%;
    margin-top: 100px;
  }
}
.products{
    text-decoration: none;
}
</style>
