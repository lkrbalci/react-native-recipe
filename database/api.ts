import { getRecipes, Recipe, setRecipes } from "./db";

export function getAllRecipes() {
  return getRecipes();
}

export function getRecipeById(id: string) {
  const recipes = getRecipes();
  return recipes.find((recipe) => recipe.id === id);
}

export function getRecipeCount() {
  return getRecipes().length;
}

export function getRandomRecipe() {
  const recipes = getRecipes();
  const randomIndex = Math.floor(Math.random() * getRecipeCount()).toString();
  return recipes[parseInt(randomIndex)];
}

export function addRecipe(newRecipe: Recipe) {
  const recipes = getRecipes();
  setRecipes([...recipes, newRecipe]);
}
