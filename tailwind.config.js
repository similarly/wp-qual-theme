const theme = require('./theme.json');
const tailpress = require("@jeffreyvr/tailwindcss-tailpress");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.php',
        './**/*.php',
        './resources/css/*.css',
        './resources/css/*.scss',
        './resources/js/*.js',
        './safelist.txt'
    ],
    safelist: [
        'bg-custom'
    ],
    theme: {
        fontSize: {
            sm: '0.8rem',
            base: '1rem',
            smd: '0.9rem',
            md: '1rem',
            lg: '1.2rem',
            xl: '1.4rem',
            '2xl': '1.6rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
          },
        extend: {
            typography: {
                DEFAULT: {
                  css: {
                    maxWidth: '100ch', // add required value here
                  }
                }
              },
            colors: {
                'custom' : '#48A809'
            },
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '0rem'
            },
        },
        extend: {
            colors: tailpress.colorMapper(tailpress.theme('settings.color.palette', theme)),
            fontSize: tailpress.fontSizeMapper(tailpress.theme('settings.typography.fontSizes', theme))
        },
        screens: {
            'xs': '480px',
            'sm': '600px',
            'md': '782px',
            'lg': tailpress.theme('settings.layout.contentSize', theme),
            'xl': tailpress.theme('settings.layout.wideSize', theme),
            '2xl': '1440px'
        }
    },
    plugins: [
        tailpress.tailwind,
        require('@tailwindcss/typography')
    ]
};
