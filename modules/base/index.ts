import {
  addPlugin,
  createResolver,
  defineNuxtModule,
  extendPages,
} from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "nuxt-admin-base",
  },
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);
    addPlugin(resolve("./runtime/plugins/config.ts"));
    addPlugin(resolve("./runtime/plugins/ui.ts"));
    extendPages((pages) => {
      pages.push({
        name: "dashboard",
        path: "/dashboard",
        file: resolve("./runtime/pages/dashboard.vue"),
      });
      pages.push({
        name: "pages",
        path: "/pages",
        file: resolve("./runtime/pages/pages.vue"),
      });
      pages.push({
        name: "pages-error",
        path: "/pages/error",
        file: resolve("./runtime/pages/error.vue"),
      });
      pages.push({
        name: "pages-account",
        path: "/pages/account",
        file: resolve("./runtime/pages/account/index.vue"),
        children: [
          {
            name: "pages-account-general",
            path: "",
            file: resolve("./runtime/pages/account/general.vue"),
          },
          {
            name: "pages-account-security",
            path: "security",
            file: resolve("./runtime/pages/account/security.vue"),
          },
          {
            name: "pages-account-notifications",
            path: "notifications",
            file: resolve("./runtime/pages/account/notifications.vue"),
          },
        ],
      });
      pages.push({
        name: "components",
        path: "/components",
        file: resolve("./runtime/pages/components/index.vue"),
        children: [
          {
            name: "components-form-elements",
            path: "form-elements",
            file: resolve("./runtime/pages/components/form-elements.vue"),
          },
          {
            name: "components-icons",
            path: "icons",
            file: resolve("./runtime/pages/components/icons.vue"),
          },
          {
            name: "components-menu",
            path: "menu",
            file: resolve("./runtime/pages/components/menu.vue"),
          },
        ],
      });
    });
  },
});
