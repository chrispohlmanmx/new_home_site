<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ref } from "vue";
import Ingredient from "./Ingredient.vue";

const units = {
    grams: "g",
    ounces: "oz",
    tablespoons: "tbsp",
    teaspoons: "tsp",
    cups: "cup",
    pounds: "lb",
} as const;

const formSchema = toTypedSchema(
    z.object({
        name: z.string().min(2),
        source: z.url().optional(),
        servings: z.int().positive(),
        ingredients: z.array(
            z.object({
                name: z.string().min(2).max(50),
                quantity: z.number(),
                unit: z.enum(units),
            }),
        ),
        instructions: z.array(
            z.object({
                stepNumber: z.int().positive(),
                instruction: z.string(),
            }),
        ),
    }),
);

const recipe = ref({
    name: '',
    source: '',
    servings: -1,
    ingredients: [{
        name: '',
        quantity: -1,
        unit: 'tsp'
    },],
    instructions: [{
        stepNumber: -1,
        instruction: ''
    }]
});

const form = useForm({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
    console.log("form submitted", values);
});


function addIngredient() {
    recipe.value.ingredients.push({
        name: '',
        quantity: -1,
        unit: 'tsp'
    })
    console.log('add ingredient clicked')
}
</script>

<template>
    <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="name">
            <FormItem>
                <FormLabel>Recipe Name/Title</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Pepperoni Pizza"
                           v-bind="componentField" />
                </FormControl>
                <FormDescription>
                    This is the name or title of the recipe
                </FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="source">
            <FormItem>
                <FormLabel>Recipe Source</FormLabel>
                <FormControl>
                    <Input type="url" placeholder="example.com/recipe"
                           v-bind="componentField" />
                </FormControl>
                <FormDescription> Link to the original recipe </FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="servings">
            <FormItem>
                <FormLabel>Servings</FormLabel>
                <FormControl>
                    <Input type="number" placeholder="4"
                           v-bind="componentField" />
                </FormControl>
                <FormDescription>Number of servings</FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>

        <div id="ingredients" v-for="ingredient in recipe.ingredients">
            <Ingredient :ingredients="recipe.ingredients" ingredient_number="0"
                        @add-ingredient-clicked.once="addIngredient" />

        </div>
        <div id="instructions">
            <div id="instruction-input" class="flex">
                <FormField v-slot="{ componentField }"
                           name="instructions[0].stepNumber">
                    <FormItem>
                        <FormLabel>Step</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="1"
                                   v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }"
                           name="instructions[0].instruction">
                    <FormItem>
                        <FormLabel>Instruction</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Mix ingredients"
                                   v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
            </div>
        </div>

        <Button type="submit">Submit</Button>
    </form>
</template>
