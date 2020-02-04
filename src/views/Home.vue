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
