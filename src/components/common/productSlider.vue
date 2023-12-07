<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import ProductCard from './productCard.vue';
export default {
    components: {
    Swiper,
    SwiperSlide,
    ProductCard
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
    <swiper
      ref="{swiperRef}"
      :slidesPerView="1"
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
          slidesPerView: 4,
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
  </div>
</template>
