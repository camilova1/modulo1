let mix = require('laravel-mix');

mix.sass('src/scss/app.scss', 'dist/');
mix.setPublicPath('./dist');
mix.setResourceRoot('./');