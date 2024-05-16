import { dirname, join } from "path";
import { mergeConfig } from "vite";

export const config = {
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

  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    "@chromatic-com/storybook"
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  core: {},

  features: {
    storyStoreV7: true,
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
