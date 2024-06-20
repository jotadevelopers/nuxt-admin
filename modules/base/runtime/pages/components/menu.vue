<template>
  <div class="grid md:grid-cols-2 gap-4 p-2">
    <UCard>
      <template #header>
        <h1>Breadcrumb</h1>
      </template>
      <UBreadcrumb :links="links" />
      <template #footer>
        <ULink target="_blank" to="https://ui.nuxt.com/components/breadcrumb" class="text-primary">See more...</ULink>
      </template>
    </UCard>
    <UCard>
      <template #header>
        <h1>HorizontalNavigation</h1>
      </template>
      <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
      <template #footer>
        <ULink target="_blank" to="https://ui.nuxt.com/components/horizontal-navigation" class="text-primary">See
          more...</ULink>
      </template>
    </UCard>
    <UCard>
      <template #header>
        <h1>VerticalNavigation</h1>
      </template>
      <UVerticalNavigation :links="links" />
      <template #footer>
        <ULink target="_blank" to="https://ui.nuxt.com/components/vertical-navigation" class="text-primary">See more...
        </ULink>
      </template>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Navigation',
  icon: 'i-heroicons-square-3-stack-3d'
}, {
  label: 'Breadcrumb',
  icon: 'i-heroicons-link'
}]
</script>