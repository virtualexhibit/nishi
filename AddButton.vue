<template>
  <button
    :type="merged.directives?.type || 'button'"
    class="btn"
    :class="merged.directives?.class"
    @click="$emit('click')"

  >
    {{ merged.display?.text }}
  </button>
</template> 

<script>
import { BUTTON_RECIPE } from "../recipes/rAddButton.js"

export default {
  name: "AddButton",
  props: {
    item: { type: Object, required: false, default: () => ({}) },
  },
  computed: {
    merged() {
      return {
        directives: {
          ...BUTTON_RECIPE.directives,
          ...this.item.directives,
        },
        display: {
          ...BUTTON_RECIPE.display,
          ...this.item.display,
        },
      }
    },
  },
}
</script>
