const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');
const cssLoader = 'css-loader';

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            plugins: ['autoprefixer']
        }
    }
};

module.exports = function (env, {analyze}) {
    const production = env.production || process.env.NODE_ENV === 'production';
    return {
        target: 'web',
        mode: production ? 'production' : 'development',
        devtool: production ? undefined : 'eval-cheap-source-map',
        entry: {
            entry: './src/main.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: production ? '[name].[contenthash].bundle.js' : '[name].bundle.js'
        },
        resolve: {
            extensions: ['.js'],
            modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'dev-app'), 'node_modules']
        },
        devServer: {
            historyApiFallback: true,
            open: !process.env.CI,
            port: 9000
        },
        module: {
            rules: [
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset'
                },
                {
                    test: /\.(woff|woff2|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, type: 'asset'
                },
                {
                    test: /\.css$/i, use: ['style-loader', cssLoader, postcssLoader]
                },
                {
                    test: /\.js$/i, use: ['babel-loader', '@aurelia/webpack-loader'], exclude: /node_modules/
                },
                {
                    test: /[/\\]src[/\\].+\.html$/i,
                    use: '@aurelia/webpack-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('sass'),
                                sassOptions: {
                                    includePaths: [path.resolve('./node_modules')]
                                }
                            }
                        },

                    ],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({template: 'index.html'}),
            new Dotenv({
                path: `./.env${production ? '' : '.' + process.env.NODE_ENV}`,
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {from: 'static', to: path.resolve(__dirname, 'dist'), globOptions: {ignore: ['.*']}},
                ]
            }),
            analyze && new BundleAnalyzerPlugin()
        ].filter(p => p)
    }
}
