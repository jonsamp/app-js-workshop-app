// Tailwind configuration: https://tailwindcss.com/docs/configuration

const { palette } = require('@expo/styleguide-native/dist/styles/palette');
const {
  lightTheme,
  darkTheme,
} = require('@expo/styleguide-native/dist/styles/themes');

function createTailwindDarkColors(palette) {
  return Object.keys(palette).reduce((acc, key) => {
    return {
      ...acc,
      [`${key}-dark`]: palette[key],
    };
  }, {});
}

module.exports = {
  content: ['**/*.tsx'],
  theme: {
    colors: {
      ...palette.light,
      ...createTailwindDarkColors(palette.dark),
    },
    extend: {
      backgroundColor: {
        ...lightTheme.background,
        ...createTailwindDarkColors(darkTheme.background),
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
