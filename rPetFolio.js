 const PetFolioRecipe = {
  navButtons: [
    {
      component: "AddButton",
      directives: { class: "btn-primary mt-3" },
      display: { text: "Register a Pet" },
      on: { action: "addPet" } 
    },
    {
      component: "AddButton",
      directives: { class: "btn-secondary mt-3" },
      display: { text: "Pet List" },
      on: { action: "petList" } 
    },
  ],
  pets:[]
}

export { PetFolioRecipe }
