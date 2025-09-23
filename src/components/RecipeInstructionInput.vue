<script setup lang="ts">

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Plus, Minus } from "lucide-vue-next"

const { instructionNumber } = defineProps(['instructionNumber'])

const instruction = `instructions[${instructionNumber}].instruction`

</script>

<template>
    <div id="instruction-input"
         class="flex flex-wrap p-4 m-2 gap-4 justify-start content-start">
        <p>Step {{ instructionNumber + 1 }}</p>
        <FormField v-slot="{ componentField }" :name="instruction"
                   class="w-1/6">
            <FormItem>
                <FormLabel>Instruction</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Mix ingredients"
                           v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <Button variant="outline" size="icon"
                @click="$emit('addInstructionClicked')"
                class="self-center justify-self-center">
            <Plus />
        </Button>
        <Button variant="outline" size="icon"
                @click="$emit('removeInstructionClicked')"
                class="self-center justify-self-center">
            <Minus />
        </Button>


    </div>
</template>
