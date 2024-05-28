<template>
    <PageScaffold :nav-items="items">
        <NuxtPage />
    </PageScaffold>
</template>
<script setup>
const items = [{
    label: 'General',
    icon: 'i-heroicons-user',
    to: '/pages/account/',
    exact: true
}, {
    label: 'Security',
    to: '/pages/account/security',
    icon: 'i-heroicons-lock-closed',
}, {
    label: 'Notifications',
    icon: 'i-heroicons-bell-alert',
    to: '/pages/account/notifications',
}]
</script>