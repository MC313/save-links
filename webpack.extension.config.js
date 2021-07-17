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
                    from: '**/*',
                    to: 'output',
                    globOptions: {
                        ignore: ["**/template.html"]
                    }
                },
                {
                    context: './extension',
                    from: '**/*',
                    to: 'output',
                    globOptions: {
                        ignore: ["**/static/**"]
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
