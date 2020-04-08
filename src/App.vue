<template>
  <div id="app">
    <div id="nav">
      <router-link to="/map" class="nav-item">实时疫情地图</router-link> 
      <router-link to="/linechart" class="nav-item">实时疫情发展曲线</router-link>
    </div>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  font-size: 26px;
  display: flex;
  justify-content: center;
}

/* .view {
  width: 100%;
  margin: auto 0;
} */
.nav-item {
  color: rgb(0, 119, 255);
  padding: 20px;
  text-decoration: none;
}
.router-link-active{
  color: rgb(96, 174, 138);
}
</style>
