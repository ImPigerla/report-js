let {distPath, srcPath, publicPath} = require('../config'),
  isProduct = process.env.NODE_ENV === 'production';

console.log('======================== Production mode:', isProduct, '========================');

module.exports = {
  mode: isProduct ? 'production' : 'development',
  devtool: isProduct ? 'source-map' : 'inline-source-map',
  output: {
    filename: `[name].js?v=[${isProduct ? 'contenthash' : 'hash'}]`,
    path: distPath,
    publicPath: publicPath,
    pathinfo: false // build performance
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: srcPath,
        use: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'src': srcPath
    }
  }
}
