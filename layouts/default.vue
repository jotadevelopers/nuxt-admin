<template>
    <div class="w-full min-h-screen bg-gray-50 dark:bg-slate-700" :class="`text-md`">
        <app-topbar></app-topbar>
        <app-sidebar></app-sidebar>
        <main class="mt-12 ml-12 w-auto ">
            <NuxtPage />
        </main>
        <app-footer></app-footer>
        <USlideovers />
        <UNotifications />
    </div>
</template>
<script setup>
useHead({ title: 'Uno Admin Template' })
const appConfig = useAppConfig();
</script>