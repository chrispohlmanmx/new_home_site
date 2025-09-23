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
import RecipeInstructionInput from "./RecipeInstructionInput.vue";

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
        title: z.string().min(2),
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
                instruction: z.string(),
            }),
        ),
    }),
);

const form = useForm({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
    console.log("form submitted", values);

});

const ingredientNumber = ref(1)
const instructionNumber = ref(1)


function addIngredient() {
    ingredientNumber.value++
}
function removeIngredient() {
    if (ingredientNumber.value > 1) {
        ingredientNumber.value--
    } else {
        //should maybe throw an actual error here?
        console.log('must have at least one ingredient')
    }

}

function addInstruction() {
    instructionNumber.value++
}
function removeInstruction() {
    if (instructionNumber.value > 1) {
        instructionNumber.value--
    } else {
        //should maybe throw an actual error here?
        console.log('must have at least one instruction')
    }
}
</script>

<template>
    <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="title">
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

        <div id="ingredients" v-for="i in ingredientNumber">
            <Ingredient :ingredientNumber="i - 1"
                        @add-ingredient-clicked="addIngredient"
                        @remove-ingredient-clicked="removeIngredient" />
        </div>


        <div id="instructions" v-for="i in instructionNumber">
            <RecipeInstructionInput :instructionNumber="i - 1"
                                    @add-instruction-clicked="addInstruction"
                                    @remove-instruction-clicked="removeInstruction" />
        </div>

        <Button type="submit">Submit</Button>
    </form>
</template>
