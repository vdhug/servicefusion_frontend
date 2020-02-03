<template>
  <div>
    <h2 class="subtitle">Code test</h2>
    <h1 class="title">Service Fusion</h1>
    <div class="analytics">
      <Chart />
      <Chart />
      <Chart />
    </div>
    <span class="separator">Quick stats</span>
    <div class="stats">
      <ul>
        <li class="card"></li>
        <li class="card"></li>
        <li class="card"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/chart/Chart.vue";
export default {
  name: 'home',
  components: {
    Chart
  }
}
</script>

<style scoped>

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

.analytics {
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

.stats ul {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px
}
.card {
  height: 300px;
  background: rgb(2,0,36);
  background: linear-gradient(355deg, rgba(2,0,36,1) 0%, rgba(38,82,140,1) 57%, rgba(0,212,255,1) 100%);
  border-radius: 10px;
}
</style>