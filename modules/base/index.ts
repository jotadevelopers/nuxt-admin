import defu from "defu";
import { addPlugin, createResolver, defineNuxtModule, extendPages } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "nuxt-admin-base",
  },
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);
    addPlugin(resolve("./runtime/plugins/config.ts"));
    extendPages(pages => {
      pages.push({
        name: 'get-started',
        path: '/get-started',
        file: resolve('./runtime/pages/get-started.vue')
      })
    })
  },
});
