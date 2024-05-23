import defu from "defu";
import { addPlugin, createResolver, defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "nuxt-admin-base",
  },
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);
    addPlugin(resolve("./runtime/plugins/config.ts"));
  },
});
