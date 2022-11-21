import { StorybookViteConfig } from "@storybook/builder-vite";
import { mergeConfig } from "vite";

export const config: StorybookViteConfig = {
  async viteFinal(config, options) {
    return mergeConfig(config, {});
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
