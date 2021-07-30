const path = require("path")

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ["../packages/**/stories/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
        docs: false,
        actions: false,
        controls: false,
      },
    },
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
  ],
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    }
  },
}
