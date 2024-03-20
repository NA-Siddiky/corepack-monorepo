const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const packagesWorkspace = path.resolve(path.join(__dirname, '../../../packages'));

// const watchFolders = [packagesWorkspace];

const nodeModulesPaths = [path.resolve(path.join(__dirname, './node_modules'))];

const config = {
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      if (
        // Add to this list whenever a new React-reliant dependency is added
        moduleName.startsWith('react') ||
        moduleName.startsWith('@react-native') ||
        moduleName.startsWith('@react-native-community') ||
        moduleName.startsWith('@your-org')
      ) {
        const pathToResolve = path.resolve(
          __dirname,
          'node_modules',
          moduleName,
        );
        return context.resolveRequest(context, pathToResolve, platform);
      }
      // Optionally, chain to the standard Metro resolver.
      return context.resolveRequest(context, moduleName, platform);
    },
    nodeModulesPaths,
  },
  //   watchFolders,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
