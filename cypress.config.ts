import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    viewportWidth: 1440,
    viewportHeight: 920,
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: "http://127.0.0.1:5173/",
    viewportWidth: 1440,
    viewportHeight: 920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
