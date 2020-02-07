<template>
  <div id="chart">
    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
    <label class="chart-description">Chart</label>
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs";

export default {
  name: "Chart",
  extends: Doughnut,
  props: {
    chartData: {
      type: Object,
      default: null
    },
    chartOptions: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  },
  
};
</script>

<style scoped>
#chart {
  max-height: 300px;
  max-width: 100%;
}

.chart-description {
  display: block;
  margin-top: 20px;
  text-align: center;
  font-weight: 300;
  letter-spacing: .1em;
}
</style>
