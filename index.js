function createRecipe(){
  let recipe = recipeForCreateAndUpdate();

  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  let result = template(recipe);
  document.getElementById("main").innerHTML = result;
}

function updateRecipe() {
  var recipe = recipeForCreateAndUpdate()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm(){
  let recipe = recipeForEdit();

  let formTemplate = document.getElementById("recipe-form-template").innerHTML; 
  let template = Handlebars.compile(formTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function recipeForEdit(){
  let name = document.getElementById("nameHeader").innerText
  let description = document.getElementById("recipeDescription").innerHTML
  let ingredNodes = document.getElementsByName("ingredientsList")
  let ingredients = []
  for (let i = 0; i < ingredNodes.length; i++){
    ingredients.push(ingredNodes[i].innerHTML)
  }
  
  let recipe = {name, ingredients, description, onSubmit: 'updateRecipe()'}

  return recipe;
}

function recipeForCreateAndUpdate(){
  let ingredNodes = document.getElementsByName("ingredients")
  let ingredients = []
  for (let i = 0; i < ingredNodes.length; i++){
    if (ingredNodes[i].value !== ""){
      ingredients.push(ingredNodes[i].value)
    }
  }

  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  
  let recipe = {name, ingredients, description}

  return recipe;
}

function formInit(){
  let formTemplate = document.getElementById("recipe-form-template").innerHTML; 
  let template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'onSubmit': 'createRecipe(event)'});
}

function init() {
  Handlebars.registerPartial('recipeFormPartial',
  document.getElementById('recipe-form-partial').innerHTML);

  Handlebars.registerPartial('recipeDetailsPartial',
  document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  });

  formInit();
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})












// function initForm() {
//   var formTemplate = document.getElementById("recipe-form-template").innerHTML
//   var template = Handlebars.compile(formTemplate)
//   document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
// }

// function createRecipe() {
//   var recipe = getRecipeVals()
//   var recipeTemplate = document.getElementById("recipe-template").innerHTML
//   var template = Handlebars.compile(recipeTemplate)
//   document.getElementById("main").innerHTML = template(recipe)
// }

// function updateRecipe() {
//   var recipe = getRecipeVals()
//   var recipeTemplate = document.getElementById("recipe-template").innerHTML
//   var template = Handlebars.compile(recipeTemplate)
//   document.getElementById("main").innerHTML = template(recipe)
// }

// function displayEditForm() {
//   var name = document.getElementById("nameHeader").innerText
//   var description = document.getElementById("recipeDescription").innerText
//   var ingredientsNodes = document.getElementsByName("ingredientsList")
//   var ingredients = []
//   for(var i=0;i<ingredientsNodes.length;i++) {
//     ingredients.push(ingredientsNodes[i].innerText)
//   }

//   var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

//   var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
//   var template = Handlebars.compile(recipeFormTemplate)
//   document.getElementById("main").innerHTML = template(recipe)
// }

// function getRecipeVals() {
//   var ingredientsNodes = document.getElementsByName("ingredients")
//   var ingredients = []
//   for(var i=0;i<ingredientsNodes.length;i++) {
//     if(ingredientsNodes[i].value !== "") {
//       ingredients.push(ingredientsNodes[i].value)
//     }
//   }
//   var name = document.getElementById("name").value
//   var description = document.getElementById("description").value
//   var recipe = {name, ingredients, description}
//   return(recipe)
// }

// function handlebarsSetup() {
//   //put any handlebars registrations here.
//   Handlebars.registerHelper('displayIngredient', function(ingredient) {
//     return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
//   });
//   Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
//   Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
// }


// function init() {
//   //put any page initialization/handlebars initialization here
//   handlebarsSetup()
//   initForm()
// }
// document.addEventListener("DOMContentLoaded", function(event) {
//   init()
// });
