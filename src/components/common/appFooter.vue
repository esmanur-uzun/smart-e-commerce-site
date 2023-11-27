<script></script>
<template>
  <div class="container-fluid footer-area ">
    <div class="container ">
      <div class="row">
        <div class="col-lg-4">
          <div class="logo-container d-flex align-items-center col-lg-3">
            <span class="logo">Smart</span>
            <span class="logo">Shop</span>
          </div>
        </div>
        <div class="col-lg-4 d-flex justify-content-end align-items-center">
            <div>
                <h5>Yardım</h5>
                <ul>
                    <li>
                        <a href="">Sıkça Sorulan Sorular</a>
                        <a href="">Nasıl İade Edebilirim</a>
                        <a href="">Canlı Destek</a>
                        <a href="">İletişim</a>
                    </li>
                </ul>
            </div>
            
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$brand-color: #ffb703;
$brand-color2: #1e6091;
$btn-color: #2a9d8f;
$brand-font: "Abril Fatface";

.footer-area {
  margin-top: 100px;
  height: 50vh;
  background-color: $btn-color;
  color: #fff;
    .logo-container {
        font-size: 2.5em;
        .logo:nth-child(1) {
            color: $brand-color;
            font-family: $brand-font;
        }
        .logo:nth-child(2) {
            color: $brand-color2;
            font-family: $brand-font;
        }
    }
}
</style>
