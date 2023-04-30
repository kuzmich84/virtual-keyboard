const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");
const Dotenv = require("dotenv-webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

const filename = (ext) =>
  mode === "development" ? `[name].${ext}` : `[name][contenthash].${ext}`;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };
  if (mode === "production") {
    config.minimize = true;
    config.minimizer = [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["mozjpeg", { quality: 75, progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              // Svgo configuration here https://github.com/svg/svgo#configuration
              [
                "svgo",
                {
                  plugins:{
                    name: 'preset-default',
                    params: {
                      overrides: {
                        // customize plugin options
                        convertShapeToPath: {
                          convertArcs: true
                        },
                        // disable plugins
                        convertPathData: false
                      }
                    }
                  },
                },
              ],
            ],
          },
        },
        generator: [
          {
            // You can apply generator using `?as=webp`, you can use any name and provide more options
            preset: "webp",
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ["imagemin-webp"],
            },
          },
        ],
      }),
    ];
  }

  return config;
};

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    filename: `./js/${filename("js")}`,
    assetModuleFilename: "img/[hash][ext][query]",
    clean: process.env.NODE_ENV === "production",
  },
  devtool: mode === "development" ? `source-map` : false,
  devServer: {
    compress: true,
    port: 3000,
    open: "chrome",
    watchFiles: ["./src/*"],
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `./css/${filename("css")}`,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/data", to: "data" },
      ],
    }),
    new Dotenv(),
    new ESLintPlugin({
      fix: true,
    }),
    new StylelintPlugin({
      configFile: "./stylelint.config.js",
      extensions: ["scss", "sass"],
      fix: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext][query]",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: optimization(),
};
