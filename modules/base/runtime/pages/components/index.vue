<script setup lang="ts">
const links = [{
    label: 'Form Elements',
    to: '/components/form-elements'
},
{
    label: 'Icons',
    to: '/components/icons'
},
{
    label: 'Menu',
    to: '/components/menu'
},
{
    label: 'All Nuxt UI Components',
    to: 'https://ui.nuxt.com/components/',
}]
</script>
<template>
    <PageScaffold>
        <template #left>
            <UVerticalNavigation :links="links" />
        </template>
        <NuxtPage />
    </PageScaffold>
</template>