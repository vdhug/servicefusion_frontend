<template>
  <div>
    <h1 class="subtitle-1 grey--text">New</h1>
    <v-container class="my-3">
      <PersonForm :person="person" v-on:childToParent="onChildClick">
      </PersonForm>

    </v-container>
  </div>
</template>
          
<script>
import PersonForm from "@/components/persons/PersonForm.vue";
import { api } from "@/services/index.js";


export default {
    name: "AddPerson",
    data() {
      return {
        person: {
          first_name: "",
          last_name: "",
          birth: new Date().toISOString().substr(0, 10),
          phones: [{
            id: null,
            number: ''
          }],
          emails: [
            {
              id: null,
              address: ""
            }
          ],
          addresses: [{
            id: null,
            address_line_1: '',
            address_line_2: '',
            address_line_3: '',
            country: '',
            state: '',
            city: '',
            postal_code: ''
          }]
        }
      }
    },
    components: {
      PersonForm
    },
    methods: {
      onChildClick (person) {
        this.person = person;
        this.createUser();

      },
      async createUser() {

        await api.post("/persons/", this.person);
        alert("POST COMPLETED")
      },
    }
}
</script>

