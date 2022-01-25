const CopyWebpackPlugin = require("copy-webpack-plugin");

const publicPath =
  process.env.NODE_ENV === "production" ? "/" : "/";

module.exports = {
  publicPath,
  devServer: {
    proxy: 'https://swansea-cyber-clinic.gitlab.io/'
  },

  parallel: false,

  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./node_modules/sql.js-httpvfs/dist/sql-wasm.wasm",
            to: "sql.js-httpvfs/",
          },
          {
            from: "./node_modules/sql.js-httpvfs/dist/sqlite.worker.js",
            to: "sql.js-httpvfs/",
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: require.resolve("@open-wc/webpack-import-meta-loader"),
        },
      ],
    },
  },
};
