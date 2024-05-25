<script setup lang="ts">
import type { HorizontalNavigationLink } from '#ui/types'
const props = defineProps<{
    navItems?: HorizontalNavigationLink[] | HorizontalNavigationLink[][]
}>();
const leftOpen = ref(true);

</script>
<template>
    <div class="fixed w-full">
        <div class="flex flex-row border-b items-center px-2">
            <UButton v-if="$slots.left" class="my-2" @click="() => leftOpen = !leftOpen"
                icon="i-heroicons-bars-3-16-solid" size="xs" variant="link">
            </UButton>
            <UHorizontalNavigation :links="props.navItems" class="" />
        </div>
        <div class="flex flex-row">
            <div v-if="$slots.left" v-show="leftOpen" class="w-[220px] border-r h-screen p-1">
                <slot name="left" />
            </div>
            <div class="w-full p-1">
                <slot />
            </div>
        </div>
    </div>
</template>