<script setup lang="ts">
import type { HorizontalNavigationLink } from '#ui/types'
const props = defineProps<{
    navItems?: HorizontalNavigationLink[] | HorizontalNavigationLink[][]
}>();
const leftOpen = ref(true);

</script>
<template>
    <div>
        <div v-if="$slots.left || props.navItems?.length"
            class="w-full h-12 sticky top-0 flex flex-row gap-2 border-b bg-white dark:bg-zinc-900 dark:border-b-gray-600 z-10">
            <UButton v-if="$slots.left" class="my-2 " @click="() => leftOpen = !leftOpen"
                icon="i-heroicons-bars-3-16-solid" size="xs" variant="link" color="gray">
            </UButton>
            <UHorizontalNavigation :links="props.navItems" />
        </div>
        <div class="flex flex-row ">
            <div v-if="$slots.left" v-show="leftOpen" class="w-[220px] p-2 fixed">
                <slot name="left" />
            </div>
            <div class="w-full p-2" :class="{ 'ml-[220px]': ($slots.left && leftOpen) }">
                <slot />
            </div>
        </div>
    </div>
</template>