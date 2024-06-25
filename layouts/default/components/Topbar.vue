<script setup lang="ts">
const appConfig = useAppConfig()
</script>
<template>
    <header
        class="w-full max-h-14 min-h-14 flex bg-primary-600 dark:bg-transparent dark:border-b-gray-500 dark:border-b justify-between items-center text-white px-2">
        <div class="flex items-center dark:text-primary">
            <h1>{{ appConfig.title }}</h1>
        </div>
        <div class="flex items-center justify-end gap-1">
            <AppToggleDarkMode v-if="appConfig.toggleDarkMode" />
            <AppColorPicker v-if="appConfig.colorPicker" />
            <template v-for="component in appConfig.toolbarActions">
                <component :is="component" />
            </template>
            <UserMenu />
        </div>
    </header>
</template>