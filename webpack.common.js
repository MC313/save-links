const path = require('path')


module.exports = (env) => ({
    name: 'common',
    resolve: {
        alias: {
            react: path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        fullySpecified: false
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
        ]
    },
    optimization: {
        minimize: true
    },
    stats: {
        assets: false,
        // show list of assets in output
        builtAt: false,
        // show timestamp in summary
        children: false,
        // show stats for child compilations
        chunks: false,
        // show list of chunks in output
        chunkGroups: false,
        // show named chunk group list
        colors: true,
        env: true,
        entrypoints: false,
        // show entrypoints list
        errors: true,
        // show errors
        errorsCount: true,
        // show errors count in summary
        errorDetails: true,
        // show details for errors
        errorStack: true,
        // show internal stack trace for errors
        hash: false,
        // show build hash in summary
        logging: false,
        // show logging in output
        loggingTrace: true,
        // show stack traces for warnings and errors in logging output
        modules: false,
        // show list of modules in output
        moduleTrace: true,
        // show module trace for errors
        // (why was causing module referenced)
        outputPath: true,
        // include absolute output path in the output
        preset: 'errors-only',
        publicPath: false,
        // include public path in the output
        timings: true,
        // show build timing in summary
        version: true,
        // show webpack version in summary
        warnings: false,
        // show warnings
        warningsCount: true,
        // show warnings count in summary
    }
})

