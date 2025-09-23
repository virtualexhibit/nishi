<template>
  <div class="registration-form">
    <h2>Registration</h2>
    <form class="row" @submit.prevent="handleSubmit">
      <!-- Loop over inputs -->
      <div v-for="(field, index) in REGISTRATION.inputs" :key="index" class="mb-3">
        <component
          :is="field.component"
          :item="field"
          v-model="userInputs[field.key]"
        />
        <!-- Show error dynamically -->
        <div v-if="errors[field.key]" class="text-red-500 text-sm mt-1">
          {{ errors[field.key] }}
        </div>
      </div>

      <!-- Buttons -->
      <component
        v-for="(field, index) in REGISTRATION.buttons"
        :is="field.component"
        :key="'btn-' + index"
        :item="field"
        @click="handleAddClick(field)"
      />
    </form>
  </div>
</template>

<script>
import TextInput from "@/components/common/TextInput.vue"
import TextAreaInput from "@/components/common/TextAreaInput.vue"
import SelectInput from "@/components/common/SelectInput.vue"
import RadioInput from "@/components/common/RadioInput.vue"
import CheckBoxInput from "@/components/common/CheckBoxInput.vue"
import AddButton from "@/components/common/AddButton.vue"
import { REGISTRATION } from "../recipes/rRegistrationForm.js"

export default {
  name: "RegistrationForm",
  components: {
    TextInput,
    RadioInput,
    CheckBoxInput,
    AddButton,
    TextAreaInput,
    SelectInput,
  },
  data() {
    return {
      REGISTRATION,
      userInputs: {
        name: "",
        age: 0,
        breed: "",
        gender: "",
        petType: "",
        vaccines: [],
      },
      errors: {},
    }
  },
  methods: {

    /**
     * Handles the click event for form buttons.
     * 
     * @param {Object} field - The button field object from REGISTRATION.buttons.
     */
    handleAddClick(field) {
      if (field.component === "AddButton") {
        this.handleSubmit()
      }
    },
     /**
     * Validates user input fields and emits the "add-pet" event if valid.
     */
    handleSubmit() {
      this.errors = {}

      if (!this.userInputs.name) {
        this.errors.name = "Pet name is required"
      }
      if (!this.userInputs.age || this.userInputs.age <= 0) {
        this.errors.age = "Please enter a valid age"
      }
      if (!this.userInputs.breed) {
        this.errors.breed = "Breed is required"
      }
      if (!this.userInputs.gender) {
        this.errors.gender = "Please select a gender"
      }
      if (!this.userInputs.petType) {
        this.errors.petType = "Please select a pet type"
      }
      if (!this.userInputs.vaccines || this.userInputs.vaccines.length === 0) {
        this.errors.vaccines = "Select at least one vaccine"
      }

      // stop if errors exist
      if (Object.keys(this.errors).length > 0) {
        return
      }

      this.$emit("add-pet", { ...this.userInputs, id: new Date().toISOString() })

      // reset
      this.userInputs = {
        name: "",
        age: 0,
        breed: "",
        gender: "",
        petType: "",
        vaccines: [],
      }
    },
  },
}
</script>

<style scoped>
.registration-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.mb-3 {
  margin-bottom: 12px;
}
.text-red-500 {
  color: #ef4444;
}
</style>
