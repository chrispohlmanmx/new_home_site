<script setup lang="ts">

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const units = {
    grams: "g",
    ounces: "oz",
    tablespoons: "tbsp",
    teaspoons: "tsp",
    cups: "cup",
    pounds: "lb",
} as const;


</script>

<template>
    <div id="ingredient-input" class="flex gap-4">

        <FormField v-slot="{ componentField }" name="ingredients[0].quantity"
                   class="w-1/6">
            <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                    <Input type="number" placeholder="1"
                           v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="ingredients[0].unit">
            <FormItem>
                <FormLabel>Units</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="oz"
                           v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="ingredients[0].name">
            <FormItem>
                <FormLabel>Ingredient</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Salt"
                           v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
    </div>
</template>
