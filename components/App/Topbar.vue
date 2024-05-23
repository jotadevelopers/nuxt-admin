<script setup lang="ts">

import ToggleDarkMode from '@/@core/components/ToggleDarkMode.vue';
import GithubButton from '@/@core/components/GithubButton.vue';
import ConfigButton from '@/@core/components/ConfigButton.vue';
const config = useAppConfig()

</script>
<template>
    <header
        :class="`fixed top-0 right-0 left-0 w-full flex bg-primary-600 dark:bg-slate-950 justify-between items-center text-white p-2 h-14 shadow-md border-b-[0.5] border-gray-100`">
        <div class="flex items-center gap-2">
            <img src="@/assets/logo.png" alt="Logo" class="h-8" />
            <h1 class="font-medium">{{ config.title }}</h1>
        </div>
        <div class="flex items-center gap-1 px-2">
            <GithubButton />
            <ToggleDarkMode />
            <ConfigButton />
            <img src="@/assets/user-avatar.png" alt="User Avatar" class="h-8 w-8 rounded-full ml-4" />
        </div>
    </header>
</template>