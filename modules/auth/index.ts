import { createResolver, defineNuxtModule, extendPages } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "uno-auth",
  },
  setup(_options, _nuxtApp) {
    const { resolve } = createResolver(import.meta.url);
    extendPages((pages) => {
      pages.push({
        name: "login",
        path: "/login",
        file: resolve("./runtime/pages/login.vue"),
      });
      pages.push({
        name: "register",
        path: "/register",
        file: resolve("./runtime/pages/register.vue"),
      });
      pages.push({
        name: "forgot-password",
        path: "/forgot-password",
        file: resolve("./runtime/pages/forgot-password.vue"),
      });
    });
  },
});
