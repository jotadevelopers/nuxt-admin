<template>
    <UVerticalNavigation :links="links" class="border-r h-full py-2 bg-gray-100 fixed top-14 left-0 w-12">
        <template #icon="{ link }">
            <UTooltip :text="link.label" :popper="{ placement: 'right' }">
                <UIcon :name="link.icon" class="flex-shrink-0 w-5 h-5 relative text-gray-700 dark:text-gray-200" />
            </UTooltip>
        </template>
        <template #default="{ link }">
            <span class="group-hover:text-primary relative"></span>
        </template>
    </UVerticalNavigation>
</template>
<script setup lang="ts">
const links = [{
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/'
}, {
    label: 'Vertical Navigation',
    icon: 'i-heroicons-chart-bar',
    to: '#'
}, {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/'
}]
</script>