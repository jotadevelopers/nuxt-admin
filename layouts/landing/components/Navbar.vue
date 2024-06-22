<script setup>
const links = [
    { label: 'Home', to: '/' },
    { label: 'Documentation', to: 'https://uno-admin.vercel.app/docs', target: '_blank' }
]
</script>
<template>
    <header
        class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
            <div class="lg:flex-1 flex items-center gap-1.5">
                <ULink to="/" class="flex items-center">
                    <img src="@/assets/logo.png" class="h-6 mr-3 sm:h-9" alt="Uno Admin Logo">
                    <span class="self-center text-xl font-semibold whitespace-nowrap text-primary dark:text-white">Uno
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
                <UButton to="/login" icon="i-heroicons-arrow-left-on-rectangle" color="primary">Login
                </UButton>
            </div>
        </div>
    </header>

</template>
<style scoped>
header {
    height: var(--header-height)
}
</style>