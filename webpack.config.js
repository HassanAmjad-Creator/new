const path = require('path')

const config = {
    target:'node',
    mode:'development',
    entry: {
        index:'./src/App.js'
    },
    output:{
        path: path.resolve( __dirname, './dist'),
        filename:'index.js',
        libraryTarget:'umd',
        globalObject: 'this',
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
