<script>
export default {};
</script>

<template>
  <div class="container mt-5">
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="firstName">İsim</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="İsim"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="lastName">Soyisim</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Soyisim"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="email">E-Posta Adresi</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="E-Posta"
        />
      </div>
      <div class="form-group">
        <label for="phone">Telefon Numarası</label>
        <input
          type="tel"
          class="form-control"
          id="phone"
          placeholder="Telefon"
        />
      </div>
      <div class="form-group">
        <label for="productInfo">Toplam Ürün Bilgisi</label>
        <textarea
          class="form-control"
          id="productInfo"
          rows="3"
          placeholder="Ürün Bilgisi"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Formu Gönder</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>

</style>
