<template>
  <nav class="z-10 h-full  flex flex-row overflow-y-auto border-r dark:border-gray-600">
    <ul class="w-14 flex flex-col gap-y-1 justify-start items-center py-2 h-full">
      <li v-for="(link, key) in appConfig.sidebarMenuItems" :key>
        <UTooltip class="z-auto" :text="link.label" :popper="{ placement: 'right' }">
          <ULink :to="link.to" active-class="text-white bg-primary-500 dark:bg-primary-800"
            class="w-full hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-gray-700 dark:hover:text-white text-lg p-1 rounded-md flex items-center justify-center">
            <UAvatar v-if="link.img" :src="link.img" class="w-12 h-12 " alt="Avatar" size="xs" />
            <UIcon v-else :name="link.icon!" class="w-6 h-6"></UIcon>
          </ULink>
        </UTooltip>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig()
</script>

<style></style>