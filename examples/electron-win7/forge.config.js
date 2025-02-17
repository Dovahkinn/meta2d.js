const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
  buildIdentifier: 'my-build-meta2d',
  packagerConfig: {
    // name: '',
    asar: true,
    // osxSign: {},
    // appCategoryType: 'public.app-category.developer-tools',
    icon: './192x192.png'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip',
      platforms: ['win32', 'linux'],
      config: {
        // the config can be an object
      }
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: './192x192.png'
        }
      },
    },
    // {
    //   name: '@electron-forge/maker-wix',
    //   config: {
    //     language: 1033,
    //     manufacturer: 'My Awesome Company'
    //   }
    // }

  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: true,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: true,
      [FuseV1Options.EnableNodeCliInspectArguments]: true,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
