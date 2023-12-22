<script>
import AppFooter from '../components/common/appFooter.vue';
import appHeader from "../components/common/appHeader.vue";
import Register from "./Register.vue";
export default {
  components: { appHeader, Register, AppFooter },
};
</script>
<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="login col-lg-4 col-md-4">
          <div class="form-box row">
            <div class="button-box">
              <div id="btn"></div>
              <router-link id="btn-login" class="toggle-link" :to="{ name: 'Login' }">
                Giriş Yap
              </router-link>
              <router-link id="btn-register" class="toggle-link" :to="{ name: 'Register' }">
                Kayıt Ol
              </router-link>
            </div>
            <form action="" class="login inputs">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">E-posta</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Şifre</label>
              </div>
              <div class="d-flex justify-content-end mt-2">
                <a href="">Şifremi Unuttum</a>
              </div>
              <button type="submit" class="btn login-btn mt-2">
                Giriş Yap
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<style lang="scss" scoped>
.form-box {
  height: 70vh;
  border: 1px solid gray;
  margin-top: 15%;
  position: relative;
  .button-box {
    display: flex;
    justify-content: space-between;
    width: 220px;
    height: 50px !important;
    margin: 35px auto;
    position: relative;
    box-shadow: 0 0 20px 9px #ff61241f;
    border-radius: 30px;

    #btn {
      top: 0;
      left: 0;
      position: absolute;
      width: 110px;
      height: 100%;
      background-color: #ff6700;
      border-radius: 30px;
    }
    .inputs {
      position: absolute;
    }
  }
}
.login-btn {
  width: 100%;
  background-color: #ff6700;
}
.toggle-link {
  color: black;
  position: relative;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register {
  margin-left: 450px;
}
</style>
