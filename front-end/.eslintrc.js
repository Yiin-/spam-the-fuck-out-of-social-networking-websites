module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: [
        'standard',
        'plugin:react/recommended'
    ],

    // custom rules
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 1,

        // allow async-await
        'generator-star-spacing': 0,

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

        'no-unused-vars': ['warn', { 'vars': 'all'}],
        'no-unused-expressions': 0,

        'standard/no-callback-literal': 0,  
        'no-throw-literal': 0,

        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'always'
        }],

        'indent': ['error', 2]
    }
}