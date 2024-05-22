<script setup>
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>
<template>
    <UButton variant="ghost" square @click="isDark = !isDark"
        :ui="{ rounded: 'rounded-full', color: { white: { ghost: 'hover:bg-primary-700 text-white' } } }"
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" target="_blank" color="white">
    </UButton>
</template>