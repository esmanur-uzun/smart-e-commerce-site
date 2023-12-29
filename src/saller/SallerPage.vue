<script>
import SideBar from "./SideBar.vue";
export default {
  components: { SideBar },
};
</script>

<template>
  <div>
    <div class="container-fluid menu-line d-flex justify-content-between align-items-center">
      <side-bar class="pt-2 pb-2"></side-bar>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18"
          width="16"
          viewBox="0 0 448 512"
        >
          <path
            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
          />
        </svg>
        User Name
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$tema-color: #212529;
$font-color: #e9ecef;
$font: "Abril Fatface";
.menu-line {
  width: 100%;
  height: 15%;
  background-color: $font-color;
  span{
    font-weight: bold;
    color: $tema-color;
  }
}
</style>
