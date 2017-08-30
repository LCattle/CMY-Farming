<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view name="Login"></router-view>
    <router-view name="Home"></router-view>
    
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'app',
  components: {
    
  },
  mounted() {
    var docH = $(document).height();
    var headerH = $('.header').height();
    var h = docH - headerH;
    $('.left-nav-box').css({
      'height': h + 'px',
      'top': headerH
    });


  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  border: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.left-nav-box {
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.right-content-box {
  min-height: 600px;
  height: auto;
  overflow: hidden;
  margin-top: 60px;
}
</style>
