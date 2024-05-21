<template>
    <div
        class="flex flex-col gap-2 text-gray-700 items-center border-r h-full py-2 bg-gray-100 fixed top-14 left-0 w-12">
        <template v-for="(link, key) in links">
            <UTooltip class="z-auto" :text="link.label" :popper="{ placement: 'right' }">
                <ULink :to="link.to" active-class="text-white bg-blue-500"
                    class="w-full hover:bg-gray-200 hover:text-gray-700 text-lg p-1 rounded-md flex items-center justify-center">
                    <UAvatar v-if="link.img" :src="link.img" class="w-8 h-6 " alt="Avatar" size="xs" />
                    <UIcon v-else :name="link.icon!" class="w-8 h-6"></UIcon>
                </ULink>
            </UTooltip>
        </template>

    </div>
</template>
<script setup lang="ts">
const links = [{
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/'
}, {
    label: 'Vertical Navigation',
    icon: 'i-heroicons-chart-bar',
    to: '/teste'
}, {
    label: 'Command Palette',
    img: 'https://avatars.githubusercontent.com/u/739984?v=4',
    to: '/teste'
}]
</script>