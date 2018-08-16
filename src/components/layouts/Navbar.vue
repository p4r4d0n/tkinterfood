<template>
  <nav class="navbar navbar-default navbar-fixed-top ">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target="#collapse-1"
                aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"><img :src="logo"/></a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li v-for="menu in menus" v-bind:key="menu.url">
            <router-link :to="menu.url" :class="classActive(menu.url)">
              <b>{{ menu.name }}</b>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
  </nav>
</template>

<script>

  export default {
    name: 'navigation-bar',
    data() {
      return {
        menus: [
          {
            name: 'Home',
            url: '/',
          },
          {
            name: 'About Us',
            url: '/about',
          },
          {
            name: 'Our Services',
            url: '/services',
          },
          {
            name: 'Products',
            url: '/materials/0',
          },
          {
            name: 'Our Client',
            url: '/clients',
          },
          {
            name: 'Contact Us',
            url: '/contact',
          },
        ],
        expanded: false,
        collapse: true,
        currentRoute: this.$route.fullPath,
        logo: '/static/img/logo.png',
        primary_color: '#F44336',
        secondary_color: '#F44336',
      };
    },
    props: ['fixedTop'],
    methods: {
      classActive(url) {
//        $('.navbar-collapse').collapse('hide');
        if (url === this.$route.fullPath) {
          return 'is-active';
        } else {
          return '';
        }
      },
      fixedToTop(boolean) {
        if (boolean === 'true') {
          return 'navbar-fixed-top';
        } else {
          return '';
        }
      }
    }
  };
</script>

<style scoped>
  .navbar-default .navbar-toggle .icon-bar {
    background-color: #FFFFFF;
  }

  .navbar {
    border-radius: 0;
    border: 1px;
    /*border-bottom: 1; */
    box-shadow: 1px 1px 5px #424242;
  }

  .navbar-brand {
    color: #F44336;
  }

  .navbar-brand:hover {
    color: #F44336;
  }

  .navbar-default .navbar-nav > li > a {
    color: #212121;
  }

  nav {
    background: #FFFFFF;
  }

  @media only screen and (min-width: 768px) {
    .navbar-brand {
      margin-top: -8px;
    }

    .navbar-brand img {
      width: 100%;
      height: auto;
    }

    .navbar-default .navbar-nav > li > a:hover {
      background: #F44336;
      color: #FAFAFA;
      font-weight: bold;
      border-bottom: 3px solid #F44336;
    }

    .navbar-default .navbar-nav > li > .is-active {
      background: #F44336;
      color: #FAFAFA;
      font-weight: bold;
      border-bottom: 3px solid #F44336;
    }

    .navbar-nav > li > a {
      padding-top: 30px !important;
      padding-bottom: 27px !important;
    }

    .navbar {
      min-height: 80px !important
    }
  }

  @media only screen and (max-width: 768px) {
    .navbar-brand {
      margin-top: -15px;
    }

    .navbar-brand img {
      width: 60%;
      height: auto;
    }

    .navbar-default .navbar-nav > li > a:hover {
      color: #F44336;
      font-weight: bold;
      border-left: 3px solid #F44336;
      border-bottom: 0 solid transparent;
    }

    .navbar-default .navbar-nav > li > .is-active {
      color: #F44336;
      font-weight: bold;
      border-left: 3px solid #F44336;
      border-bottom: 0 solid transparent;
    }
  }

  .navbar-default .navbar-collapse,
  .navbar-default .navbar-form {
    border: 0;
  }

  .navbar-default .navbar-toggle {
    border-radius: 0;
    border: 0;
    background: #F44336;
  }

  .navbar-default .navbar-toggle:focus,
  .navbar-default .navbar-toggle:hover {
    border-radius: 0;
    border: 0;
    background: #F44336;
  }
</style>
