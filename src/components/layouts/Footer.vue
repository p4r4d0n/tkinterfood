<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12">
          <img src="/static/img/logo.png" :src="logo" style="margin-bottom: 20px" />
          <p>
            <i class="fa fa-phone" aria-hidden="true"></i>
            {{ contact }}
          </p>
          <p>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            {{ email }}
          </p>
          <p>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            {{ address }}
          </p>
          <i class="fa fa-facebook-official fa-2" aria-hidden="true"></i>
          <i class="fa fa-instagram fa-2" aria-hidden="true"></i>
        </div>
        <div class="col-md-6 col-lg-6 hidden-xs hidden-sm">
          <h4>
            <b>Navigation</b>
          </h4>
          <p>
            <a href="/#/services">Our Services</a>
          </p>
          <p>
            <a href="/#/materials">Products</a>
          </p>
          <p>
            <a href="/#/clients">Our Client</a>
          </p>
          <p>
            <a href="/#/contact">About us</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-component',
  data() {
    return {
      logo: '/static/img/logo.png',
      address: 'T.K.INTERFOOD CO.,Ltd 88/1 M.5 Chiangmai - maejo Rd. T.Fhaham A.Muang Chiangmai 50000',
      contact: 'Tel.053-855009,088-2581725 Fax.053-855005',
      email: 'sale@tkinterfood.com',
    }
  }
}
</script>

<style scoped>
footer {
  color: #FAFAFA;
  padding: 50px;
  background: #212121;
}

.fa {
  margin-right: 10px;
}

.fa-2 {
  font-size: 2em;
}

a {
  color: #FAFAFA;
}

a:hover {
  color: #FAFAFA;
}

img {
  width: 100px;
  height: auto;
  margin-bottom: 20px;
}

.text-yellow {
  color: #FAFAFA;
}
</style>
