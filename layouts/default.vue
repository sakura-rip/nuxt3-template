<template>
  <NuxtErrorBoundary>
    <slot></slot>
    <template #error="{ error }">
      <p>{{ error }}</p>
    </template>
  </NuxtErrorBoundary>
</template>

<script setup>
const i18nHead = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true
})

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
})
</script>

<style scoped>

</style>
