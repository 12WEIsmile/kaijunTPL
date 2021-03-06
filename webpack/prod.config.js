var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var combineLoaders = require("webpack-combine-loaders");
// var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


module.exports = {
    devtool: "source-map",
    entry: [
        "./src/index.js" // Your appʼs entry point
    ],
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/bundle.js",
        publicPath: "/static/"
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "font/[hash:16].[ext]"
                        }
                    }
                ],
                exclude: [
                    path.resolve(__dirname, "../node_modules")
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "img/[hash:16].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: [
                    path.resolve(__dirname, "../node_modules")
                ],
                include: [
                    path.resolve(__dirname, "../src")
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: combineLoaders([
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                localIdentName: "[name][local][hash:8]"
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ])
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // new BundleAnalyzerPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.BannerPlugin({
            banner: "Created by KaiJun. :)"
        }),
        new ExtractTextPlugin({
            filename: "css/styles.css"
        })
    ]
}