const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')

module.exports = (env) => ({
    entry: {
        index: path.join(__dirname, 'src/index.tsx')
    },
    mode: 'production',
    output: {
        path: path.join(__dirname, 'extension'),
        filename: '[name].js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'popup.html',
            template: './extension/template.html'
        }),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: 'static'
        })
    ]
})
