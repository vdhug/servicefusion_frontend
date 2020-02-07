
<script>

import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartdata, {
      borderWidth: "5px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "5px"
    });
  }
};
</script>
