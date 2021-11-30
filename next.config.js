const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
    name: "training-front",
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

        if (isServer) {
            // ignore it on SSR, realistically you probably wont be SSRing Fmodules, without paid support from @ScriptedAlchemy
            Object.assign(config.resolve.alias, {
                checkout: false,
                home: false,
                shop: false,
            });
        } else {
            config.output.publicPath = "auto";
            config.plugins.push(
                new webpack.container.ModuleFederationPlugin({
                    remoteType: "var",
                    remotes: {
                        home: "home",
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