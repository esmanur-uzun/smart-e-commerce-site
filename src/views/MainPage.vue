<script>
import appHeader from "../components/common/appHeader.vue";
import ProductCard from "../components/common/productCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ProductSlider from "../components/common/productSlider.vue";
import AppFooter from "../components/common/appFooter.vue";
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
      modules: [Pagination, Navigation, Autoplay],
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
          <div class="main-slider">
            <swiper
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              class="mySwiper"
            >
              <swiper-slide>
                <img src="../assets/medias/photos/mainslider5.webp" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="../assets/medias/photos/mainslider6.webp"
                  alt=""
                /> </swiper-slide
              ><swiper-slide>
                <img src="../assets/medias/photos/mainslider7.webp" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="../assets/medias/photos/mainslider3.webp"
                  alt="" /></swiper-slide
              ><swiper-slide>
                <img src="../assets/medias/photos/mainslider4.webp" alt="" />
              </swiper-slide>
            </swiper>
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
          <h2>En Yeniler</h2>
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
        <span class="d-flex align-items-center">
          <h2>Çok Satanlar</h2>
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
        <div class="row advert">
          <div class=" col-lg-10  d-flex justify-content-end align-items-center">
            <a href="">Ürünleri Gör</a>
          </div>
        </div>
      </div>
      <div class="container m_100">
        <span class="d-flex align-items-center">
          <h2>Günlük İhtiyaçlarda Çok Satanlar</h2>
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
        <div class="row advert advert-1">
          <div class=" col-lg-10  d-flex justify-content-end align-items-center">
            <a href="">Ürünleri Gör</a>
          </div>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$text-color: #403d39;
.main-slider {
  height: 80vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
.see-more {
  text-decoration: none;
  color: #f48c06;
  svg {
    fill: #ff6700;
  }
}
.m_100 {
  margin-top: 100px;
}
.advert {
  height: 70vh;
  background-image: url("../assets/medias/photos/newphoto.webp");
  background-position: center;
  background-repeat: no-repeat;
  a{
    padding: 30px 50px;
    background: #f48c06;
    text-decoration: none;
    color: #fff;
    border-radius: 20px;
    font-size: 1.5em;
    
    &:hover{
      background: #fff;
      color: #f48c06;
      border: 1px solid #f48c06;
    }
  }
}
.advert-1{
  background-image: url("../assets/medias/photos/32952191117865301050.webp");
}
</style>
