/** @type { import('@storybook/vue3-vite').StorybookConfig } */
export default {
  stories: ['../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-nuxt',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
  },
  docs: {
    autodocs: 'tag',
  },
};
