import { defineDb, column, defineTable, NOW } from 'astro:db';

const Book = defineTable({
  columns: {
    book_id: column.number({ primaryKey: true }),
    title: column.text(),
    status: column.text(),
    date_finished: column.date({ optional: true }),
    cover: column.text(),
    notes: column.text({ optional: true }),
    author_id: column.number({ references: () => Author.columns.author_id }),
  },
});

const Author = defineTable({
  columns: {
    author_id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});

const Recipe = defineTable({
  columns: {
    recipeId: column.number({ primaryKey: true }),
    name: column.text(),
    source: column.text({ optional: true, unique: true }),
    servings: column.number(),
    createdAt: column.date({ default: NOW }),
  }
})
const RecipeFeedback = defineTable({
  columns: {
    feedbackId: column.number({ primaryKey: true }),
    rating: column.number(),
    notes: column.text({ optional: true }),
    createdAt: column.date({ default: NOW }),
    author: column.text(),
    recipeId: column.text({ references: () => Recipe.columns.recipeId }),

  }
})

const Ingredient = defineTable({
  columns: {
    ingredientId: column.number({ primaryKey: true }),
    name: column.text(),
    quantity: column.number(),
    unit: column.text({ enum: ['g', 'oz', 'tbsp', 'tsp', 'cup', 'lb'] }),
    createdAt: column.date({ default: NOW }),
    recipeId: column.number({ references: () => Recipe.columns.recipeId })
  }
})

const RecipeInstructions = defineTable({
  columns: {
    recipeInstructionId: column.number({ primaryKey: true }),
    stepNumber: column.number(),
    instruction: column.text(),
    createdAt: column.date({ default: NOW }),
    recipeId: column.number({ references: () => Recipe.columns.recipeId })
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Book, Author, Recipe, RecipeFeedback, Ingredient, RecipeInstructions }
});
