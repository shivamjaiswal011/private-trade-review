import { defineConfig } from "astro/config";

// ADR-0001: static output until payments need a server.
// ADR-0002: GitHub Pages serves the site under /private-trade-review/.
export default defineConfig({
  site: "https://shivamjaiswal011.github.io",
  base: "/private-trade-review/",
});
