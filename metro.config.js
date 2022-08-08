/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { getDefaultConfig } from 'metro-config'
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues()

export const resetCache = true
export const transformer = {
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
}
export const resolver = {
  ...defaultResolver,
  sourceExts: [...defaultResolver.sourceExts, 'cjs'],
}
