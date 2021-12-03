const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
    shared: {
        react: {
            // Notice shared are NOT eager here.
            requiredVersion: false,
            singleton: true,
        },
    },
})({
    future :{
        webpack5: true
    },
    webpack(config, options) {
        const { webpack, isServer } = options;
        config.experiments = { topLevelAwait: true };

        config.module.rules.push({
            test: /_app.js/,
            loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
        });
        console.log(isServer)
        console.log(webpack)
        if (isServer) {
            Object.assign(config.resolve.alias, {
                restaurant: false,
            });
        } else {
            config.output.publicPath = "auto";
            config.plugins.push(
                new webpack.container.ModuleFederationPlugin({
                    remoteType: "var",
                    remotes: {
                        restaurant:"restaurant",
                    },
                    shared: {
                        "@module-federation/nextjs-mf/lib/noop": {
                            eager: false,
                        },
                        react: {
                            singleton: true,
                            eager: true,
                            requiredVersion: false,
                        },
                    },
                })
            );
        }
        return config;
    },
});