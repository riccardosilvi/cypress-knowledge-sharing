import { defineConfig } from "vite";
import replace from "@rollup/plugin-replace";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    replace({
      values: {
        "process.env.REACT_APP_SC_ATTR": JSON.stringify("data-styled"),
        "process.env.SC_ATTR": JSON.stringify("data-styled"),
        "process.env.REACT_APP_SC_DISABLE_SPEEDY": JSON.stringify("false"),
        "process.env.SC_DISABLE_SPEEDY": JSON.stringify("false"),
      },
      preventAssignment: true,
    }),
    react(),
  ],
});
