<template>
  <div class="col-12 col-md-4">
    <div class="form-check my-2">
      <input
        v-bind="merged.directives"
        class="form-check-input"
        :id="merged.directives.id"
        :value="item.directives.value"
        v-model="inputValue"
      />
      <label class="form-check-label" :for="merged.directives.id">
        {{ merged.display?.text }}
      </label>
    </div>
  </div>
</template>

<script>
import { CHECKBOX_RECIPE } from "../recipes/rCheckBox.js"

export default {
  name: "CheckBoxInput",
  props: {
    item: { type: Object, required: true },
    modelValue: { type: Array, default: () => [] }, // will store checked values

  },
  emits: ["update:modelValue"],

  computed: {
    merged() {
      return {
        directives: {
          ...CHECKBOX_RECIPE.directives,
          ...this.item.directives,
        },
        display: {
          ...CHECKBOX_RECIPE.display,
          ...this.item.display,
        },
      }
    },
    inputValue: {
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
