const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const ip = require("ip");
const port = 3001;

module.exports = {
    entry: "./src/index", //
    mode: "development", //
    devServer: {
        historyApiFallback: false, //
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: port, //
    },
    output: { //
        publicPath: `//${ip.address()}:${port}/`, //
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env","@babel/preset-react"],
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "MicroApp",
            remotes: {
                Restaurant: `Restaurant@//172.31.10.140:3002/App.js`
            },
            // 공유할 모듈 정의
            shared: {
                "react": { singleton: true ,strictVersion:true},
                "react-dom": { singleton: true ,strictVersion:true },
                "react-router-dom": { singleton: true ,strictVersion:true }
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
function getRemoteEntryUrl(port) {
    return `//localhost:${port}/App.js`;
}