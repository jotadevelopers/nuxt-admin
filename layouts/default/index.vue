<template>
    <div class="min-h-screen flex flex-col">
        <div class="h-full min-h-[0px] basis-0 flex-1">
            <div class="flex h-full">
                <div class="w-14 h-full flex flex-col text-gray-400">
                    <div
                        class="flex items-center justify-center max-h-14 min-h-14 bg-primary-600 dark:bg-transparent dark:border-b border-gray-600">
                        <img src="@/assets/logo.png" alt="Logo" class="h-8 w-8 dark:bg-primary-600 dark:rounded-full" />
                    </div>
                    <Sidebar />
                </div>
                <div class="w-full flex h-full overflow-hidden">
                    <div class="h-full w-full">
                        <div class="h-full flex flex-col flex-1 w-full overflow-x-hidden">
                            <Topbar />
                            <main class="h-full flex flex-col flex-1 w-full overflow-x-hidden">
                                <NuxtPage />
                            </main>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <USlideovers />
    <UNotifications />
</template>
<script setup lang="ts">
import Topbar from './components/Topbar.vue'
import Sidebar from './components/Sidebar.vue';
useHead({ title: 'Uno Admin Template' });


</script>
<style>
:root {
    --header-height: 120px
}
</style>