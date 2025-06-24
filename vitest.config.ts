import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: [
      "donations/static/donations/js/**/*.test.js",
      "static/js/**/*.test.js",
      "core/static/core/js/**/*.test.js",
    ],
  },
});
