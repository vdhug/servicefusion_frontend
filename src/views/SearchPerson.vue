<template>
  <div>
    <h1 class="subtitle-1 grey--text">Search</h1>
    <v-container fluid class="my-3 px-0 py-0">
        <v-card>
            <v-card-title>
            Persons
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            </v-card-title>
            <v-data-table
            :headers="headers"
            :items="persons"
            :search="search"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            show-expand
            :loading="loading"
            loading-text="Loading... Please wait"
            >
                <template v-slot:item.action="{ item }">
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                          <router-link :to="`/edit/${item.id}`">
                            <v-icon
                                small
                                class="pa-4"
                                v-on="on"
                            >
                                mdi-pencil-outline
                            </v-icon>
                            </router-link>
                        </template>
                        <span>Edit person</span>
                    </v-tooltip>
                    
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                          <router-link :to="`/delete/${item.id}`">
                            <v-icon
                                class="pa-4"
                                small
                                v-on="on"
                            >
                                mdi-delete
                            </v-icon>
                          </router-link>
                        </template>
                        <span>Delete person</span>
                    </v-tooltip>
                    
                </template>
                <template v-slot:expanded-item="{ item }">
                  <td colspan=1 style="vertical-align: baseline;">
                    <span class="subtitle-2 mt-2" style="display:block;">Emails:</span>
                    <p class="caption mb-1" v-for="(email, index) in item.emails" :key="`ex-${index}`" >{{email.address}}  </p>
                    <p v-if="item.phones.length == 0" class="mb-1">No email registered.</p>
                  </td>
                  <td colspan=1 style="vertical-align: baseline;">
                    <span class="subtitle-2 mt-2" style="display:block;">Phones:</span>
                    <p class="caption mb-1" v-for="(phone, index) in item.phones" :key="`exp-${index}`" >{{phone.number}}</p>
                    <p v-if="item.phones.length == 0" class="mb-1">No phone number registered.</p>
                  </td>

                  <td colspan=2 style="vertical-align: baseline;">
                    <span class="subtitle-2 mt-2" style="display:block;">Addresses:</span>
                    <p class="caption mb-1" v-for="(address, index) in item.addresses" :key="`exa-${index}`" >{{address.address_line_1}} - {{address.address_line_2}} - {{address.address_line_3}} - {{address.city}} - {{address.state}} - {{address.country}} - {{address.postal_code}}</p>
                    <p v-if="item.addresses.length == 0" class="mb-1">No address registered.</p>
                  </td>
                </template>
            </v-data-table>
        </v-card>
    </v-container>
    
  </div>
</template>
          
<script>
import { api } from "@/services/index.js";

 export default {
    name: "Search",
    data () {
      return {
        expanded: [],
        singleExpand: false,
        loading: true,
        search: '',
        headers: [
          {
            text: 'First name',
            align: 'left',
            value: 'first_name',
          },
          { text: 'Last name', value: 'last_name' },
          { text: 'Birth', value: 'birth' },
          { text: 'Actions', value: 'action', sortable: false },
          { text: '', value: 'data-table-expand' },
        ],
        persons: [],
      }
    },
    methods: {
      getPersons() {
        api.get("/persons/").then(response => {
          this.persons = response.data;
          this.loading = false;
        })
      }
    },
    created() {
      this.getPersons();
    }
  }
</script>

<style>
a {
  text-decoration: none;
}
</style>