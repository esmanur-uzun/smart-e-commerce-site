<script>
export default{

}
</script>

<template>
  <div>
    <div class="card m-auto" style="width: 18rem" >
      <div class="d-flex justify-content-center">
        <img src="../../assets/medias/photos/1_org_zoom (1).webp" class="card-img-top product-img" alt="..." />
      </div>
      <div class="card-body text-start">
        <p class="card-text ">
          <span class="product-brand">Samsung</span>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <span class="price">209,99 tl</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$brand-color: #ffb703;
$brand-color2: #1e6091;
.price{
  color: $brand-color;
  font-weight: 700;
  text-transform: uppercase;
}
.product-brand{
  color: $brand-color2;
  font-weight:700 ;
}
.product-img{
  max-width: 60%;
  max-height: 60%;
  object-fit: cover;
}
</style>
