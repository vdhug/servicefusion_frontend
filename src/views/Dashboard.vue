<template>
  <div>
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container v-if="loaded" class="my-3">
        <v-row style="min-height:420px;">
          <v-col cols="12" md="6">
             <pie-chart class="chart" v-if="loaded" :chartdata="ages.chartdata" :options="ages.options"></pie-chart>
             <label class="subtitle-1">Graph 1: {{ages.label}}</label>
          </v-col>

          <v-col cols="12" md="6">
             <pie-chart class="chart" v-if="loaded" :chartdata="secondary.chartdata" :options="secondary.options"></pie-chart>
             <label class="subtitle-1">Graph 2: {{secondary.label}}</label>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h3 class="title font-weight-light">
              Quick stats
            </h3>
            <v-divider></v-divider>
          </v-col>

          <v-col cols="12" md="4">
            <v-card color="#385F73" dark class="pa-5" style="height: 200px;">
              <v-card-title class="headline">Total persons: 55</v-card-title>
               <v-card-subtitle>Total number of persons registered in the API.</v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card color="#385F73" dark class="pa-5" style="height: 200px;">
              <v-card-title class="headline">Total addresses: 55</v-card-title>
               <v-card-subtitle>Total number of addresses registered in the API.</v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card color="#385F73" dark class="pa-5" style="height: 200px;">
              <v-card-title class="headline">Total emails: 120</v-card-title>
               <v-card-subtitle>Total number of emails registered in the API.</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
    <Loader v-else />
  
  </div>
</template>

<script>
import PieChart from "@/components/chart/PieChart.vue";
import Loader from "@/components/Loader.vue";
import { api } from "@/services/index.js";

export default {
  name: 'Dashboard',
  components: {
    PieChart,
    Loader
  },
  data() {
    return {
      loaded: false,
      ages: {
        label: "Age range distribution about persons registered in the API.",
        chartdata: {}
      },
      secondary: {
        label: "Total count of secondary informations about persons registered in the API.",
        chartdata: {}
      },
      chartWidth: 30
    };
  },
  async mounted () {
    this.loaded = false
    try {
      api.get("/analytics/ages/").then(response => {
        const result = response.data;   
     
        this.ages.chartdata = {
              "hoverBackgroundColor": "red",
              "hoverBorderWidth": 5,
              "labels": result.labels,
              "datasets": [
                  {
                      "label": "Age distribution",
                      "backgroundColor": ["#41B883", "#E46651", "#00D8FF"],
                      "data": result.data
                  }
              ]
          }
        this.ages.chartOptions = {
          hoverBorderWidth: 10
        }
       })
    } catch (e) {
      alert(e)
    }
    try {
      api.get("/analytics/secondary/").then(response => {
      const result = response.data;   
    
      this.secondary.chartdata = {
            "hoverBackgroundColor": "red",
            "hoverBorderWidth": 5,
            "labels": result.labels,
            "datasets": [
                {
                    "label": "Secondary informations distribution",
                    "backgroundColor": ["#41B883", "#E46651", "#00D8FF"],
                    "data": result.data
                }
            ]
        }
      this.secondary.chartOptions = {
        hoverBorderWidth: 10
      }
      this.loaded = true
      })
    } catch (e) {
      alert(e)
    }
  } 
}
</script>


<style scoped>
.chart {
  max-width: 400px;
  max-height: 400px;
}
label {
  display: block;
  padding: 10px;
  max-width: 400px;
  text-align: center;
}
</style>