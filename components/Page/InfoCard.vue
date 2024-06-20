<script setup lang="ts">
const props = defineProps<{ title: string, description: string, info: string, icon: string, color: string }>();
</script>
<template>
    <UCard>
        <div class="flex flex-row">
            <div class="w-full">
                <h1 class="text-slate-500">{{ props.title }}</h1>
                <p class="font-medium text-gray-800">{{ props.description }}</p>
                <small class="text-primary">{{ props.info }}</small>
            </div>
            <div>
                <UButton :icon="props.icon" size="sm" :color="props.color" variant="solid" square />
            </div>
        </div>

    </UCard>
</template>