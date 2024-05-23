import type { DefineComponent } from "vue";

export default defineAppConfig({
  ui: {
    primary: "sky",
    icons: ["simple-icons"],
  },
  title: "Uno Admin",
  sidebarMenuItems: <SidebarMenuItems[]>[],
  toolbarActions: <unknown[]>[],
});
