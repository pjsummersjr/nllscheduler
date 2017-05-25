'use strict'

var babelOptions = {
    "presets" : [
        "env",
        "react"
    ]
}

module.exports = {
    context: __dirname + '/src/javascripts/',
    entry: './nllscheduler.tsx',
    output: {
        path: __dirname + "/public/javascripts/",
        filename: "./nllscheduler-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.json']
    },
    watch:true,
    devtool: "source-map"
};