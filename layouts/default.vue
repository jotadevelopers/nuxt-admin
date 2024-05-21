<template>
    <div class="w-full min-h-screen bg-gray-50">
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