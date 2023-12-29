<script>
export default {};
</script>

<template>
  <div>
    <a
      class="btn bar-btn"
      data-bs-toggle="offcanvas"
      href="#offcanvasExample"
      role="button"
      aria-controls="offcanvasExample"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="22"
        width="20"
        viewBox="0 0 448 512"
      >
        <path
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </a>

    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">SmartShop</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
         <ul>
          <li>Profil</li>
          <li>Ürünler</li>
          <li>Ürün Ekle</li>
         </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$tema-color : #212529;
$font-color:#e9ecef;
$font: "Abril Fatface";

* {
  box-sizing: border-box;
}
.bar-btn {
  background-color:$tema-color ;
  svg {
    fill:$font-color;
  }
}
.offcanvas-title{
  font-family: $font;
  font-size: 2em;
  color: $tema-color;
}
.offcanvas-body{
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
    li{
      padding-top: 10px;
      font-size: 18px;
      border-bottom: 1px solid $font-color;
      padding-bottom: 10px;
      &:hover{
        color: $font-color;
        background-color: $tema-color;
      }
    }
  }
}
</style>
