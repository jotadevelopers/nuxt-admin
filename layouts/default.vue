<template>
    <div class="w-full min-h-screen bg-gray-50">
        <app-topbar class=""></app-topbar>
        <app-sidebar></app-sidebar>
        <main class="pt-14 ml-12 p-4 bg-gray-500 min-h-screen">
            <slot />
        </main>
        <app-footer></app-footer>
        <USlideovers />
        <UNotifications />
    </div>
</template>