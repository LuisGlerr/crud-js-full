const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    // Configuracion javascript
    entry: './frontend/app.js',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js'
    },

    mode: 'production',

    // configuracion CSS
    module: {
        rules: [
            {
                test:/\.css/, // todos los archivos que terminen con .css
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    // Configuracion HTML
    plugins: [
        new htmlWebpackPlugin({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),

        // Configuracion css ruta CSS
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],

    // Herramienta dev errores interfaz
    devtool: 'source-map'
}