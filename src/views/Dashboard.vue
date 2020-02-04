<template>
  <div>
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-3">
        
    </v-container>
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
