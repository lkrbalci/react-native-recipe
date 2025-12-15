/* A mock database for demo project. Thanks chatGPT for demo recipes  */

export type Recipe = {
  id: string
  title: string
  description: string
  imageUrl: string
  ingredients: string[]
}

type Database = {
  recipes: Recipe[]
}

export const database: Database = {
  recipes: [
    {
      id: '1',
      title: 'Classic Margherita Pizza',
      description:
        'A simple Italian pizza with tomato sauce, fresh mozzarella, and basil.',
      imageUrl:
        'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=640&q=80',
      ingredients: [
        'Pizza dough',
        'Tomato sauce',
        'Fresh mozzarella',
        'Fresh basil',
        'Olive oil',
        'Salt',
      ],
    },
    {
      id: '2',
      title: 'Avocado Toast',
      description:
        'Crispy toasted bread topped with mashed avocado and olive oil.',
      imageUrl:
        'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=640&q=80',
      ingredients: [
        'Bread',
        'Ripe avocado',
        'Olive oil',
        'Salt',
        'Black pepper',
        'Lemon juice',
      ],
    },
    {
      id: '3',
      title: 'Spaghetti Carbonara',
      description:
        'Traditional pasta dish with eggs, cheese, pancetta, and black pepper.',
      imageUrl:
        'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=640&q=80',
      ingredients: [
        'Spaghetti',
        'Eggs',
        'Parmesan cheese',
        'Pancetta',
        'Black pepper',
        'Salt',
      ],
    },
    {
      id: '4',
      title: 'Pancakes with Berries',
      description:
        'Fluffy pancakes served with fresh berries and maple syrup.',
      imageUrl:
        'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=640&q=80',
      ingredients: [
        'Flour',
        'Milk',
        'Eggs',
        'Baking powder',
        'Sugar',
        'Fresh berries',
        'Maple syrup',
      ],
    },
  ],
}