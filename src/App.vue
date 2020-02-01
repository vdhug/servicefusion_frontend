<template>
  <div id="app">
    <Sidebar />
    <main>
      <h2 class="subtitle">Code test</h2>
      <h1 class="title">Service Fusion</h1>
      <div class="analytics">
        <Chart />
        <Chart />
        <Chart />
      </div>
      <span class="separator">Quick stats</span>
      <div class="stats">
        
      </div>
      <Footer />
    </main>

    
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";
import Chart from "@/components/chart/Chart.vue";
export default {
  components: {
    Sidebar,
    Footer,
    Chart
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #F2F2F2;
}

img {
  display: block;
}

#app {
  display: grid;
  grid-template-columns: 2fr 8fr;
}

main {
  padding: 40px 30px 0px;
}

.title, .subtitle {
  font-size: 1.953em;
  font-weight: 300;
  text-transform: uppercase;
}

.subtitle {
  font-size: 1em;
  font-weight: 200;
}

.title::after {
  content: "";
  display: block;
  widows: 100%;
  height: 2px;
  background-color: #A6610D;
  opacity: .3;
  margin-top: 5px;
}

.analytics, .stats {
  margin: 60px 0;
  display: flex;
}

.separator {
  font-size: .8em;
  text-transform: uppercase;
  letter-spacing: .1em;
  margin: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px 0;
}
.separator::before, .separator::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #A6610D;
}
.separator::before {
    margin-right: .5em;
}
.separator::after {
    margin-left: .5em;
}

</style>
