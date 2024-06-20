<template>
    <div class="p-2 h-screen flex flex-col items-center ">
        <UCard>
            <div class="space-y-4 text-center">
                <img src="@/assets/logo.png" alt="Logo" class="mx-auto h-16 dark:bg-gray-600 dark:rounded-full" />
                <h1 class="text-primary text-3xl">Wellcome to Nuxt Admin</h1>
                <p class="font-medium text-slate-600">A Free modular admin template based on NuxtJs and Nuxt UI,
                    carefully crafted and
                    ready for production
                </p>
                <div class="flex flex-row gap-4 items-center justify-center">
                    <span class="flex flex-col items-center justify-center shadow-md font-medium border p-2 rounded-md">
                        <img src="@/assets/nuxt-icon.svg" class="h-16" /> Nuxt 3 + Nuxt UI</span>
                    <span class="flex flex-col items-center justify-center shadow-md font-medium border p-2 rounded-md">
                        <img src="@/assets/js-icon.png" class="h-16" /> Javascript</span>
                    <span class="flex flex-col items-center justify-center shadow-md font-medium border p-2 rounded-md">
                        <img src="@/assets/typescript-icon.png" class="h-16" /> Typescript</span>
                </div>
                <UButton size="xl" to="/dashboard">Access Dashboard</UButton>
            </div>
        </UCard>
    </div>

</template>