<template>
  <div>
    <banner-component page-title="TK Interfood" image="true"></banner-component>
    <div class="container-fluid">
      <div class="row introduction-component">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="container">
            <h2 class="text-center">Introduction</h2>
            <div v-html="introduction"></div>
          </div>
        </div>
      </div>
      <div class="row service-component text-center">
        <router-link to="/services" class="col-xs-12 col-sm-12 col-md-4 col-lg-4 no-padding green-bg">
          <h2 class="service-title">{{ services[0].title }}</h2>
          <img v-show="services[0].image.length > 0" :src="services[0].image" class="img-responsive service-image"
               alt="Responsive image">
        </router-link>

        <router-link to="/services" class="col-xs-12 col-sm-12 col-md-4 col-lg-4 no-padding red-bg">
          <h2 class="service-title">{{ services[1].title }}</h2>
          <img v-show="services[1].image.length > 0" :src="services[1].image" class="img-responsive service-image"
               alt="Responsive image">
        </router-link>

        <router-link to="/materials" class="col-xs-12 col-sm-12 col-md-4 col-lg-4 no-padding blue-bg">
          <h2 class="service-title">{{ services[2].title }}</h2>
          <img v-show="services[2].image.length > 0" :src="services[2].image" class="img-responsive service-image"
               alt="Responsive image">
        </router-link>
      </div>
      <div class="row material-component" v-on:click="goToProducts">
        <h2 class="material-text cursor-pointer text-center">วัตถุดิบของเรา</h2>
        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 material-padding material-filter cursor-pointer product-image"
             v-for="product in products"
             :key="product.image">
          <img :src="product.image" alt="Product" style="width:100%">
        </div>
      </div>
      <div class="row client-component">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2 class="text-center" style="margin-bottom:50px">ลูกค้าของเรา</h2>
          <div class="row">
            <router-link to="/clients" v-for="client in clients" :key="client.image"
                         class="col-xs-6 col-sm-6 col-md-2 col-lg-2">
              <img :src="client.image" alt="Client" class="img-rounded client-image" style="width:120px; height:120px">
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import service from '../../api/service';
  import client from '../../api/client';
  import configuration from '../../api/configuration';
  import BannerComponent from '../layouts/Banner';

  export default {
    components: {
      BannerComponent,
    },
    name: 'home',
    data() {
      return {
        clients: [
        ],
        products: [
          {
            image: '/static/product/1.jpg'
          },
          {
            image: '/static/product/2.jpg'
          },
          {
            image: '/static/product/3.jpg'
          },
          {
            image: '/static/product/4.jpg'
          },
          {
            image: '/static/product/5.jpg'
          },
          {
            image: '/static/product/6.jpg'
          },
          {
            image: '/static/product/7.jpg'
          },
          {
            image: '/static/product/8.jpg'
          },
          {
            image: '/static/product/9.jpg'
          },
          {
            image: '/static/product/10.jpg'
          },
          {
            image: '/static/product/11.jpg'
          },
          {
            image: '/static/product/1.jpg'
          }
        ],
        services: [
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
        ],
        introduction: `<p><span style="padding: 0px 0px 0px 50px; margin: 0px;"></span>หจก. ที. เค. อินเตอร์ฟูด เป็นผู้นำในการจัดจำหน่ายบริการส่ง  ทางด้านธุรกิจวัตถุดิบอาหารนานาชาติแบบครบวงจรของประเทศไทยครอบคลุมตั้งแต่ ธุรกิจวัตถุดิบอาหารทะเล วัตถุดิบอาหารสด วัตถุดิบอาหารแช่แข็ง ธุรกิจวัตถุดิบอาหารญี่ปุ่น วัตถุดิบอาหารจีน วัตถุดิบอาหารยุโรป และผลิตภัณฑ์สำหรับสุขภาพ</p>`
      };
    },
    methods: {
      serviceList() {
        service.list().then(res => {
          let data = res.data.services;
          this.services = data;
        });
      },
      clientData() {
        client.list().then(res => {
          let data = res.data.clients;
          this.clients = data;
        });
      },
      configurationData() {
        configuration.get().then(res => {
          let data = res.data.configuration;
          this.introduction = data.introduction;
        });
      },
      goToProducts() {
        this.$router.push({path: 'materials'});
      }
    },
    mounted() {
      window.scrollTo(0, 0);
      this.configurationData()
      this.clientData();
      this.serviceList();
    },
  };
</script>

<style scoped>

  .green-bg {
    background: #BDBDBD;
  }

  .red-bg {
    background: #BDBDBD;
  }

  .blue-bg {
    background: #BDBDBD;
  }

  .service-image {
    opacity: 0.9;
  }

  .service-image:hover {
    opacity: 1;
  }

  /*.service-image:hover {*/
  /*opacity: 0.5;*/
  /*}*/

  .service-title {
    z-index: 99;
    position: absolute;
    top: 35%;
    left: 20%;
    right: 20%;
    color: #FFF;
    text-shadow: 1px 1px 8px #424242;
  }

  .no-padding {
    padding: 0;
  }

  .component-margin {
    margin-top: 0;
    /*margin-bottom: 50px;*/
  }

  @media only screen and (min-width: 768px) {

    .material-component {
      height: 390px;
      overflow: hidden;
    }
  }

  @media only screen and (max-width: 768px) {

    .material-component {
      height: 330px;
      overflow: hidden;
    }
  }

  .introduction-component {
    margin-bottom: 50px;
  }

  .client-component {
    margin-bottom: 50px;
  }

  .client-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  .material-padding {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  .material-text {
    z-index: 99;
    position: relative;
    top: 45%;
    color: #FAFAFA;
    text-shadow: 1px 1px 8px #424242;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .material-filter {
    filter: blur(0px);
  }

  .product-image {
    background: #212121;
    opacity: 0.8;
  }
</style>
