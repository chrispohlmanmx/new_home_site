<script setup>


  const units = [
    {text: 'grams', value: 'g'},
    {text: 'ounces', value: 'oz'},
    {text: 'tablespoons', value: 'tbsp'},
    {text: 'teaspoon', value: 'tsp'},
    {text: 'cups', value: 'cup'},
    {text: 'pounds', value: 'lb'},
  ]

  const recipe = ({
  name: '',
  source: '',
  servings: '',
  ingredients: [
    {name: '', quantity: 0, unit: ''}
  ],
  instructions: []
  })

</script>


<template>
  
  <form v-on:submit.prevent="saveRecipe">




</template>





