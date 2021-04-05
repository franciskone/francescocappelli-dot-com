module.exports = {
  stories: [
    // Paths to the story files
    '../pages/*.stories.{js,ts,jsx,tsx,mdx}',
    '../components/**/*.stories.{js,ts,jsx,tsx,mdx}',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
