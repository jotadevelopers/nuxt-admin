<script setup lang="ts">
const links = [{
    label: 'Form Elements',
    to: '/components/form-elements'
},
{
    label: 'Icons',
    to: '/components/icons'
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