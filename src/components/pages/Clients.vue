<template>
  <div>
    <banner-component page-title="Our Client"></banner-component>
    <div class="container">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3" v-for="client in clients" :key="client.image">
          <img :src="client.image" alt="" class="img-rounded client-image" style="width: 120px; height: 120px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {Carousel, Slide} from 'vue-carousel';
  import BannerComponent from '../layouts/Banner';
  import client from '../../api/client';

  export default {
    components: {
      BannerComponent,
      Carousel,
      Slide,
    },
    name: '',
    data() {
      return {
        clients: [
          {
            id: 1,
            image: '/static/client/1.jpg'
          },
          {
            id: 2,
            image: '/static/client/2.png'
          },
          {
            id: 3,
            image: '/static/client/3.png'
          },
          {
            id: 4,
            image: '/static/client/4.png'
          },
          {
            id: 5,
            image: '/static/client/5.jpg'
          },
          {
            id: 6,
            image: '/static/client/6.png'
          },
          {
            id: 7,
            image: '/static/client/7.png'
          },
          {
            id: 8,
            image: '/static/client/8.png'
          },
          {
            id: 9,
            image: '/static/client/9.png'
          },
          {
            id: 10,
            image: '/static/client/10.png'
          },
        ]
      };
    },
    methods: {
      clientData() {
        client.list().then(res => {
          let data = res.data.clients;
          this.clients = data;
        });
      },
    },
    mounted() {
      this.clientData();
    },
    created() {
      window.scrollTo(0, 0);
    },
  };
</script>

<style scoped>
  .client-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 30px;
  }
</style>
