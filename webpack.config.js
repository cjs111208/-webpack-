let webpack = require("webpack");

module.exports = {
  entry: __dirname + "/app/main.js", // 已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public", // 打包后的文件存放的地方
    filename: "bundle.js" // 打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./public", // 默认webpack-dev-server会为跟文件提供本地服务器
    historyApiFallback: true, // 单页面时非常有用，所有的跳转指向index.html
    inline: true, // 设置true源文件改变时会自动刷新页面
    port: 7777 // 设置默认监听端口，如果省略默认为8080
  },
  module: {
    rules: [
      // es6编译
      {
        test: /(\.jsx|\.js)$/, // 一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
        use: {
          loader: "babel-loader" // loader的名称（必须）
        },
        exclude: /node_modules/
      },
      //   设置css模块化
      {
        test: /(\.css|\.scss|\.less)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]" // 指定css的类名格式
              } // 指定启用css modules
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },
  plugins: [new webpack.BannerPlugin("版权所有，翻版必究")]
};
