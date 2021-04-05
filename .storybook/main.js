module.exports = {
  stories: [
    // Paths to the story files
    '../pages/*.stories.mdx',
    '../pages/*.stories.js',
    '../components/*.stories.js',
    '../components/**/*.stories.mdx',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
