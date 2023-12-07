<script>
import appHeader from "../components/common/appHeader.vue";
import ProductCard from "../components/common/productCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import ProductSlider from "../components/common/productSlider.vue";
import AppFooter from '../components/common/appFooter.vue';
export default {
  components: {
    Swiper,
    SwiperSlide,
    appHeader,
    ProductCard,
    ProductSlider,
    AppFooter,
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
      <div class="container-fluid">
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
        <!-- <button class="swiper-buttons-next" @click="swiper.slideNext()">Slide to the next slide</button> -->
        <span><h2>Aradığın Markalar</h2></span>
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :navigation="true"
          :breakpoints="{
            '@0.00': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 7,
              spaceBetween: 50,
            },
          }"
          :modules="modules"
          class="mySwiper mt-3"
        >
          <swiper-slide v-for="i in 10" :key="i">
            <div class="brand-box">
              <img src="../assets/medias/photos/format_webp.jfif" alt="" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="container-fluid mt-5 mb-5">
        <div class="background">
          <img
            src="../assets/medias/photos/amy-shamblen-F52I5BtDuhY-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="container mt-5">
        <span class="d-flex align-items-center">
          <h2>Premium Fırsatları</h2>
          <a class="ps-3 see-more" href="">
            Tümü
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="10"
              width="10"
              viewBox="0 0 320 512"
            >
              <path
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </a>
        </span>
        <product-slider></product-slider>
      </div>
      <div class="container m_100">
        <span>
          <h2>Akıllı Telefon</h2>
          <a class="ps-3 see-more" href="">
            Tümü
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="10"
              width="10"
              viewBox="0 0 320 512"
            >
              <path
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </a>
        </span>
        <product-slider></product-slider>
      </div>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$text-color: #403d39;
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
.brands {
  .brand-box {
    width: 120px;
    height: 60px;
    border: 1px solid rgb(199, 199, 199);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.background {
  width: 100%;
  height: 120px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
h2 {
  color: $text-color;
  font-weight: bold;
  
}
.see-more{
  text-decoration: none;
  color: #f48c06;
  svg{
    fill: #ff6700;
  }
}
.m_100{
  margin-top: 100px;
}
</style>
