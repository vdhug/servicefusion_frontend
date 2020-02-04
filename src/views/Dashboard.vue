<template>
  <div>
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-3">
        <v-row style="min-height:420px;">
          <v-col cols="12" md="4">
            <Chart />
          </v-col>
          <v-col cols="12" md="4">
            <Chart />
          </v-col>
          <v-col cols="12" md="4">
            <Chart />
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
import Chart from "@/components/chart/Chart.vue";
export default {
  name: 'home',
  components: {
    Chart
  }
}
</script>
