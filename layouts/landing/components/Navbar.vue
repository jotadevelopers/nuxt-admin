<script setup>
const mobileMenuOpen = ref(false);
const links = [
    { label: 'Home', to: '/' },
    { label: 'Documentation', to: '/https://uno-admin.vercel.app/docs' }
]
</script>
<template>
    <header
        class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
            <div class="lg:flex-1 flex items-center gap-1.5">
                <ULink to="/" class="flex items-center">
                    <img src="@/assets/logo.png" class="h-6 mr-3 sm:h-9" alt="Uno Admin Logo">
                    <span
                        class="self-center hidden md:block text-xl font-semibold whitespace-nowrap text-primary dark:text-white">Uno
                        Admin</span>
                </ULink>
            </div>
            <nav class="">
                <ul class="items-center gap-x-8 hidden lg:flex w-auto">
                    <ULink active-class="text-primary" class="font-medium" :target="link.target" exact
                        v-for="(link, idx) in links" :key="idx" :to="link.to">{{
                            link.label
                        }}</ULink>
                </ul>
            </nav>
            <div class="flex items-center justify-end lg:flex-1 gap-1.5">
                <UButton target="_blank" to="https://github.com/jotadevelopers/uno-admin" icon="i-heroicons-star"
                    variant="outline" color="purple">Star on Github</UButton>
                <UButton icon="i-heroicons-bars-3-20-solid" class="md:hidden" variant="ghost" color="gray"
                    @click="mobileMenuOpen = !mobileMenuOpen">
                </UButton>
            </div>
        </div>
    </header>
    <USlideover v-model="mobileMenuOpen" side="left">
        <div class="flex items-center justify-end">
            <UIcon name="i-heroicons-x-mark-16-solid" @click="mobileMenuOpen = false" class="cursor-pointer m-4">
            </UIcon>
        </div>
        <div class="px-2">
            <UVerticalNavigation :links>
                <template #default="{ link }">
                    <span class="group-hover:text-primary relative w-full" @click="mobileMenuOpen = false">{{ link.label
                        }}</span>
                </template>
            </UVerticalNavigation>
        </div>
    </USlideover>
</template>
<style scoped>
header {
    height: var(--header-height)
}
</style>