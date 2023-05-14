module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss')(require('postcss-nested')),
        require('autoprefixer'),
        require('postcss-each'),
        require('postcss-apply'),
        require('postcss-at-rules-variables'),
        require('postcss-mq-last'),
    ]
}
