<template>
  <div>
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-3">
        <v-row style="min-height:420px;">
          <v-col cols="12" md="4">
             <pie-chart v-if="loaded" :chartdata="ages.chartdata" :options="ages.options"></pie-chart>
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
  
  </div>
</template>

<script>
import PieChart from "@/components/chart/PieChart.vue";

import { api } from "@/services/index.js";

export default {
  name: 'Dashboard',
  components: {
    PieChart
  },
  data() {
    return {
      loaded: false,
      ages: {
        chartdata: {}
      }
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
        this.loaded = true
       })
    } catch (e) {
      alert(e)
    }
  }
}
</script>
