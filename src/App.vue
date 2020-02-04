<template>
  <v-app class="px-5">    
    <Sidebar />
    <v-content class="grey lighten-4 px-5">
      <router-view class="mx-5"></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Sidebar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
