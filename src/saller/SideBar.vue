<script>
export default {};
</script>

<template>
  <div>
    <div class="container">
      <div id="sidebar" class="sidebar">
        <router-link :to="{name:'SallerInfo'}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="16"
            viewBox="0 0 448 512"
            class="me-1"
          >
            <path
              d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
            />
          </svg>
          Hesabım
        </router-link>
        <router-link :to="{name:'Products'}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="16"
            viewBox="0 0 448 512"
            class="me-1"
          >
            <path
              d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
            />
          </svg>
          Ürünlerim
        </router-link>
        <router-link :to="{name:'AddProduct'}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="16"
            viewBox="0 0 448 512"
            class="me-1"
          >
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
          Ürün Ekle
        </router-link>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="18"
            viewBox="0 0 576 512"
          >
            <path
              d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z"
            />
          </svg>
          Çıkış Yap
        </a>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$tema-color: #212529;
$font-color: #e9ecef;
$font: "Abril Fatface";

* {
  box-sizing: border-box;
}

.sidebar {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidebar a {
  padding: 8px 8px 18px 6px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
  transition: 0.3s;
  svg{
    fill: $font-color;
  }
}

.sidebar a:hover {
  color: #f1f1f1;
}

.content {
  flex-grow: 1;
  padding: 16px;
  margin-left: 200px; /* Sidebar genişliği kadar sola kaydır */
}
</style>
