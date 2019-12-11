// var path = require("path");
// var SRC_DIR = path.join(__dirname, "/public/src");
// var DIST_DIR = path.join(__dirname, "/public/dist");

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: "bundle.js",
//     path: DIST_DIR
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?/,
//         include: SRC_DIR,
//         loader: "babel-loader",
//         query: {
//           presets: ["react", "es2015"]
//         }
//       }
//     ]
//   }
// };

// Was in package.json
// "start": "nodemon server/index.js",
// "build": "webpack --mode production"

const path = require("path");
const DIST_FOLDER = path.join(__dirname, "/public/dist");
const ENTRY_FILE = "/public/src/index.jsx";
const config = {
  entry: ENTRY_FILE,
  output: {
    filename: "bundle.js",
    path: DIST_FOLDER
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  }
};
if (process.env.NODE_ENV === "development") {
  config["mode"] = "development";
  config["watch"] = true;
  config["devServer"] = {
    contentBase: DIST_FOLDER,
    compress: true,
    port: 9000
  };
} else if (process.env.NODE_ENV === "production") {
  config["mode"] = "production";
}
module.exports = config;
