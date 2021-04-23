<template>
  <nav class="navbar navbar-dark bg-dark" style="margin-bottom: 20px; height: 60px">
  <div class="container-xxl">
    <a class="navbar-brand">Super partnership</a>
    <input type="text" class="form-control" placeholder="Search companies" aria-label="Username" aria-describedby="basic-addon1" style="width: 80%">

  </div>
</nav>
  <div class="container">

    <router-view/>

    <SuperButton/>

  </div>

</template>

<script>
import SuperButton from './components/SuperButton'

export default {
  name: 'App',
  components: {
    SuperButton
  },
  data() {
    return {
    }
  }
}
</script>

<style>

body {
  background-image: url(./assets/bg.jpg);
  background-size: cover;
}

.logo {
  margin-top: 15px;
  margin-bottom: 60px;
  color: white;
  font-size: 175px;
  text-shadow: 0 0 0.3em black;
}

.row1 {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.brand {
  text-align: left;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: cyan;
}

.companies {
  display: flex;
  justify-content: space-evenly;
}
</style>
