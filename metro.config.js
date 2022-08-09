/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { getDefaultConfig } = require('metro-config')
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues()

module.exports = {
  resetCache: true,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    ...defaultResolver,
    sourceExts: [...defaultResolver.sourceExts, 'cjs'],
  },
}
