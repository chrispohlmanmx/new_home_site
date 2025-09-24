<script setup lang="ts">

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Plus, Minus } from "lucide-vue-next"

const { ingredientNumber } = defineProps(['ingredientNumber'])

const name_value = `ingredients[${ingredientNumber}].name`
const quantity = `ingredients[${ingredientNumber}].quantity`
const unit = `ingredients[${ingredientNumber}].unit`

const units = {
    grams: "g",
    ounces: "oz",
    tablespoons: "tbsp",
    teaspoons: "tsp",
    cups: "cup",
    pounds: "lb",
    each: 'each'
} as const;


</script>

<template>
    <div id="ingredient-input"
         class="flex flex-wrap p-4 m-2 gap-4 justify-end content-end">

        <FormField v-slot="{ componentField }" :name="quantity" class="w-1/6">
            <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="1"
                           v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" :name="unit">
            <FormItem>
                <FormLabel>Units</FormLabel>
                <Select v-bind="componentField">
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="oz" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectGroup v-for="unit in units">
                            <SelectItem :value="unit">
                                {{ unit }}
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>

                </Select>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" :name="name_value">
            <FormItem>
                <FormLabel>Ingredient</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Salt"
                           v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <Button variant="outline" size="icon"
                @click="$emit('addIngredientClicked')"
                class="self-center justify-self-center">
            <Plus />
        </Button>
        <Button variant="outline" size="icon"
                @click="$emit('removeIngredientClicked')"
                class="self-center justify-self-center">
            <Minus />
        </Button>


    </div>
</template>
