<template>
  <div class="petfolio-form">
    <h2>PetFolio</h2>
    
    <form class="mt-8 grid grid-cols-2 gap-7">
      <component
        v-for="(field, index) in PetFolioRecipe.buttons"
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
import { PetFolioRecipe } from "../recipes/rPetFolio.js"
import AddButton from "../common/AddButton.vue"
import RegistrationForm from "./RegistrationForm.vue"

export default {
  name: "PetFolio",
  components: { AddButton, RegistrationForm  },
  data() {
    return {
    PetFolioRecipe: PetFolioRecipe,
    showRegistrationForm: false

    }
  },
  methods: {
    handleClick(field) {
      if (field.on?.action === "registerPet") {
        this.showRegistrationForm = true
      }
      if (field.on?.action === "showPetList") {
        this.showRegistrationForm = false
      }
    }
}
}
</script>


<style scoped>
.petfolio-form {
  max-width: 900px;       
  width: 100%;               
  margin: 40px auto;     
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;        
  box-shadow: 0 2px 8px rgba(0,0,0,0.1); 
  box-sizing: border-box;
}

.petfolio-form h2 {
  text-align: center;
  margin-bottom: 20px;
}


</style>
