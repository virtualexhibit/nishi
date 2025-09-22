const REGISTRATION = [
{
  component: "TextInput",
  directives: { name: "name", type: "text", class: "input-label", placeholder: "Pet's Name" },
  display: { text: "Pet Name:" },
},
{
  component: "TextInput",
  directives: { name: "age", type: "number", class: "input-label", placeholder: "Pet's Age" },
  display: { text: "Pet Age:" },
},
{
  component: "TextInput",
  directives: { name: "breed", type: "text", class: "input-label", placeholder: "e.g. Golden Retriever, Persian" },
  display: { text: "Breed:" },
},

  {
    component: "SelectInput",
    directives: { name: "petType", class: "form-select" },
    display: { text: "Pet Type:" },
    options: [
      { value: "dog", text: "Dog" },
      { value: "cat", text: "Cat" },
      { value: "other", text: "Other" }
    ]
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
      directives: { name: "vaccines", value: "rabies", id: "rabies" },
      display: { text: "Rabies" }
    },
    {
      component: "CheckBoxInput",
      directives: { name: "vaccines", value: "parvo", id: "parvo" },
      display: { text: "Parvo" }
    },
    {
      component: "CheckBoxInput",
      directives: { name: "vaccines", value: "distemper", id: "distemper" },
      display: { text: "Distemper" }
    },
    {
      component: "CheckBoxInput",
      directives: { name: "vaccines", value: "dewormed", id: "dewormed" },
      display: { text: "Dewormed" }
    },

   {
    component: "TextAreaInput",
    directives: { id: "specialNotes", name: "notes", class: "form-control", rows: 3, placeholder: "Write notes here..." },
    display: { text: "Special Notes:" },
  },
    {
      component: "AddButton",
      directives: { value: "ok" },
      display: { text: "agree" },
    },

]

export { REGISTRATION }