<template>
    <div class="w-full min-h-screen bg-gray-50 dark:bg-slate-700">
        <app-topbar class=""></app-topbar>
        <app-sidebar></app-sidebar>
        <main class="pt-16 ml-12 p-2 min-h-screen">
            <slot />
        </main>
        <app-footer></app-footer>
        <USlideovers />
        <UNotifications />
    </div>
</template>
<script setup>
useHead({title: 'Uno Admin Template'})
</script>