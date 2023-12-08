<script>
import appHeader from "../components/common/appHeader.vue";
export default {
  components: { appHeader },
};
</script>
<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row d-flex justify-content-center ">
        <div class="col-lg-5">
          <div class="form-box">
            <div class="button-box">
              <div id="btn"></div>
              <button class="toggle-btn btn"> Giriş Yap</button>
              <button class="toggle-btn btn"> Kayıt Ol</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.form-box{
  height: 60vh;
  border: 1px solid gray;
  margin-top: 15%;
  position: relative;
  .button-box{
    display: flex;
    justify-content: space-between;
    width: 220px;
    margin: 35px auto;
    position: relative;
    box-shadow: 0 0 20px 9px #ff61241f;
    border-radius: 30px;
    .toggle-btn{
      position: relative;
      text-align: center;
    }
    #btn{
      top: 0;
      left: 0;
      position: absolute;
      width: 110px;
      height: 100%;
      background-color: red;
      border-radius: 30px;
    }
  }
}
</style>
