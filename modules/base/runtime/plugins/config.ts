import ToggleDarkMode from "../components/ToggleDarkMode.vue";
import ConfigButton from "../components/ConfigButton.vue";
import GithubButton from "../components/GithubButton.vue";
export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig();
  appConfig.sidebarMenuItems.push({
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  });
  appConfig.toolbarActions.push(GithubButton);
  appConfig.toolbarActions.push(ToggleDarkMode);
  appConfig.toolbarActions.push(ConfigButton);
});
