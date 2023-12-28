<script>
import AppFooter from "../components/common/appFooter.vue";
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
      <div class="row d-flex justify-content-center">
        <div
          class="col-lg-10 d-flex align-items-center justify-content-around pt-4 pb-4 order-box"
        >
          <div class="d-flex">
            <div class="order-img">
              <img
                src="../assets/medias/photos/1_org_zoom (1).webp"
                class="img-thumbnail"
                alt="..."
              />
            </div>
            <p class="col-lg-5 ps-3 explanation">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div class="counter d-flex">
            <button class="btn counter-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                />
              </svg>
            </button>
            <div class="number d-flex align-items-center">1</div>
            <button class="btn counter-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path
                  d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </button>
          </div>
          <div class="price">269 TL</div>
          <button class="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="16"
              viewBox="0 0 448 512"
            >
              <path
                d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"
              />
            </svg>
          </button>
        </div>
        <div class="col-lg-2 cart-check">
          <div class="order-s">
            <h5>Sipariş Özeti</h5>
            <ul>
              <li>
                <span>Ürünün Toplamı:</span>
                <span>269 TL</span>
              </li>
              <li>
                <span>Kargo Toplam:</span>
                <span>29 TL</span>
                <hr />
              </li>
              <li>
                <span>Toplam:</span>
                <span>298 TL</span>
              </li>
            </ul>
          </div>
          <router-link :to="{ name: 'PayAccount' }">
            <button type="button" class="btn cart-check-btn btn-lg">
              Sepeti Onayla
            </button>
          </router-link>
        </div>
      </div>
      <div class="mt-5 row">
        <h3>Çok Satanlar</h3>
        <div v-for="i in 10" :key="i" class="col-lg-3 mb-4 mt-5">
          <product-card></product-card>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<style lang="scss" scoped>
.order-box {
  border: 1px solid rgb(172, 172, 172);
  border-radius: 10px;
  margin-top: 20px;
  .order-img {
    width: 200px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .explanation {
    display: flex;
    align-items: center;
  }
  .counter {
    .counter-btn {
      border: 1px solid #ffb703;
    }
    .number {
      padding: 10px;
    }
  }
  .price {
    font-weight: bold;
    color: #ffb703;
    font-size: 20px;
  }
}

.cart-check {
  margin-top: 20px;
  .order-s {
    padding-left: 10px;
    ul {
      list-style: none;
      padding: 0;
      li {
        span:nth-child(2) {
          font-weight: bold;
          padding-left: 20px;
        }
        &:nth-child(3) {
          span:nth-child(2) {
            color: #ffb703;
          }
        }
      }
    }
  }
  .cart-check-btn {
    width: 100%;
    margin-top: 50px;
    background-color: #ffb703;
    color: #fff;
  }
}
</style>
