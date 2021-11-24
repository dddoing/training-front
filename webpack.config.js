const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
    entry: "./src/index", //
    mode: "development", //
    devServer: {
        historyApiFallback: false, //
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 3001, //
    },
    output: { //
        publicPath: "http://localhost:3001/", //
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
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "App1", // 빌드 이름정의 mciro
            remotes: { // 사용할 Remote 빌드의 위치 정의
                App2: `App2@${getRemoteEntryUrl(3002)}`, //domain: `domain@fds'
            },
            // shared: ['react', 'react-dom'],
            // 공유할 모듈 정의
            shared: { "react": { singleton: true ,strictVersion:true},
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

    return `//localhost:${port}/App2.js`;
}