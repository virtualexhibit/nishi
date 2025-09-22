<template>
  <div class="registration-form">
    <h2>Registration </h2>
    <form class="row" @submit.prevent="handleSubmit">
    <component
      v-for="(field, index) in REGISTRATION"
      :is="field.component"
      :key="index"
      :item="field"
      v-model="formData[field.directives.name || field.display.text]"
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
  components: { TextInput, RadioInput, CheckBoxInput, AddButton, TextAreaInput, SelectInput},
  data() {
    return {
      REGISTRATION,
      formData: {
        name: "",
        breed: "",
        petType: "",
        gender: "",
        vaccines: [],
        notes: "",
      },
    }
  },
   methods: {
    handleAddClick(field) {
      if (field.component === "AddButton") {
        this.handleSubmit()
      }
    },
    handleSubmit() {
      // Emit completed form
      this.$emit("add-pet", { ...this.formData, id: Date.now().toString() })
      // Reset form
      this.formData = { name: "", breed: "", petType: "", gender: "", vaccines: [], notes: "" }
    }
  }
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
</style>
