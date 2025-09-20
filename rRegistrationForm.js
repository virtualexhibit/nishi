const REGISTRATION = [
  {
    component: "TextInput",
    directives: { type: "text", class: "input-label", placeholder: "Pet's Name" },
    display: { text: "Pet Name:" },
  },
  {
    component: "TextInput",
    directives: { type: "date", class: "input-label" },
    display: { text: "Birthday:" },
  },
  {
    component: "TextInput",
    directives: { type: "text", class: "input-label", placeholder: "e.g. Golden Retriever, Persian" },
    display: { text: "Breed:" },
  },
  {
    component: "RadioInput",
    directives: { name: "pet_type", value: "dog" },
    display: { text: "Dog" }
  },
  {
    component: "RadioInput",
    directives: { name: "pet_type", value: "cat" },
    display: { text: "Cat" }
  },
  {
    component: "RadioInput",
    directives: { name: "pet_type", value: "other" },
    display: { text: "Other" }
  },
  
    {
    component: "RadioInput",
    directives: { name: "gender", value: "male" },
    display: { text: "Male" }
  },
    {
      component: "RadioInput",
      directives: { name: "gender", value: "female" },
      display: { text: "Female" }
    },
  {
  component: "CheckBoxInput",
  directives: { value: "rabies" },
  display: { text: "Rabies" }
  },
  {
    component: "CheckBoxInput",
    directives: { value: "parvo" },
    display: { text: "Parvo" }
  },
  {
    component: "CheckBoxInput",
    directives: { value: "distemper" },
    display: { text: "Distemper" }
  },
  {
    component: "CheckBoxInput",
    directives: { value: "dewormed" },
    display: { text: "Dewormed" }
  },
    {
      component: "AddButton",
      directives: { value: "ok" },
      display: { text: "agree" },
    },

]

export { REGISTRATION }