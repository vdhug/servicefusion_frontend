<template>
  <div id="chart">
    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
    <label class="chart-description">Chart</label>
  </div>
</template>

<script>
import PieChart from "./PieChart.js";
export default {
  name: "Chart",
  components: {
    PieChart
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 10
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 5,
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5]
          }
        ]
      }
    };
  }
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
