import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: "http://127.0.0.1:5173/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
