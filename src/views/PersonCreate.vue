<template>
  <div style="position: relative;">
    <h1 class="subtitle-1 grey--text">New</h1>
    
    <v-container class="my-3">
      <v-alert type="success" v-model="alert" dismissible>
        {{feedbackMessage}}
      </v-alert>
      <PersonForm :person="person" v-on:childToParent="onChildClick">
      </PersonForm>
    <Loader v-if="loading" />
    </v-container>
  </div>
</template>
          
<script>
import PersonForm from "@/components/persons/PersonForm.vue";
import Loader from "@/components/Loader.vue";
import { api } from "@/services/index.js";


export default {
    name: "AddPerson",
    data() {
      return {
        alert: false,
        loading: false,
        feedbackMessage: "",
        person: {
          first_name: "",
          last_name: "",
          birth: null,
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
      PersonForm,
      Loader
    },
    methods: {
      onChildClick (person) {
        this.person = person;
        this.createUser();

      },
      async createUser() {
        this.loading = true;

        await api.post("/persons/", this.person);
        this.loading = false;
        this.feedbackMessage = `The person '${this.person.first_name} ${this.person.last_name}' was created succesfully`;
        this.alert = true;
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        this.resetPerson();
      },
      resetPerson() {
        this.person = {
          first_name: "",
          last_name: "",
          birth: null,
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
    }
}
</script>

