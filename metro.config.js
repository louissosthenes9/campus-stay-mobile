const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

// Apply Reanimated first, then NativeWind
const reanimatedConfig = wrapWithReanimatedMetroConfig(config);
const finalConfig = withNativeWind(reanimatedConfig, { input: './global.css' });

module.exports = finalConfig;
