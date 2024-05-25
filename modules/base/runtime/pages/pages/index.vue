<template>
    <div>
        <PageScaffold :nav-items="[{ label: 'Pages', to: '/pages' }]">
            <template #left>
                <UVerticalNavigation :links="links" />
            </template>
            <slot />
        </PageScaffold>
    </div>
</template>
<script setup lang="ts">
const links = [{
    label: 'Login',
    icon: 'i-heroicons-star-solid',
    to: '/login'
}, {
    label: 'Register',
    icon: 'i-heroicons-star-solid',
    to: '/register'
}, {
    label: 'Forgot Password',
    icon: 'i-heroicons-star-solid',
    to: '/forgot-password'
}, {
    label: 'Error',
    icon: 'i-heroicons-star-solid',
    to: '/pages/error'
}]
</script>