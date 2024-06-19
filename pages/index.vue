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
                <UButton to="/dashboard">Access Dashboard</UButton>
            </div>
        </UCard>
    </div>

</template>