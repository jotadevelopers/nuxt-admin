<template>
    <div class="grid grid-cols-3 gap-2 p-2">
        <template v-for="page in pages">
            <nuxt-link :to="page.to" target="_blank">
                <UCard>
                    <UIcon :name="page.icon" class="text-primary h-8 w-8"></UIcon>
                    <h1 class="text-gray-800 font-medium text-lg">{{ page.title }}</h1>
                </UCard>
            </nuxt-link>

        </template>
    </div>
</template>
<script setup lang="ts">
const pages = [{
    title: 'Login',
    icon: 'i-heroicons-arrow-left-end-on-rectangle-16-solid',
    to: '/login'
}, {
    title: 'Register',
    icon: 'i-heroicons-user-plus-20-solid',
    to: '/register'
}, {
    title: 'Forgot Password',
    icon: 'i-heroicons-arrow-path-rounded-square-16-solid',
    to: '/forgot-password'
}, {
    title: 'Error',
    icon: 'i-heroicons-exclamation-triangle-16-solid',
    to: '/pages/error'
}]
</script>