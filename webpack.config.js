const config = {
    entry: './app/scripts/index.js',
    output: {
        filename: 'bundle.js',
        path: './app/dist'
    },
    module: {
        rules: [
          {test: '/\.(js|jsx)$/', use: 'babel-loader' }
      ]
  }
}

module.exports = config;