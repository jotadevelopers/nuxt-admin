<script setup lang="ts">
import type { HorizontalNavigationLink } from '#ui/types'
const props = defineProps<{
    navItems?: HorizontalNavigationLink[] | HorizontalNavigationLink[][]
}>();
const leftOpen = ref(true);

</script>
<template>
    <div class="stick">
        <div class="w-full h-12 bg-white sticky top-12 flex flex-row gap-2 border-b z-10">
            <UButton v-if="$slots.left" class="my-2" @click="() => leftOpen = !leftOpen"
                icon="i-heroicons-bars-3-16-solid" size="xs" variant="link">
            </UButton>
            <UHorizontalNavigation :links="props.navItems" class="" />
        </div>
        <div class="flex flex-row">
            <div v-if="$slots.left" v-show="leftOpen" class="sticky top-24 w-[220px] p-1">
                <slot name="left" />
            </div>
            <div class="w-full h-auto p-2">
                <slot />
            </div>
        </div>
    </div>
</template>