<template>
  <div class="petfolio-form">
    <h2>PetFolio</h2>
    
    <form class="mt-8 grid grid-cols-2 gap-7">
      <component
        v-for="(field, index) in PetFolioButtons"
        :is="field.component"
        :key="index"
        :item="field"
        @click="handleClick(field)" 

      />
    </form>
    <!-- Show form when "Register a Pet" button is clicked -->
    <RegistrationForm v-if="showRegistrationForm" />
  
  </div>
</template>

<script>
import { PetFolio } from "../recipes/rPetFolio.js"
import AddButton from "../common/AddButton.vue"
import RegistrationForm from "./RegistrationForm.vue"

export default {
  name: "PetFolio",
  components: { AddButton, RegistrationForm  },
  data() {
    return {
      PetFolioButtons: PetFolio,
            showRegistrationForm: false

    }
  },
  methods: {
    handleClick(field) {
      if (field.display.text === "Register a Pet") {
        this.showRegistrationForm = true
      }
      if (field.display.text === "Pet List") {
        this.showRegistrationForm = false
        // later you can load pet list instead
      }
    }
}
}
</script>


<style scoped>
.petfolio-form {
  width: 900px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
