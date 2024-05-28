<template>
    <UPopover :popper="{ placement: 'bottom-end' }" mode="hover">
        <UButton variant="ghost" square
            :ui="{ rounded: 'rounded-full', color: { white: { ghost: 'hover:bg-primary-700 text-white' } } }"
            icon="i-heroicons-swatch-20-solid" color="white"></UButton>
        <template #panel>
            <div class="p-4 grid grid-cols-5 gap-2">
                <template v-for="color in primaryColors">
                    <UTooltip class="z-auto" :text="color.text">
                        <span @click="primary = color" class="w-4 h-4 rounded-full cursor-pointer"
                            :class="`bg-${color.value}-500`"></span>
                    </UTooltip>
                </template>
            </div>
        </template>
    </UPopover>
</template>
<script setup>
import colors from '#tailwind-config/theme/colors'
const appConfig = useAppConfig()
const colorMode = useColorMode()

const primaryColors = computed(() => appConfig.ui.colors.filter(color => color !== 'primary').map(color => ({ value: color, text: color, hex: colors[color][colorMode.value === 'dark' ? 400 : 500] })))
const primary = computed({
  get () {
    return primaryColors.value.find(option => option.value === appConfig.ui.primary)
  },
  set (option) {
    appConfig.ui.primary = option.value

    window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.primary)
  }
})


</script>