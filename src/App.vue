<template>
  <v-app>    
    <Sidebar />
    <v-content class="grey lighten-4">
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: 'App',
  components: {
    Sidebar,
  },

  data: () => ({
    //
  }),
};
</script>
