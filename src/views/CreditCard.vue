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
          <router-link
            :to="{ name: 'PayAccount' }"
            class="text-decoration-none btn btn-address"
          >
            <span>Adres Bilgileri</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </router-link>
        </div>
        <div class="col-lg-4 col-md-4 col-3">
          <router-link
            :to="{ name: 'CreditCard' }"
            class="btn text-decoration-none btn-pay"
          >
            <span>Ödeme Seçenekleri</span>
            <p>
              Banka veya Kredi Kartı kullanarak ödemenizi güvenle
              yapabilirsiniz.
            </p>
          </router-link>
        </div>
      </div>
      <div class="row d-flex justify-content-center mt-5">
        <div class="col-lg-5 credit-card">
          <form class="row">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Kart Numarası</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div>
              <span>Son Kullanma Tarihi</span>
              <div class="row">
                <div class="col-md-3">
                  <select id="inputState" class="form-select">
                    <option selected>Ay</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <select id="inputState2" class="form-select">
                    <option selected>Yıl</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-lg-2 mt-3">
              <label for="exampleFormControlInput2">CVV</label>
              <div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput2"
                />
              </div>
            </div>
            <button class="btn submit-btn mt-4">Ödeme Yap</button>
          </form>
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
  border: 2px solid rgb(183, 183, 183);
  text-align: left;
  span {
    font-size: 20px;
    color: rgb(183, 183, 183);
    font-weight: bold;
    padding-bottom: 10px;
  }
}
.btn-pay {
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
.credit-card {
  padding: 20px;
  background-color: rgba(210, 210, 210, 0.842);
  border-radius: 5px;
  .submit-btn {
    background-color: $brand-color;
  }
}
</style>
