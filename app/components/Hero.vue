<script setup lang="ts">
import { error } from "#build/ui";

const emailUsuario = ref("");
const carregando = ref(false);
const mensagem = ref("");
const enviado = ref(false);
const erro = ref(false);
const userName = ref("");

async function enviarEmail() {
  if (!emailUsuario.value) return;
  carregando.value = true;
  mensagem.value = "";

  try {
    await $fetch("/api/enviar-email", {
      method: "POST",
      body: { emailUsuario: emailUsuario.value, userName: userName.value },
    });
    mensagem.value = "Email enviado com sucesso!";
    emailUsuario.value = "";
    userName.value = "";
    enviado.value = true;
  } catch (error) {
    erro.value = true;
    mensagem.value = "Erro ao enviar o email. Tente novamente.";
    emailUsuario.value = "";
    userName.value = "";
  } finally {
    carregando.value = false;
  }
}
</script>
<template>
  <section class="h-screen flex flex-col items-center justify-center gap-2">
    <div class="flex flex-col items-start justify-center gap-2">
      <h1 class="text-4xl font-bold mb-4 text-left">Nuxt Email Renderer</h1>
      <UInput
        v-model="userName"
        size="lg"
        class="w-full max-w-lg mb-2"
        placeholder="Nome"
      />
      <UInput
        v-model="emailUsuario"
        size="lg"
        class="w-full max-w-lg mb-2"
        placeholder="Email"
      >
      </UInput>
      <UButton
        class="w-full mb-6"
        size="lg"
        :loading="carregando"
        :ui="{
          base: 'transition-all duration-300 ease-in-out hover:bg-primary-500',
        }"
        @click="enviarEmail"
        >Enviar</UButton
      >
    </div>
    <p
      v-if="mensagem"
      :class="enviado ? 'text-green-500' : 'text-red-500'"
      class="px-2 text-sm"
    >
      {{ mensagem }}
    </p>
  </section>
</template>
