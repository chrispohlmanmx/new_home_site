import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { db, Recipe, Ingredient, RecipeInstructions } from 'astro:db';


export const server = {
  addRecipe: defineAction({
    input: z.object({
        title: z.string().min(2),
        source: z.string().optional(),
        servings: z.number().positive(),
        ingredients: z.array(
            z.object({
                name: z.string().min(2).max(50),
                quantity: z.number(),
                unit: z.string(),
            }),
        ),
        instructions: z.array(
            z.object({
                instruction: z.string(),
            }),
        ),
    }),
    handler: async (input) => {
        const updatedRecipes = await db
            .insert(Recipe)
            .values(input)
            .returning({
                recipeId: Recipe.recipeId
            });

        const recipeId = updatedRecipes[0].recipeId

        input.ingredients.forEach(async ingredient =>
            await db.insert(Ingredient).values({
                recipeId: recipeId,
                name: ingredient.name,
                quantity: ingredient.quantity,
                unit: ingredient.unit,
            }).execute()
        )

        input.instructions.forEach(async (instruction) => {
            let i = 1
            await db.insert(RecipeInstructions).values({
                recipeId: recipeId,
                stepNumber: i,
                instruction: instruction.instruction
            }).execute();
            i++;
        }
       )

        return recipeId;
    }
  })
}