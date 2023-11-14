const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        // '@storybook/addon-postcss', // この行は必要に応じてコメントアウトまたは削除
    ],

    staticDirs: ['public'],

    babel: async (options: any) => ({
        ...options,
        plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-private-methods',
            '@babel/plugin-proposal-private-property-in-object',
        ],
    }),

    webpackFinal: async (config: any) => {
        config.resolve.plugins = [
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, '../tsconfig.json')
            }),
        ];

        return config;
    },

    typescript: { reactDocgen: false },

    // Reactを使用している場合。VueやAngularなど他のフレームワークを使用している場合は適宜変更
    framework: {
        name: '@storybook/nextjs',
        options: {}
    }
};