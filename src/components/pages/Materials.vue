<template>
  <div>
    <banner-component page-title="Products"></banner-component>
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-lg-3">
            <div class="panel panel-default border-less">
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-12 col-lg-12">
                    <div class="form-group">
                      <h4>ประเภทสินค้า</h4>
                      <ul class="list-group categories-list">
                        <li class="list-group-item" v-for="category in categories" :key="category.id" v-bind:class="{ active: category.active }" v-on:click="productsPage(category.id)">
                            <b>{{category.title}}</b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-9 col-lg-9">
            <div class="panel panel-default border-less">
              <div class="panel-body">
                <h4>{{ category_name }}</h4>
                <div class="row">
                  <div class="col-md-12 col-lg-12" v-if="products.length === 0">
                    <loading-component></loading-component>
                  </div>
                  <div class="col-md-4 col-lg-4" v-for="product in products" v-bind:key="product.id">
                    <div class="thumbnail" v-on:click="productDetail(product.id)">
                      <img :src="product.image" class="img-responsive product-image" style="width: 100%; height: 150px"
                           alt="Responsive image">
                      <b class="caption">{{ product.title }}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import BannerComponent from "../layouts/Banner";
import category from "../../api/category";
import product from "../../api/product";
import LoadingComponent from "../layouts/Loading.vue";

export default {
  components: {
    LoadingComponent,
    BannerComponent,
    Carousel,
    Slide
  },
  name: "",
  data() {
    return {
      products: [],
      categories: [
        {
          id: 0,
          title: "วัตถุดิบยอดนิยม",
          active: true
        },
        {
          id: 1,
          title: "Frozen Food",
          active: false
        },
        {
          id: 2,
          title: "Japanese Food",
          active: false
        },
        {
          id: 3,
          title: "Sea Food",
          active: false
        },
        {
          id: 4,
          title: "Fried",
          active: false
        },
        {
          id: 5,
          title: "Dry & Ingredients",
          active: false
        },
        {
          id: 6,
          title: "Beverage",
          active: false
        }
      ],
      category: 0,
      category_name: "",
      sort: 1
    };
  },
  methods: {
    productsPage(id) {
      this.$router.push({
        name: "Materials",
        params: { id }
      });
      this.productList(id);
    },
    productList(id) {
      this.categories[0].active = false;
      this.categories[1].active = false;
      this.categories[2].active = false;
      this.categories[3].active = false;
      this.categories[4].active = false;
      this.categories[5].active = false;
      this.categories[6].active = false;

      this.categories[id].active = true;
      this.category_name = this.categories[id].title;

      product.list(id).then(res => {
        let data = res.data.products;
        this.products = data;
      });
    },
    productDetail(id) {
      this.$router.push({ name: "Material Detail", params: { id } });
    },
    categoryList() {
      category.list().then(res => {
        let data = res.data.categories;
        this.categories = data;
      });
    }
  },
  created() {
    window.scrollTo(0, 0);
    this.productList(this.$route.params.id);
  }
};
</script>

<style scoped>
.categories-list {
  margin-top: 20px;
}

.categories-list li:hover {
  background: #f44336;
  color: #fafafa;
  cursor: pointer;
}

.categories-list li.active {
  background: #f44336;
  color: #fafafa;
  border-color: #f44336;
}

.thumbnail {
  /*padding: 0;*/
  cursor: pointer;
  border-radius: 0;
  margin-bottom: 20px;
  /*padding-bottom: 100px;*/
}

.product-image {
  margin-bottom: 10px;
}

.thumbnail img {
  max-width: 100%;
  max-height: 100%;
}

.thumbnail:hover {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
}

.border-less {
  border-radius: 0;
}
</style>
