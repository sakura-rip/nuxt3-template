<template>

</template>

<script setup>
useHead({
  title: 'About',
  meta: [
    {name: 'description', content: 'descirptionHere'},
  ],
})
definePageMeta({
  layout: 'default',
  middleware: ["auth"]
});
</script>

<style scoped>

</style>
