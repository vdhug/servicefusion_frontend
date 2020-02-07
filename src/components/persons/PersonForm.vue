<template>
  <v-form ref="form" v-model="valid" :lazy-validation="lazy">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h3 class="title font-weight-light">
            Personal informations
          </h3>
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="person.first_name"
            :rules="nameRules"
            :counter="50"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="person.last_name"
            :rules="nameRules"
            :counter="50"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-menu
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="person.birth"
                label="Date of birth"
                prepend-icon="mdi-event"
                v-on="on"
                readonly
              ></v-text-field>
            </template>
            <v-date-picker v-model="person.birth" :max="currentDate"></v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="6" md="6" class="pr-5">
          <h3 class="title font-weight-light mt-5">
            Emails
          </h3>

          <v-divider></v-divider>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-icon
                class="mt-2 mb-0"
                @click="addNewEmail"
                color="primary"
                v-on="on"
              >
                mdi-plus
              </v-icon>
            </template>
            <span>Add new email</span>
          </v-tooltip>

          <v-row
            v-for="(email, index) in person.emails"
            relative
            v-bind:key="`e-${index}`"
          >
            <v-col cols="11" md="11" class="py-2">
              <v-text-field
                v-model="email.address"
                :rules="emailRules"
                :label="`E-mail #${index}`"
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="1" md="1" align-self="center" v-if="index != 0">
              <v-tooltip class="px-0" top>
                <template v-slot:activator="{ on }">
                  <v-icon
                    class="mb-2"
                    @click="removeEmail(index)"
                    color="error"
                    v-on="on"
                  >
                    mdi-delete
                  </v-icon>
                </template>
                <span>Remove email</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="6" md="6" class="pl-5">
          <h3 class="title font-weight-light mt-5">
            Phone Numbers
          </h3>

          <v-divider></v-divider>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-icon
                class="mt-2 mb-0"
                @click="addNewPhone"
                color="primary"
                v-on="on"
              >
                mdi-plus
              </v-icon>
            </template>
            <span>Add new phone number</span>
          </v-tooltip>

          <v-row
            v-for="(phone, index) in person.phones"
            relative
            v-bind:key="`e-${index}`"
          >
            <v-col cols="11" md="11" class="py-2">
              <v-text-field
                v-model="phone.number"
                :label="`Phone number #${index}`"
                :rules="phoneRules"
                hint="+1 (202) 588-6500"
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="1" md="1" align-self="center" v-if="index != 0">
              <v-tooltip class="px-0" top>
                <template v-slot:activator="{ on }">
                  <v-icon
                    class="mb-2"
                    @click="removePhone(index)"
                    color="error"
                    v-on="on"
                  >
                    mdi-delete
                  </v-icon>
                </template>
                <span>Remove phone number</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-col>

        <v-row>
          <v-col cols="12" md="12" class="pl-5">
            <h3 class="title font-weight-light mt-5">
              Addresses
            </h3>
            <v-divider></v-divider>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-icon
                  class="mt-2 mb-0"
                  @click="addNewAddress"
                  color="primary"
                  v-on="on"
                >
                  mdi-plus
                </v-icon>
              </template>
              <span>Add new addres</span>
            </v-tooltip>
          </v-col>
          <v-col v-if="person.addresses.length" cols="12" md="12" class="pl-5">
            <v-row
              v-for="(address, index) in person.addresses"
              relative
              v-bind:key="`a-${index}`"
              class="mb-5"
            >
              <v-col cols="12">
                <h3 class="title font-weight-light">Address #{{ index }}</h3>
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12" md="3" class="py-2">
                <v-text-field
                  v-model="address.postal_code"
                  :rules="addressRules"
                  label="Postal code"
                  required
                >
                </v-text-field>
              </v-col>

              <v-col cols="12" md="3" class="py-2">
                <v-text-field
                  v-model="address.country"
                  :rules="addressRules"
                  label="Country"
                  required
                >
                </v-text-field>
              </v-col>

              <v-col cols="12" md="3" class="py-2">
                <v-text-field v-model="address.state" label="State" :rules="addressRules">
                </v-text-field>
              </v-col>

              <v-col cols="12" md="3" class="py-2">
                <v-text-field v-model="address.city" :rules="addressRules" label="City">
                </v-text-field>
              </v-col>

              <v-col cols="12" md="4" class="py-2">
                <v-text-field
                  v-model="address.address_line_1"
                  label="Address line 1"
                  :rules="addressRules"
                >
                </v-text-field>
              </v-col>

              <v-col cols="12" md="4" class="py-2">
                <v-text-field
                  v-model="address.address_line_2"
                  label="Address line 2"
                  :rules="addressRules"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="py-2" style="display:flex;">
                <v-text-field
                  v-model="address.address_line_3"
                  label="Address line 3"
                  :rules="addressRules"
                  class="mr-1"
                >
                </v-text-field>
                <v-tooltip class="px-0" bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      class="mb-2"
                      @click="removeAddress(index)"
                      color="error"
                      v-on="on"
                    >
                      mdi-delete
                    </v-icon>
                  </template>
                  <span>Remove address</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-else cols="12">
            <h3 class="subtitle-1 ml-2">No address provided</h3>
          </v-col>

          <v-col col="12" md="6">
            
            <v-btn name="clear" color="error" class="mr-4" outlined
              >clear</v-btn>
              <v-btn :disabled="!valid" @click="emitToParent" name="submit" color="primary" class="mr-4" outlined>save</v-btn>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>

export default {
  name: "PersonForm",
  props: {
    person: Object
  },
  data() {
    return {
      currentDate: new Date().toISOString().substr(0, 10),
      valid: false,
      lazy: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 50 || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      phoneRules: [
        v => !!v || 'Phone number is required',
        v => v.length > 8 || 'Phone number must be more than 8 characters',
      ],
      addressRules: [
        v => !!v || 'This address field is required',
      ]
    };
  },  
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    emitToParent () {
      this.$emit('childToParent', this.person)
    },
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
    addNewPhone() {
      this.person.phones.push(
        {
          number: ""
        }
      );
    },
    removePhone(index) {
      this.person.phones.splice(index, 1);
    },
    addNewAddress() {
      this.person.addresses.push(
        {
          address_line_1: '',
          address_line_2: '',
          address_line_3: '',
          country: '',
          state: '',
          city: '',
          postal_code: ''
        }
      );
    },
    removeAddress(index) {
      this.person.addresses.splice(index, 1);
    }
  }
}
</script>