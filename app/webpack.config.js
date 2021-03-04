module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    symlinks: false
  },
  devServer: {
    port: 4043,
    host: '0.0.0.0',

    publicPath: '/'
  }
};
