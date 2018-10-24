module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: ['.storybook/**', 'stories/**'],
      },
    ],
  },
};
