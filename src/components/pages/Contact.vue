<template>
  <div>
    <banner-component page-title="Contact"></banner-component>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-lg-8">
          <div v-html="gmap"></div>
          <!--<gmap-map :center="position" :zoom="17" style="width: 100%; height: 500px">-->
          <!--<gmap-marker :position="position" :clickable="true" :draggable="true" @click="center=position">-->
          <!--</gmap-marker>-->
          <!--</gmap-map>-->
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="content">
            <h3 class="text-yellow"><b>ADDRESS</b></h3>
            <hr>
            <div v-html="address"></div>
            <h3 class="text-yellow"><b>CONTACT US</b></h3>
            <hr>
            <div v-html="contact"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-lg-12 form-component">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" id="message" v-model="message"></textarea>
            </div>
          </form>
          <button class="btn btn-default pull-right" v-on:click="storeContact">SEND</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import NavigationBar from '../layouts/Navbar';
  import {Carousel, Slide} from 'vue-carousel';
  import BannerComponent from '../layouts/Banner';
  import about from '../../api/about';

  export default {
    components: {
      BannerComponent,
      NavigationBar,
      Carousel,
      Slide,
    },
    name: '',
    data() {
      return {
//        address: 'T.K.INTERFOOD CO.,Ltd 88/1 M.5 Chiangmai - maejo Rd. T.Fhaham A.Muang Chiangmai 50000',
//        contact: 'Tel.053-855009,088-2581725 Fax.053-855005',
        address: '',
        contact: '',
//        position: {lat: 18.8119527, lng: 99.0090827},
        name: '',
        email: '',
        message: '',
        gmap: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1888.3386241452365!2d99.01026825119233!3d18.8125315624566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3acce1122339%3A0x691883b0a62712ea!2sT.K.+Interfood+co.!5e0!3m2!1sen!2sth!4v1506528844686" frameborder="0" style="border:0; width: 100%; height: 500px" allowfullscreen></iframe>\n'
      };
    },
    methods: {
      aboutData() {
        about.get().then(res => {
          let data = res.data.about;
          this.address = data.address;
          this.contact = data.contact;
//          this.position = {lat: parseFloat(data.lat), lng: parseFloat(data.lon)};
        });
      },
      storeContact() {
        alert('Thank you for your information')
//        about.store({
//          name: this.name,
//          email: this.email,
//          message: this.message
//        }).then(res => alert('Thank you for your information'));
      },
    },
    created() {
      window.scrollTo(0, 0);
    },
    mounted() {
      this.aboutData();
    },
  };
</script>

<style scoped>
  textarea {
    resize: none;
    height: 200px;
  }

  @media only screen and (min-width: 768px) {
    .form-component {
      padding: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    .form-component {
      padding-top: 20px;
      padding-bottom: 50px;
    }
  }

  .text-yellow {
    color: #f6a623;
  }
</style>
