<template>
  <div>
    <h1 class="subtitle-1 grey--text">New</h1>
    <v-container class="my-3">
        
    </v-container>
  </div>
</template>
          
<script>

export default {
    name: "AddPerson",
    data() {
      return {
        person: {
          first_name: "",
          last_name: "",
          birth: "",
          addresses: [],
          numbers: [{
            'number': ''
          }],
          emails: [
            {
              address: ""
            }
          ]
        }
      };
    },
    methods: {
      addNewEmail() {
        this.person.emails.push(
          {
            address: ""
          }
        );
      },
      removeEmail(index) {
        this.person.emails.splice(index, 1);
      },
      addNewNumber() {
        this.person.numbers.push(
          {
            number: ""
          }
        );
      },
      removeNumber(index) {
        this.person.numbers.splice(index, 1);
      }
    }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
}

.form label {
  font-size: 1em;
  margin-top: 15px;
  text-transform: uppercase;
}
.form label:first-child {
  margin-top: 5px;
}

.form input {
  margin-top: 5px;
  padding: 10px 5px;
  font-size: 1em;
  border: 1px solid #253340;
  border-radius: 5px;
}

.form input:focus {
  outline: none;
}

.btn {
  display: inline-block;
  width: 120px;
  text-align: center;
  padding: 10px;
  border: 1px solid #253340;
  border-radius: 5px;
  margin: 5px 0;
}
.add {
  width: 50px;
  font-weight: bold;
  font-size: 1em;
}
.add:hover {
  background: #5AAFD1;
}

.component-input {
  position: relative;
}

.component-input input {
 width: 100%;
}

.remove {
  position: absolute;
  right: -70px;
  height: 40px;
  top: 5px;
  text-align: center;
  width: 20px;
  padding: 10px;
  border: 1px solid #253340;
  border-radius: 5px;
  width: 50px;
  font-weight: bold;
  font-size: 1em;
} 
.remove:hover {
  background: #FD5B46;
}

.controllers {
  margin-top: 15px;
  display: flex;
}

.cancel {
  margin-right: 20px;
  text-transform: uppercase;
  font-size: 1em;
}
.cancel:hover {
  background: #FD5B46;
  cursor: pointer;
}

.submit {
  text-transform: uppercase;
  font-size: 1em;
}
.submit:hover {
  background: #5AAFD1;
  cursor: pointer;
}

.disabled {
  background: #282828;
  opacity: .3;
  color: #F1F1F1;
}
.disabled:hover {
  cursor: auto;
  background: #282828;
  opacity: .3;
  color: #F1F1F1;
}
</style>
