<script setup lang="ts">
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
    <FormField v-slot="{ componentField }" name="">
        <FormItem>
            <FormLabel>Recipe Source</FormLabel>
            <FormControl>
                <Input
                    type="url"
                    placeholder="example@example.com/recipe"
                    v-bind="componentField"
                />
                <Button type="submit">Submit</Button>
            </FormControl>
            <FormDescription> Link to the original recipe </FormDescription>
            <FormMessage />
        </FormItem>
    </FormField>
</template>
