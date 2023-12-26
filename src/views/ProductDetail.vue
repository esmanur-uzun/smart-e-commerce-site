<script>
import appHeader from '../components/common/appHeader.vue'
export default{
  components: { appHeader },}
</script>

<template>
    <div>
        <app-header></app-header>
        <div class="container">
            <div class="row d-flex justify-content-center mt-4">
                <div class="col-lg-10 d"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.d{
    height: 30px;
    background-color: red;
}
</style>