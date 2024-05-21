<script setup lang="ts">
import { AppConfig } from '#components';
const slideover = useSlideover();
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
    <header
        :class="`fixed top-0 right-0 left-0 w-full flex bg-primary-600 dark:bg-slate-950 justify-between items-center text-white p-2 h-14 shadow-md border-b-[0.5] border-gray-100`">
        <div class="flex items-center gap-2">
            <img src="@/assets/logo.png" alt="Logo" class="h-8" />
            <h1 class="font-medium">Uno Admin</h1>
        </div>
        <div class="flex items-center gap-1 px-2">
            <UButton variant="ghost" square
                :ui="{ rounded: 'rounded-full', color: { white: { ghost: 'hover:bg-primary-700 text-white' } } }"
                icon="i-simple-icons-github" target="_blank" color="white"
                to="https://github.com/jotadevelopers/uno-admin"></UButton>
            <UButton variant="ghost" square @click="isDark = !isDark"
                :ui="{ rounded: 'rounded-full', color: { white: { ghost: 'hover:bg-primary-700 text-white' } } }"
                :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" target="_blank" color="white">
            </UButton>
            <UButton variant="ghost" square @click="() => slideover.open(AppConfig)"
                :ui="{ rounded: 'rounded-full', color: { white: { ghost: 'hover:bg-primary-700 text-white' } } }"
                icon="i-heroicons-cog-8-tooth-16-solid" color="white"></UButton>
            <img src="@/assets/user-avatar.png" alt="User Avatar" class="h-8 w-8 rounded-full ml-4" />
        </div>
    </header>
</template>