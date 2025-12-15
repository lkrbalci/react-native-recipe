import { database } from "./db";

export function getAllRecipes() {
  return [...database.recipes];
}

export function getRecipeById(id: string) {
    //REMOVE
    console.log("api", id);
    
  return database.recipes.find((recipe) => recipe.id === id);

}

export function getRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * database.recipes.length);
  // REMOVE
  console.log("api", Math.floor(Math.random() * database.recipes.length));

  return database.recipes[randomIndex];
}
