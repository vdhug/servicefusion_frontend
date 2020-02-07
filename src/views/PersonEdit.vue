<template>
  <div style="position: relative;">
    <h1 class="subtitle-1 grey--text">Edit</h1>
    
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
    name: "UpdatePerson",
    props: ["id"],
    data() {
        return {
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
        this.updateUser();
      },
      async updateUser() {
        this.loading = true;
        await api.put(`/persons/${this.id}/`, this.person);
        this.loading = false;
        this.feedbackMessage = `The person '${this.person.first_name} ${this.person.last_name}' was edited succesfully`;
        this.alert = true;
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
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

