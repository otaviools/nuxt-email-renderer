<script setup lang="ts">
interface Props {
  userName: string;
}
defineProps<Props>();
</script>

<template>
  <EHtml>
    <EHead />
    <EBody>
      <EContainer>
        <EHeading>Bem-vindo ao Nuxt Email Renderer, {{ userName }}!</EHeading>
        <EText
          >Obrigado por se inscrever! Estamos felizes em ter você aqui.</EText
        >
        <EButton href="https://devotaviosantos.vercel.app"
          >Acessar portfólio</EButton
        >
      </EContainer>
    </EBody>
  </EHtml>
</template>
