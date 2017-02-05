module.exports = {
  target: 'electron',
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader?modules' ]
      }
    ]
  },
  entry: {
    'main/index': './src/main/index.js',
    'renderer/index': './src/renderer/index.js',
    'renderer/capture': './src/renderer/capture.js'
  },
  output: {
    filename: 'dist/[name].js'
  },
  devtool: 'source-map'
};
