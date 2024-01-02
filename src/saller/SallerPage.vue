<script>
import SallerInfo from "./SallerInfo.vue";
import SideBar from "./SideBar.vue";
export default {
  components: { SideBar, SallerInfo },
};
</script>

<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar -->
        <div
          class="container-fluid menu-line d-flex flex-column justify-content-between align-items-center col-lg-2 bg-light"
        >
          <side-bar class="pt-2 pb-2"></side-bar>
        </div>

        <!-- Main Content -->
        <div class="col-lg-10 mt-3">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <router-view></router-view>
            </div>
          </div>
        </div>

        <!-- User Name -->
        <div
          class="container-fluid menu-line d-flex justify-content-end align-items-center col-lg-2 bg-light position-fixed top-0 end-0"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="16"
              viewBox="0 0 448 512"
              class="me-1"
            >
              <path
                d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
              ></path>
            </svg>
            User Name
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$tema-color: #212529;
$font-color: #e9ecef;
$font: "Abril Fatface";
.menu-line {
  width: 100%;
  height: 10%;
  background-color: $font-color;
  span {
    font-weight: bold;
    color: $tema-color;
  }
}
</style>
