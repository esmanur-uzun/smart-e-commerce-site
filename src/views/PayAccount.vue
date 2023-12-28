<script>
import appFooter from "../components/common/appFooter.vue";
export default {
  components: { appFooter },
};
</script>

<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="logo-container d-flex align-items-center col-lg-3">
          <router-link class="text-decoration-none" :to="{ name: 'MainPage' }">
            <span class="logo">Smart</span>
            <span class="logo">Shop</span>
          </router-link>
        </div>
        <div class="t-info">
          <span>Güvenli Ödeme</span>
        </div>
      </div>
      <div class="row d-flex justify-content-center mt-5">
        <div class="col-lg-4 col-md-4 col-3">
          <router-link :to="{name:'PayAccount'}" class="text-decoration-none btn btn-address">
            <span>Adres Bilgileri</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </router-link>
        </div>
        <div class="col-lg-4 col-md-4 col-3">
          <router-link :to="{name:'CreditCard'}" class="btn text-decoration-none btn-pay">
            <span>Ödeme Seçenekleri</span>
            <p>
              Banka veya Kredi Kartı kullanarak ödemenizi güvenle
              yapabilirsiniz.
            </p>
          </router-link>
        </div>
      </div>
      <div class="row d-flex justify-content-around mt-3">
        <div class="col-lg-8 adress d-flex justify-content-center row">
          <div class="col-lg-5 d-flex align-items-center">
            <button class="btn add-adress">
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
              <div>Yeni Adres Ekle</div>
            </button>
          </div>
          <div class="col-lg-5 d-flex align-items-center">
            <div class="form-check current-adress">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                  />
                </svg>
                <span>Esma Nur Uzun</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </label>
            </div>
          </div>
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
          <router-link :to="{ name: 'CreditCard' }">
            <button type="button" class="btn cart-check-btn btn-lg">
              Sepeti Onayla
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<style lang="scss" scoped>
$brand-color: #ffb703;
$brand-color2: #1e6091;
$brand-font: "Abril Fatface";
.logo-container {
  font-size: 3em;
  padding-top: 20px;
  .logo:nth-child(1) {
    color: $brand-color;
    font-family: $brand-font;
  }
  .logo:nth-child(2) {
    color: $brand-color2;
    font-family: $brand-font;
  }
}
.t-info {
  padding-top: 25px;

  span {
    border-left: 1px solid gray;
    font-size: 1.5em !important;
    color: gray;
    padding-left: 5px;
  }
}
.btn-address {
  width: 100%;
  border: 2px solid $brand-color;
  text-align: left;
  span {
    font-size: 20px;
    color: $brand-color;
    font-weight: bold;
    padding-bottom: 10px;
  }
}
.btn-pay {
  width: 100%;
  border: 2px solid rgb(183, 183, 183);
  text-align: left;
  span {
    font-size: 20px;
    color: rgb(183, 183, 183);
    font-weight: bold;
    padding-bottom: 10px;
  }
}
.adress {
  border: 1px solid rgb(183, 183, 183);
  .add-adress {
    width: 100%;
    padding: 10px;
    border: 1px solid $brand-color;
    svg {
      fill: $brand-color;
    }
  }
}
.current-adress {
  margin: 20px;
  padding: 20px;
  width: 100%;
  border-radius: 5px;
  svg {
    fill: $brand-color;
  }
  span {
    padding-left: 5px;
    font-size: 12px;
  }
  p {
    font-size: 13px;
    font-weight: bold;
  }
}
.cart-check {
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
