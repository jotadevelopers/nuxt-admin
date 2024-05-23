export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig();
  appConfig.sidebarMenuItems.push({
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  });
});
