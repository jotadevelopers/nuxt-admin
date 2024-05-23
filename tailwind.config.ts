import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./modules/**/runtime/**/*.{vue,js,ts}"],
};
