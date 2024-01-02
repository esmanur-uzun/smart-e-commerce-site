<script>
export default {};
</script>

<template>
  <div>
    <div class="container">
      <div class="image-container">
        <img
          src="../assets/medias/photos/1_org_zoom (1).webp"
          alt="Ürün Resmi"
        />
      </div>
      <div class="product-details">
        <h5>Ürün İsmi</h5>
        <!-- Diğer ürün detayları buraya eklenebilir -->
      </div>
      <button class="delete-button btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path
            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
}

.image-container img {
  max-width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
}

.product-details {
  flex-grow: 1;
  padding: 0 20px;
}

.delete-button {
  background-color: #ff0000;
  svg{
    fill: #fff;
  }
}
</style>
