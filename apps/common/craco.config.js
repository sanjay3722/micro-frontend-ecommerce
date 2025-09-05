const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "common",
          filename: "remoteEntry.js",
          exposes: {
            "./Button": "./src/components/Button",
            "./Card": "./src/components/Card",
            "./Footer": "./src/components/Footer",
            "./Header": "./src/components/Header",
            "./Input": "./src/components/Input",
            "./Navbar": "./src/components/Navbar",
            "./Constants": "./src/utils/constants.ts",
          },
          shared: {
            react: { singleton: true, requiredVersion: "^19.0.0" },
            "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
            "react-router-dom": { singleton: true, requiredVersion: "^7.0.0" },
          },
        })
      );

      webpackConfig.output.publicPath = "auto";

      return webpackConfig;
    },
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
};
