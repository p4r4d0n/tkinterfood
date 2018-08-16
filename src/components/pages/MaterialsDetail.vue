<template>
  <div class="">
    <banner-component page-title="Product Details"></banner-component>
    <div class="container" style="margin-bottom: 20px">
      <div class="page-header">
        <router-link to="/materials/0" class="btn btn-default">BACK</router-link>
        <ol class="breadcrumb pull-right">
          <li><a href="#/materials/0">Shop</a></li>
          <li class="active">{{ product.title }}</li>
        </ol>
      </div>
      <div class="row">
        <div class="col-md-3 col-ls-3">
          <h1>{{ product.title }}</h1>
          <h4>ประเภท : {{ product.category_title }}</h4>
          <h4>ขนาดบรรจุภัณฑ์ : {{ product.dimention }}</h4>
          <h4>น้ำหนักต่อหน่วย : {{ product.weight }}</h4>
        </div>
        <div class="col-md-5 col-ls-5">
          <img :src="product.image" style="width: 100%; height: auto; margin-bottom: 20px"/>
        </div>
        <div class="col-md-4 col-ls-4">
          <div class="row">
            <div class="col-md-3 col-lg-3" v-if="product.galleries.length === 0">
              <loading-component></loading-component>
            </div>
            <div v-if="product.galleries.length > 0" class="col-md-3 col-ls-3 col-xs-3 col-sm-3" v-for="gallery in product.galleries" v-bind:key="gallery">
              <a :href="gallery" data-lightbox="product"><img :src="gallery" style="width: 50px; height: 50px; cursor: pointer; margin-bottom: 20px"/></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-ls-12 col-sm-12 col-xs-12">
          <hr>
          <div v-html="product.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerComponent from '../layouts/Banner'
  import product from '../../api/product'
  import LoadingComponent from "../layouts/Loading.vue";

  export default {
    components: {
      LoadingComponent,
      BannerComponent},
    name: '',
    data() {
      return {
        product: {
          title: 'Name',
          image: '',
          dimention: '',
          weight: '',
          content: ``,
          category_title: '',
          galleries: []
        }
      }
    },
    methods: {
      productDetail() {
        product.get(this.$route.params.id).then(res => {
          let data = res.data.product
          this.product = data
        })
      },
      changeImage(filePath) {
        this.product.image = filePath
      }
    },
    mounted() {
      this.productDetail()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
