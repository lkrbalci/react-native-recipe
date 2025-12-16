/* A mock database for demo project. Thanks chatGPT for demo recipes  */

export type Recipe = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  preparation: string;
};

type Database = {
  recipes: Recipe[];
};

const database: Database = {
  recipes: [
    {
      id: "1",
      title: "Classic Margherita Pizza",
      description:
        "A simple Italian pizza with tomato sauce, fresh mozzarella, and basil.",
      imageUrl:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=640&q=80",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella",
        "Fresh basil",
        "Olive oil",
        "Salt",
      ],
      preparation:
        "Preheat oven to 475°F (245°C). Spread tomato sauce on the dough. Top with mozzarella and a drizzle of olive oil. Bake for 10-12 minutes. Garnish with fresh basil and salt before serving.",
    },
    {
      id: "2",
      title: "Avocado Toast",
      description:
        "Crispy toasted bread topped with mashed avocado and olive oil.",
      imageUrl:
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=640&q=80",
      ingredients: [
        "Bread",
        "Ripe avocado",
        "Olive oil",
        "Salt",
        "Black pepper",
        "Lemon juice",
      ],
      preparation:
        "Toast the bread slices until golden brown. Mash the ripe avocado in a bowl with lemon juice, salt, and pepper. Spread the avocado mixture evenly on the toast. Drizzle with olive oil.",
    },
    {
      id: "3",
      title: "Spaghetti Carbonara",
      description:
        "Traditional pasta dish with eggs, cheese, pancetta, and black pepper.",
      imageUrl:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=640&q=80",
      ingredients: [
        "Spaghetti",
        "Eggs",
        "Parmesan cheese",
        "Pancetta",
        "Black pepper",
        "Salt",
      ],
      preparation:
        "Cook the spaghetti. In a separate pan, sauté the pancetta until crispy. In a bowl, whisk eggs with grated Parmesan and pepper. Drain the pasta, reserving some cooking water. Immediately toss the hot pasta with the egg mixture and pancetta, adding a splash of cooking water to create a creamy sauce. Serve immediately.",
    },
    {
      id: "4",
      title: "Pancakes with Berries",
      description: "Fluffy pancakes served with fresh berries and maple syrup.",
      imageUrl:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=640&q=80",
      ingredients: [
        "Flour",
        "Milk",
        "Eggs",
        "Baking powder",
        "Sugar",
        "Fresh berries",
        "Maple syrup",
      ],
      preparation:
        "Whisk together flour, sugar, baking powder, and salt. In a separate bowl, whisk milk and eggs. Combine wet and dry ingredients. Pour batter onto a hot, greased griddle. Cook until bubbles form, then flip and cook the other side. Serve warm with fresh berries and maple syrup.",
    },
  ],
};

//Mock getter and setters for mock database.
export const getRecipes = () => {
  return database.recipes;
};

export const setRecipes = (newRecipes: Recipe[]) => {
  database.recipes = newRecipes;
};
