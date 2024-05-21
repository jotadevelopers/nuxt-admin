<script setup lang="ts">
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

<template>
    <UBreadcrumb class="bg-gray-100 p-2 rounded-md" :links="links"
        :ui="{ active: 'text-blue-500 dark:text-blue-400', }" />
</template>
