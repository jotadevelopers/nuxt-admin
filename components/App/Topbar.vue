<template>
    <header
        class="fixed top-0 right-0 left-0 w-full flex bg-blue-600 justify-between items-center text-white p-2 h-14 shadow-md bg-white border-b-[0.5] border-gray-100">
        <div class="flex items-center gap-2">
            <img src="@/assets/logo.png" alt="Logo" class="h-8" />
            <h1 class="font-medium">Uno Admin</h1>
        </div>

        <div class="flex items-center gap-1">
            <UButton variant="ghost" square
                :ui="{ rounded: 'rounded-full', color: { white: { ghost: 'hover:bg-blue-700 text-white' } } }"
                icon="i-heroicons-magnifying-glass-16-solid" color="white"></UButton>
            <UButton variant="ghost" square
                :ui="{ rounded: 'rounded-full', color: { white: { ghost: 'hover:bg-blue-700 text-white' } } }"
                icon="i-heroicons-cog-8-tooth-16-solid" color="white"></UButton>
            <UButton variant="ghost" square
                :ui="{ rounded: 'rounded-full', color: { white: { ghost: 'hover:bg-blue-700 text-white' } } }"
                icon="i-heroicons-question-mark-circle" color="white"></UButton>
            <img src="@/assets/user-avatar.png" alt="User Avatar" class="h-8 w-8 rounded-full ml-4" />
        </div>
    </header>
</template>