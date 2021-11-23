const path = require('path');
const HtmlWebpackPlugin  =  require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack");

module.exports = {
    plugins: [
        new  ModuleFederationPlugin({
            name: "app_container",
            remotes: {
                restaurant: "restaurnat@http://localhost:3002/remoteEntry.js",
                cafe: "cafe@http://localhost:3003/remoteEntry.js"
            },
            shared: [ "react", "react-dom" ]
        })
    ]
}