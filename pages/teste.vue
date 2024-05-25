<template>
    <div>
        <PageScaffold :nav-items="links">
            <template #left>
                <UVerticalNavigation :links="links" />
            </template>
            dçaskdçlaskçl
        </PageScaffold>
    </div>
</template>
<script setup lang="ts">
const links = [{
    label: 'Horizontal Navigation',
    icon: 'i-heroicons-chart-bar',
    to: '/teste'
}, {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/components/command-palette'
}]
</script>