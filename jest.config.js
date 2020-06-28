const {defaults} = require('jest-config');
module.exports = {
    preset: "react-native",
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    modulePathIgnorePatterns: [
        '<rootDir>/src/playground/',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules',
        '<rootDir>/dist',
        '<rootDir>/docs',
    ],
};