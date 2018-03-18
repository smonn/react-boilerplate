module.exports = {
  module: {
    rules: [
      {
        // You can use /\.jsx?$/ here to allow .jsx file extensions.
        // If you do, you will also need to set resolve.extensions to
        // > ['.js','.json','.jsx']
        // so Webpack can load the .jsx files.
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
