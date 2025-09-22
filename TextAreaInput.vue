<template>
  <div class="mb-3">
    <label class="input-label">{{ item.display.text }}</label>
    <textarea
      class="form-control"
      :rows="item.directives.rows || 3"
      v-bind="item.directives"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "TextAreaInput",
  props: {
    item: { type: Object, required: true },
  },
};
</script>


<!-- in recipe

   {
    component: "TextAreaInput",
    directives: { id: "specialNotes", class: "form-control", rows: 3, placeholder: "Write notes here..." },
    display: { text: "Special Notes:" },
  }, -->