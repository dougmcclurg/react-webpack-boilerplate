module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js',
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
          { test: /\.cjsx$/, loader: 'coffee-loader!cjsx-loader' },
          { test: /\.coffee$/, loader: 'coffee-loader' }
        ]
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.cjsx']
    }
}