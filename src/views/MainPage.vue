<script>
import appHeader from "../components/common/appHeader.vue";
import ProductCard from "../components/common/productCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
    appHeader,
    ProductCard,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
<template>
  <div>
    <app-header></app-header>
    <div class="main-container">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-5">
            <div class="d-discount">
              <div class="t-container">
                <h3>
                  günün fırsatı
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"
                    />
                  </svg>
                </h3>
                <div class="timer text-center">deneme</div>
              </div>
              <div class="d-flex justify-content-center">
                <img src="../assets/medias/photos/1_org_zoom (1).webp" alt="" />
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="w-discount">
              <div class="t-container">
                <h3>
                  haftanın fırsatı
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"
                    />
                  </svg>
                </h3>
                <div class="timer text-center">deneme</div>
              </div>
              <div class="d-flex justify-content-center">
                <img src="../assets/medias/photos/1_org_zoom (1).webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="brands container mt-5">
        <swiper
          ref="{swiperRef}"
          :slidesPerView="4"
          :spaceBetween="20"
          :navigation="true"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="index in 10" :key="index">
            <product-card></product-card>
          </swiper-slide>
          
        </swiper>

        <!-- <swiper-container class="mySwiper text-center" navigation="true">
          <swiper-slide>
            <product-card></product-card>
          </swiper-slide>
          <swiper-slide>
            <product-card></product-card>
          </swiper-slide>
          <swiper-slide>
            <product-card></product-card>
          </swiper-slide>
          <swiper-slide>
            <product-card></product-card>
          </swiper-slide>
          <swiper-slide>
            <product-card></product-card>
          </swiper-slide>
          <swiper-slide>
            <product-card></product-card>
          </swiper-slide>
        </swiper-container> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.d-discount {
  height: 60vh;
  background-image: linear-gradient(to bottom right, #ff0000, #ff6700, #f48c06);
  margin-top: 100px;
  .t-container {
    h3 {
      text-transform: uppercase;
      color: #fff;
      text-align: center;
      svg {
        fill: #fff;
      }
    }
  }
  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
}

.w-discount {
  height: 60vh;
  background-image: linear-gradient(to bottom right, #0a2472, #6930c3, #5e60ce);
  margin-top: 100px;
  .t-container {
    h3 {
      text-transform: uppercase;
      color: #fff;
      text-align: center;
      svg {
        fill: #fff;
      }
    }
  }
  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
}
</style>
