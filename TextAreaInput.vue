<template>
  <div class="mb-3">
    <label class="input-label">{{ item.display.text }}</label>
    <textarea
      v-bind="item.directives"
      v-model="inputValue"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "TextAreaInput",
  props: {
    item: { type: Object, required: true },
    modelValue: { type: String, default: "" }
  },
  emits: ["update:modelValue"],
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit("update:modelValue", val)
      }
    }
  }
}
</script>



<!-- in recipe

   {
    component: "TextAreaInput",
    directives: { id: "specialNotes", class: "form-control", rows: 3, placeholder: "Write notes here..." },
    display: { text: "Special Notes:" },
  }, -->