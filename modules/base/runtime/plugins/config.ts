import ToggleDarkMode from "../components/ToggleDarkMode.vue";
import ColorPicker from "../components/ColorPicker.vue";
import GithubButton from "../components/GithubButton.vue";
export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig()
  if (import.meta.client) {
    appConfig.ui.primary = window.localStorage.getItem('nuxt-ui-primary') || appConfig.ui.primary
  }

  appConfig.sidebarMenuItems.push({
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  });

  appConfig.toolbarActions.push(GithubButton);
  appConfig.toolbarActions.push(ToggleDarkMode);
  appConfig.toolbarActions.push(ColorPicker);

});
