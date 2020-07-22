const path = require('path')

const config = {
    target:'node',
    mode:'development',
    entry: {
        index:'./src/App.js'
    },
    output:{
        path: path.resolve( __dirname, 'src') + 'E:\hassan\SSRAPP\SSR\src\App.js',
        filename:'index.js',
        libraryTarget:'umd',
        publicpath:'/'
    },
    module: {
        rules:[ {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                presets:['@babel/preset-react'], 
            }
        }
        } ]
    }
}

module.exports = config
