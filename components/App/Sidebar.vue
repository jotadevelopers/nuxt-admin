<template>
    <div class="flex h-full top-12 left-0 fixed z-20">
        <div
            class="flex flex-col gap-2 text-gray-400 items-center border-r h-full py-2 bg-gray-100 dark:bg-slate-800 dark:border-r-gray-700 w-12">
            <template v-for="(link, key) in appConfig.sidebarMenuItems">
                <UTooltip class="z-auto" :text="link.label" :popper="{ placement: 'right' }">
                    <ULink :to="link.to" active-class="text-white bg-primary-500 dark:bg-slate-600"
                        class="w-full hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-gray-700 dark:hover:text-white text-lg p-1 rounded-md flex items-center justify-center">
                        <UAvatar v-if="link.img" :src="link.img" class="w-8 h-6 " alt="Avatar" size="xs" />
                        <UIcon v-else :name="link.icon!" class="w-8 h-6"></UIcon>
                    </ULink>
                </UTooltip>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
const appConfig = useAppConfig()
</script>