module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'standard-with-typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:storybook/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {
        'react/jsx-key': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-console': 'warn',

        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': 'off', // Code style is to use const functions instead of function declarations
        '@typescript-eslint/indent': ['error', 4], // 4 spaces indentation
        'react/jsx-indent-props': ['error', 4], // 4 spaces indentation
        'react/jsx-indent': ['error', 4], // 4 spaces indentation
        'import/prefer-default-export': 'off', // Not always possible to have a default export
        'import/no-default-export': 'off', // Required by Storybook exportation of stories
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
};
