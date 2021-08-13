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
        filename: 'script.js',
        clean: {
            keep: /static\//
        }
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    context: './extension/static/',
                    from: './',
                    // This format with just the folder name creates the folder
                    to: 'output',
                    globOptions: {
                        ignore: ['**/template.html']
                    }
                }
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'popup.html',
            template: './extension/static/template.html'
        }),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: 'static'
        })
    ]
})
