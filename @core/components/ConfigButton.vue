<template>
    <UPopover :popper="{ placement: 'bottom-end' }" mode="hover">
        <UButton variant="ghost" square
            :ui="{ rounded: 'rounded-full', color: { white: { ghost: 'hover:bg-primary-700 text-white' } } }"
            icon="i-heroicons-cog-8-tooth-16-solid" color="white"></UButton>
        <template #panel>
            <div class="p-4 w-64">
                <div class="flex gap-1 items-center justify-between text-gray-500">
                    <span class="text-sm w-8">-A</span>
                    <URange :step="20" :model-value="0" />
                    <span class="text-lg w-8">+A</span>
                </div>
            </div>
        </template>
    </UPopover>
</template>