<script setup lang="ts">
const title = "Nuxt Email Renderer";

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  htmlAttrs: {
    lang: "pt-br",
  },
});

useSeoMeta({
  title,
  ogTitle: title,
});
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
