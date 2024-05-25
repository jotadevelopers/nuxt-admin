<template>
  <UContainer class="space-y-6 max-w-3xl flex flex-col items-center justify-center h-screen">
    <h1 class="text-primary text-9xl">400</h1>
    <p class="text-slate-800 text-3xl font-medium ">Page Not Found</p>
    <p class="text-gray-500 text-center text-lg">The page you are attempting to reach is currently not available. This
      may be
      because the
      page does not exist or has been moved.</p>
    <UButton to="/">BACK TO HOME PAGE</UButton>
  </UContainer>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'blank',
})
</script>