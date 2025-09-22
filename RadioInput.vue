<template>
  <div class="form-check my-3">
    <input
      type="radio"
      v-bind="merged.directives"
      :value="merged.directives.value"  
      v-model="inputValue"          
    />
        <label class="form-check-label">
      {{ merged.display?.text }}
    </label>
  </div>
</template>

<script>
import { RADIO_RECIPE } from "../recipes/rRadioButton.js"

export default {
  name: "RadioInput",
  props: {
    item: { type: Object, required: false, default: () => ({}) },
    modelValue: { type: String, default: "" }, 
  },
  emits: ["update:modelValue"],
  computed: {
    merged() {
      return {
        directives: {
          ...RADIO_RECIPE.directives,
          ...this.item.directives,
        },
        display: {
          ...RADIO_RECIPE.display,
          ...this.item.display,
        },
      }
    },
    inputValue: {   // ✅ getter/setter wrapper for v-model
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit("update:modelValue", val)
      },
    },
  },
}
</script>
