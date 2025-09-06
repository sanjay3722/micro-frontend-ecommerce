const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "checkout",
          filename: "remoteEntry.js",
          exposes: {
            "./CheckoutApp": "./src/App",
          },
          shared: {
            react: { singleton: true, requiredVersion: "^19.0.0" },
            "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
            "react-router-dom": { singleton: true, requiredVersion: "^6.0.0" },
          },
        }),
      );

      webpackConfig.output.publicPath = "auto";

      return webpackConfig;
    },
  },
  devServer: {
    port: 3005,
    historyApiFallback: true,
  },
};
