import GithubButton from "../components/GithubButton.vue";
export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig();

  appConfig.sidebarMenuItems.push({
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  });
  appConfig.sidebarMenuItems.push({
    label: "Dashboard",
    icon: "i-heroicons-cube-transparent-solid",
    to: "/dashboard",
  });
  appConfig.sidebarMenuItems.push({
    label: "Pages",
    icon: "i-heroicons-document-duplicate-20-solid",
    to: "/pages",
  });
  appConfig.sidebarMenuItems.push({
    label: "Components",
    icon: "i-heroicons-rectangle-group-solid",
    to: "/components/form-elements",
  });

  appConfig.toolbarActions.push(GithubButton);
});
