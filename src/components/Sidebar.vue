<template>
  <nav>

    <v-toolbar flat text class="grey lighten-4 px-5">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Service</span>
        <span>Fusion</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <a href="https://rocky-caverns-36312.herokuapp.com/api/" target="__blank" class="v-btn v-btn--flat v-btn--text theme--light v-size--default grey--text">
        <span>API Routes</span>
        <v-icon right>mdi-file-document</v-icon>
      </a>

      <a href="https://github.com/vdhug/servicefusion_api" target="__blank" class="v-btn v-btn--flat v-btn--text theme--light v-size--default grey--text">
        <span>API repository</span>
        <v-icon right>mdi-source-repository</v-icon>
      </a>
      
    </v-toolbar>

    <v-navigation-drawer temporary app v-model="drawer">
      <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-icon>
              <v-icon class="black--text">{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="black--text">{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    name: "Sidebar",
    data() {
      return {
        drawer: false,
        links: [
          { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
          { icon: 'mdi-account-search', text: 'Search', route: '/search' },
          { icon: 'mdi-account-plus', text: 'New', route: '/new' },
        ]
      }
    }
}
</script>

