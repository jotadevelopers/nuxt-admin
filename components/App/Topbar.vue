<script setup lang="ts">
const appConfig = useAppConfig()
</script>
<template>
    <header
        :class="`fixed top-0 right-0 z-50 left-0 w-full flex bg-primary-600 dark:bg-slate-950 justify-between items-center text-white p-2 h-12 shadow-sm border-b-[0.5] border-gray-100`">
        <div class="flex items-center gap-2">
            <img src="@/assets/logo.png" alt="Logo" class="h-8 dark:bg-gray-600 dark:rounded-full" />
            <h1 class="font-medium">{{ appConfig.title }}</h1>
        </div>
        <div class="flex items-center gap-1 px-2">
            <AppToggleDarkMode v-if="appConfig.toggleDarkMode" />
            <AppColorPicker v-if="appConfig.colorPicker" />
            <template v-for="component in appConfig.toolbarActions">
                <component :is="component" />
            </template>
            <UserMenu />
        </div>
    </header>
</template>