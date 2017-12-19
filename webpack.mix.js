const mix = require('laravel-mix').mix;
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

const resources = 'assets';
const themePath = 'web/app/themes/SaDoY';
const assetsPath = 'web/app/themes/SaDoY/assets';
const devSite = 'sadoy.local';

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

imagemin([`${resources}/images/*.{jpg,png,svg,gif}`], `${assetsPath}/images`, {
  plugins: [
    imageminJpegtran(),
    imageminPngquant({quality: '65-80'})
  ]
}).then(files => {
  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});

imagemin([`${resources}/images/icons/*.{jpg,png,svg,gif}`], `${assetsPath}/images/icons`, {
  plugins: [
    imageminJpegtran(),
    imageminPngquant({quality: '65-80'})
  ]
}).then(files => {
  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});


mix.setPublicPath(assetsPath);
mix.setResourceRoot('../');

mix.scripts([
  `node_modules/jquery/dist/jquery.min.js`,
  `node_modules/jquery-match-height/dist/jquery.matchHeight-min.js`,
  `node_modules/jquery-form/dist/jquery.form.min.js`,
  `node_modules/jquery-ui-bundle/jquery-ui.min.js`,
  `node_modules/slick-carousel/slick/slick.min.js`,
  `node_modules/basicscroll/dist/basicScroll.min.js`,
        `${resources}/js/**/*.js`
      ], `${assetsPath}/js/app.js`);

mix.sass(`${resources}/scss/app.scss`, `${assetsPath}/css/app.css`)
   .options({
            processCssUrls: false
           });

mix.browserSync({
    proxy: devSite,
    files: [
        `${themePath}/**/*.php`,
        `${themePath}/**/*.twig`,
        `${assetsPath}/**/*.js`,
        `${assetsPath}/**/*.css`
    ]
});

// Hash and version files in production.
if (mix.config.inProduction) {
    mix.version();
}
