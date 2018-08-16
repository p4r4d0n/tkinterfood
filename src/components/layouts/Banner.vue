<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 col-lg-12 banner-component clear-gap text-center">
        <div class="banner-text-compoenent">
          <h1 v-if="image" class="banner-title">{{title}}</h1>
          <h3 v-if="image" class="banner-subtitle">{{subtitle}}</h3>
        </div>
        <carousel v-if="image" :perPage="1" :perPageCustom="[[480, 1],[768, 1],[992, 1],[1200, 1]]"
                  :paginationEnabled="true" :autoplay="true">
          <slide v-for="banner in banners" :key="banner.image">
            <!--<img :src="banner" class="banner-filter banner-image">-->
            <div class="banner-filter banner-image" :style="{ 'background-image': 'url(' + banner + ')' }"></div>
          </slide>
        </carousel>
        <div v-else class="header">
          <div class="container">
            <h1 align="center">{{pageTitle}}</h1>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import banner from '../../api/banner';
  import {Carousel, Slide} from 'vue-carousel';

  export default {
    name: 'banner-component',
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        title: 'T.K. INTERFOOD',
        subtitle: 'วัตถุดิบอาหารญี่ปุ่น นำเข้า ส่งไว ทันใจคุณ',
        banners: [
          '/static/banner/1.jpg',
          '/static/banner/2.jpg',
          '/static/banner/3.jpg',
          '/static/banner/4.jpg',
          '/static/banner/5.jpg',
          '/static/banner/6.jpg',
          '/static/banner/7.jpg'
        ],
        currentPage: this.$route.name
      };
    },
    props: ['pageTitle', 'image'],
    computed: {},
    methods: {
      bannerData() {
        banner.get().then(res => {
          this.banners = res.data.banners;
        });
      },
    },
    created() {
      window.scrollTo(0, 0);
    },
    mounted() {
      this.bannerData();
    },
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Volkhov');

  .header {
    background: #F44336;
    margin-bottom: 20px;
  }

  .banner-filter {
    filter: opacity(90%) grayscale(20%);
  }

  .banner-component {
    color: #FAFAFA;
  }

  .clear-gap {
    padding-right: 0;
    padding-left: 0;
  }

  .banner-title {
    font-family: 'Volkhov', serif;
    color: #FAFAFA;
    font-weight: bolder;
    text-shadow: 1px 1px 8px #424242;
  }

  @media only screen and (min-width: 768px) {
    .banner-image {
      height: 500px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .banner-title {
      font-size: 100px;
    }

    .banner-text-compoenent {
      z-index: 99;
      position: absolute;
      top: 30%;
      left: 0;
      right: 0;
      color: #FAFAFA;
      text-shadow: 1px 1px 8px #424242;
    }
  }

  @media only screen and (max-width: 768px) {
    .banner-image {
      height: 550px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .banner-text-compoenent {
      z-index: 99;
      position: absolute;
      top: 40%;
      left: 0;
      right: 0;
      color: #FAFAFA;
      text-shadow: 1px 1px 8px #424242;
    }

    .banner-subtitle {
      display: none;
      position: absolute;
      visibility: hidden;
    }
  }

  video::-webkit-media-controls-panel {
    display: none !important;
    -webkit-appearance: none;
  }

  video::--webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
  }

  video::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
  }
</style>
