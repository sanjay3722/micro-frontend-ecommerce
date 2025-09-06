const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "auth",
          filename: "remoteEntry.js",
          remotes: {
            common: "common@http://localhost:3002/remoteEntry.js",
          },
          exposes: {
            "./AuthApp": "./src/App",
          },
          shared: {
            react: { singleton: true, requiredVersion: "^19.0.0" },
            "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
            "react-router-dom": { singleton: true, requiredVersion: "^6.0.0" },
          },
        }),
      );

      webpackConfig.output.publicPath = "auto";
      webpackConfig.output.crossOriginLoading = "anonymous";

      return webpackConfig;
    },
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
