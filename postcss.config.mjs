import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import UnoCSS from '@unocss/postcss';

export default {
    plugins: [
        postcssImport(),
        UnoCSS({ minify: true }),
        cssnano({ preset: 'default' }),
    ],
}