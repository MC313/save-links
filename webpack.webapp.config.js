const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')

module.exports = (env) => ({
    entry: {
        index: path.join(__dirname, 'src/index.tsx')
    },
    mode: env.dev ? 'development' : 'production',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html'
        }),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: 'static'
        })
    ]
})
