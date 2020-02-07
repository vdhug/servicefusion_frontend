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
            >
                <template v-slot:item.action="{ item }">
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-icon
                                small
                                class="pa-4"
                                @click="editItem(item)"
                                v-on="on"
                            >
                                mdi-pencil-outline
                            </v-icon>
                        </template>
                        <span>Edit person</span>
                    </v-tooltip>
                    
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-icon
                                class="pa-4"
                                small
                                @click="deleteItem(item)"
                                v-on="on"
                            >
                                mdi-delete
                            </v-icon>
                        </template>
                        <span>Delete person</span>
                    </v-tooltip>
                    
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
        ],
        persons: [],
      }
    },
    methods: {
      getPersons() {
        api.get("/persons").then(response => {
          this.persons = response.data;
        })
      }
    },
    created() {
      this.getPersons();
    }
  }
</script>
