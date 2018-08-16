<template>
  <div id="app" v-on:click="toggleMenu()">
    <navigation-bar fixed-top="true"></navigation-bar>
    <div class="is-mobile"></div>
    <router-view></router-view>
    <footer-component></footer-component>
    <social-component></social-component>
  </div>
</template>

<script>
  import NavigationBar from './components/layouts/Navbar';
  import FooterComponent from './components/layouts/Footer';
  import SocialComponent from "./components/layouts/Social.vue";

  export default {
    components: {
      SocialComponent,
      FooterComponent,
      NavigationBar,
    },
    name: 'app',
    methods: {
      toggleMenu() {
        $('.navbar-collapse').collapse('hide');
      }
    }
  };

</script>

<style>
  body, html {
    margin: 0;
    height: 100%;
  }

  #app {
    font-family: 'Prompt', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  @media only screen and (min-width: 768px) {
    .is-mobile {
      height: 80px;
      background: #2b2b2b;
    }
  }

  @media only screen and (max-width: 768px) {
    .is-mobile {
      background: #2b2b2b;
      height: 50px;
    }
  }
</style>
