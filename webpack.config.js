const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
    entry: "./src/index", //
    mode: "development", //
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 3001,
    },
    output: {
        publicPath: "http://localhost:3001/",
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
            name: "app1",
            remotes: {
                app2: `app2@${getRemoteEntryUrl(3002)}`,
            },
            // shared: ['react', 'react-dom'],
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

    return `//localhost:${port}/Sample.js`;
}