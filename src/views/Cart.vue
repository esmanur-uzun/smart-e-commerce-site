<script>
import appHeader from '../components/common/appHeader.vue'
export default{
  components: { appHeader },}
</script>

<template>
    <div>
        <div class="container">
            <app-header></app-header>
            <div class="row d-flex justify-content-center">
                <div class="col-lg-7 s">deneme</div>
                <div class="col-lg-3 d">deneme</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.s{
    height: 30px;
    background-color: red;
}
.d{
    height: 30px;
    background-color: blue;
}
</style>