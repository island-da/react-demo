module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    globals: {
        window: true,
        document: true,
    },
    rules: {
        'no-unused-vars': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
    },
    ignorePatterns: ['**/*.test.js'],
    settings: {
        react: {
            version: 'detect'
        }
    },
};
