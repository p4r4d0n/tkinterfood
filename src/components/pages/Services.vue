<template>
  <div class="service-bg">
    <banner-component page-title="Our Services"></banner-component>
    <div class="container">
      <div class="row" v-for="(service, index) in services" :key="service.id" :class="columnColor(index)"
           v-show="loading">
        <div class="col-md-6 col-lg-6">
          <figure style="padding: 20px">
            <img v-if="isEven(index)" :src="service.image" :alt="service.title"
                 class="img-rounded service-image img-center">
          </figure>
          <div v-if="isOdd(index)" class="service-content">
            <h3 class="yellow-color">
              <b>{{service.title}}</b>
            </h3>
            <div v-html="service.desc"></div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <figure style="padding: 20px">
            <img v-if="isOdd(index)" :src="service.image" :alt="service.title"
                 class="img-rounded service-image img-center">
          </figure>
          <div v-if="isEven(index)" class="service-content">
            <h3 class="yellow-color">
              <b>{{service.title}}</b>
            </h3>
            <div v-html="service.desc"></div>
          </div>
        </div>
      </div>
      <div class="row" v-for="(n, index) in 2" :key="n" :class="columnColor(index)" v-show="defaultLoading">
        <div class="col-md-6 col-lg-6">
          <figure style="padding: 20px">
            <div v-if="isEven(index)" class="img-rounded service-image img-center"
                 style="background: #F5F5F5; width: 570px; height: 360px;"></div>
          </figure>
          <div v-if="isOdd(index)" class="service-content">
            <h3 style="color: #F5F5F5;">
              <b>Service Title</b>
            </h3>
            <p>Service Description</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <figure style="padding: 20px">
            <div v-if="isOdd(index)" class="img-rounded service-image img-center"
                 style="background: #F5F5F5; width: 570px; height: 360px;"></div>
          </figure>
          <div v-if="isEven(index)" class="service-content">
            <h3 style="color: #F5F5F5;">
              <b>Service Title</b>
            </h3>
            <p>Service Description</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Carousel, Slide} from 'vue-carousel';
  import service from '../../api/service';
  import BannerComponent from '../layouts/Banner';

  export default {
    components: {
      BannerComponent,
      Carousel,
      Slide,
    },
    name: '',
    data() {
      return {
        loading: false,
        defaultLoading: true,
        services: [],
      };
    },
    methods: {
      isEven: function (n) {
        return n % 2 === 0;
      },
      isOdd: function (n) {
        return Math.abs(n % 2) === 1;
      },
      columnColor: function (n) {
        if (this.isEven(n) === true) {
          return 'white-background';
        } else if (this.isOdd(n) === true) {
          return 'white-background';
        }
      },
      serviceData() {
        service.list().then(res => {
          let data = res.data.services;
          if (data.length > 0) {
            this.services = data;
            this.loading = true;
            this.defaultLoading = false;
          } else {
            this.services = [
              {
                title: 'ได้รับการรับรองจาก มาตรฐานสากล',
                image: '/static/service/1.png',
                desc: `<p><b>รางวัลมาตรฐานคุณภาพ</b></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; วัตถุดิบอาหารญี่ปุ่นจาก บริษัท T.K. Interfood ทุกชิ้นได้ผ่านการตรวจวัดระดับมาตรฐานคุณภาพอย่างมีระดับ เช่น ISO 9001, HACCP, GMP, Halal จึงมั่นใจได้ว่าสินค้าทุกชิ้น รถซาติอร่อย และมีคุณภาพตามมาตรฐานสากล</p><p><b><br></b></p><p><b>Quality Standard Award</b></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;All of the food ingredients of T.K. Interfood have been tested and certified by ISO 9001, HACCP, GMP and Halal standards.</p><p><b><br></b></p>`,
              },
              {
                title: 'บริการ จัดส่งรวดเร็ว',
                image: '/static/service/2.jpg',
                desc: `<p><b>บริการจัดส่ง ฉับไว ทันใจคุณ</b></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; ด้วยการบริหารจัดการคลังสินค้าวัตถุดิบอย่างยอดเยี่ยม เราจึงให้ความสำคัญกับบริการจัดส่งสินค้า ให้ถึงมือพาร์ทเนอร์ได้ตรงเวลานอกจากนี้เรายังมีบริการรถจัดส่ง ทั่วภาคเหนือ เพื่อให้เราจัดส่งอาหารญี่ปุ่น</p><p><br></p><p><b>Instant Delivery Service</b></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;With excellent warehouse management. We focus on delivery service. In addition, we have delivery service throughout the North to deliver Japanese food.<br></p>`,
              },
              {
                title: 'วัตถุดิบหลากหลาย',
                image: '/static/service/3.jpg',
                desc: `<p><b>วัตถุดิบอาหารญี่ปุ่นหลากหลายชนิด</b></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; จากแดนอาทิตย์อุทัย สู่อาณาจักรแดนล้านนา เราคัดสรรค์และส่งตรงวัตถุดิบคุณภาพหลากหลายชนิดมาให้ทุกท่านได้ลอง ไม่ว่าจะเป็น กุ้งล๊อบสเตอร์ ปูทาราบะ ปูอัด ไข่กุ้ง ข้าวญี่ปุ่น&nbsp; หรือแม้แต่หอยแมลงภู่นิวซีแลนด์ เป็นต้น</p><p><br></p><p><b>A variety of Japanese food.</b></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;From the sun. The Kingdom of Lanna. We have selected and sent you a variety of quality ingredients, such as shrimp, lobster, crab, shrimp, crab, shrimp eggs, Japanese rice, or even New Zealand mussel.<br></p>`,
              }
            ];
          }
        });
      },
    },
    mounted() {
      this.serviceData();
    },
    created() {
      window.scrollTo(0, 0);
    },
  };
</script>

<style scoped>
  .service-bg {
    background-image: url(/static/bg4.png);
    background-repeat: repeat;
  }

  .row {
    /*border-bottom: 1px solid #EBEBEB;*/
  }

  .read-more {
    border-radius: 0;
    margin-bottom: 20px;
  }

  .read-more:hover {
    background: #febf00;
  }

  @media only screen and (min-width: 768px) {
    .service-image {
      /*min-height: 100%;*/
      /*max-height: 100%;*/
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    .service-image {
      /*min-height: 100%;*/
      /*max-height: 100%;*/
      width: 100%;
      height: 100%;
    }
  }

  .img-center {
    display: block;
    margin: auto;
  }

  .service-content {
    margin-top: -52px;
    padding: 20px;
  }

  .service-component {
    overflow: hidden;
    background: #fff;
  }

  .grey-background {
    background: #EBEBEB;
  }

  .white-background {
    /*background: #fff;*/
  }

  .yellow-color {
    color: #febf00;
  }
</style>
