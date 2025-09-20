 const PetFolioRecipe = {
  buttons: [
    {
      component: "AddButton",
      directives: { class: "btn-primary mt-3" },
      display: { text: "Register a Pet" },
      on: { action: "registerPet" } 
    },
    {
      component: "AddButton",
      directives: { class: "btn-secondary mt-3" },
      display: { text: "Pet List" },
      on: { action: "showPetList" } 
    }
  ]
}

export { PetFolioRecipe }
