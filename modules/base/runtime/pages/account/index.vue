<template>
    <PageScaffold :nav-items="items">

    </PageScaffold>
</template>
<script setup>
const items = [{
    label: 'General',
    icon: 'i-heroicons-user'
}, {
    label: 'Security',
    icon: 'i-heroicons-lock-closed',
}, {
    label: 'Notifications',
    icon: 'i-heroicons-bell-alert',
}]
</script>