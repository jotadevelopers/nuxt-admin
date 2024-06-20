<script setup lang="ts">
import avatar from '~/assets/user-avatar.png';

const config = useRuntimeConfig();

const items = reactive([
    [
        {
            label: 'User Admin',
            slot: 'account',
            disabled: true
        }],
    [{
        label: 'Account',
        icon: 'i-heroicons-user-circle',
        to: '/pages/account/',
        exact: true
    }, {
        label: 'Security',
        icon: 'i-heroicons-lock-closed-16-solid',
        to: '/pages/account/security'
    }], [{
        label: 'Logout',
        icon: 'i-heroicons-arrow-left-on-rectangle',
        to: '/login'
    }]
]);
</script>

<template>
    <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
        :popper="{ placement: 'bottom-end' }">
        <UAvatar :src="avatar" size="xs" class="mx-2 cursor-pointer" />
        <template #account="{ item }">
            <div class="flex gap-2">
                <UAvatar :src="avatar" size="xs" class="mx-2 cursor-pointer bg-gray-500" />
                <p class="truncate font-medium text-gray-900 dark:text-white">{{ item.label }}</p>
            </div>
        </template>
        <template #item="{ item }">
            <span class="truncate">{{ item.label }}</span>
            <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
        </template>
    </UDropdown>
</template>