import { StorybookViteConfig } from "@storybook/builder-vite";
import { mergeConfig } from "vite";

export const config: StorybookViteConfig = {
  async viteFinal(config) { 
    const tsconfigPaths = require("vite-tsconfig-paths").default;
    const path = require("path");
    config.plugins = (config.plugins) ? config.plugins : [];
    config.plugins.push(
      tsconfigPaths({
        projects: [
          path.resolve(path.dirname(__dirname), "../../packages/components", "tsconfig.json"), 
          path.resolve(path.dirname(__dirname), ".", "tsconfig.json")
        ],
      })
    );
    return config;
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
};

export default config;
