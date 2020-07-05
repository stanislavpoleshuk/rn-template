module.exports = {
    presets: [
        'module:metro-react-native-babel-preset',
        'module:react-native-dotenv'
    ],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                alias: {
                    application: './src/application',
                    domain: './src/domain',
                    localization: './src/infrastructure/localization',
                    repositories: './src/infrastructure/repositories',
                    infrastructure: './src/infrastructure',
                    components: './src/presentation/components',
                    resources: './src/presentation/resources',
                    screens: './src/presentation/screens',
                    core: './src/presentation/core',
                },
            },
        ],
    ],
};
