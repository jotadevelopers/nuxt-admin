import type { DefineComponent } from "vue";

export default defineAppConfig({
  ui: {
    primary: "blue",
    icons: ["simple-icons"],
  },
  title: "Uno Admin",
  sidebarMenuItems: <SidebarMenuItems[]>[],
  toolbarActions: <unknown[]>[],
});
