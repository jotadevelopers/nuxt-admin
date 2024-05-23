import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./src/modules/**/presentation/**/*.{vue,js,ts}"],
};
