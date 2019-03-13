module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.(jpg|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10*1024
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }

    ],

  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
