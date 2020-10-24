const path = require('path');
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

module.exports = {
    entry: './src/zip_unzip.ts',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
        ]
    },
    devtool: 'source-map',
    target: 'node',
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new TypescriptDeclarationPlugin({
          out: 'zip.prod.d.ts'
        })
    ],
    output: {
        filename: 'zip.prod.js',
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, '../../dist/prod')
    }
};
