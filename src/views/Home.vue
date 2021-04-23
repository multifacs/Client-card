<template>
        <h1 class="logo">Our partners</h1>
    
    <div class="row1">
      <CompanyCard
        v-for="card of clients" :key="card.name"
        v-bind:card="card"
      />
    </div>
</template>

<script>
import CompanyCard from '@/components/CompanyCard'
import clientData from "@/json/clients.json";

export default {
  name: 'App',
  components: {
    CompanyCard
  },
  data() {
    return {
      clients: clientData,
    }
  }
}
</script>

<style>

body {
  background-image: url(../assets/bg.jpg);
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