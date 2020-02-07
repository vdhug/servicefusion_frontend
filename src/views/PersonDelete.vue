<template>
  <div style="position: relative;">
    <h1 class="subtitle-1 grey--text">Delete</h1>
    
    <v-container class="my-3">
      <v-alert v-if="alert" type="success" v-model="alert">
        {{feedbackMessage}}
      </v-alert>
      
      <PersonForm v-else :person="person" :to_delete="to_delete" v-on:childToParent="onChildClick">
      </PersonForm>
      <router-link :to="`/search/`">
        Go back to search
      </router-link>
    <Loader v-if="loading" />
    </v-container>
  </div>
</template>
          
<script>
import PersonForm from "@/components/persons/PersonForm.vue";
import Loader from "@/components/Loader.vue";
import { api } from "@/services/index.js";


export default {
    name: "DeletePerson",
    props: ["id"],
    data() {
        return {
            to_delete: true,
            alert: false,
            loading: true,
            feedbackMessage: "",
            person: {
                first_name: "",
                last_name: "",
                birth: null,
                phones: [],
                emails: [],
                addresses: []
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
        this.deletePerson();
      },
      async deletePerson() {
        this.loading = true;
        await api.delete(`/persons/${this.id}/`, this.person);
        this.loading = false;
        this.feedbackMessage = `The person '${this.person.first_name} ${this.person.last_name}' was deleted succesfully`;
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
            phones: [],
            emails: [],
            addresses: []
        }
        
      },
      getPerson() {
        api.get(`/persons/${this.id}/`).then(r => {
            this.person = r.data;
            this.loading=false;
        });
      }
    },
    created() {
      this.getPerson();
    }
}
</script>

