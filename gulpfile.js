process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir'),
    path = require('path'),
    webpack = require('webpack');

require('laravel-elixir-livereload');
require('laravel-elixir-webpack-ex');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    /**
     * JQuery
     **/
    mix.copy('node_modules/jquery/dist/jquery.min.js', 'public/js');

    /**
     * Bootstrap css
     **/
    mix.copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/css');

    /**
     * Bootstrap js
     **/
    mix.copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'public/js');

    /**
     * Bootstrap table css
     **/
    mix.copy('bower_components/bootstrap-table/dist/bootstrap-table.min.css', 'public/css');

    /**
     * Bootstrap table js
     **/
    mix.copy('bower_components/bootstrap-table/dist/bootstrap-table.min.js', 'public/js');

    /**
     * Bootstrap fonts
     **/
    mix.copy('node_modules/bootstrap/dist/fonts', 'public/fonts');

    /**
     * Font awesome css
     **/
    mix.copy('node_modules/font-awesome/css/font-awesome.min.css', 'public/css');

    /**
     * Font awesome fonts
     **/
    mix.copy('node_modules/font-awesome/fonts', 'public/fonts');

    /**
     * Sweetalert css
     **/
    mix.copy('node_modules/sweetalert/dist/sweetalert.css', 'public/css');

    /**
     * Sweetalert js
     **/
    mix.copy('node_modules/sweetalert/dist/sweetalert.min.js', 'public/js');


    /**
     * Sass
     **/
    mix.sass('app.sass');

    /**
     * Scripts webpack bundling and copying
     **/

    mix.webpack({
        vendor: 'vendor.ts',
        app: 'app.ts'
    }, {
        debug: true,
        devtool: 'source-map',
        resolve: {
            extensions: ['', '.ts', '.js']
        },
        module: {
            loaders: [{
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            }]
        },
        plugins: [
            new webpack.ProvidePlugin({
                '__decorate': 'typescript-decorate',
                '__extends': 'typescript-extends',
                '__param': 'typescript-param',
                '__metadata': 'typescript-metadata'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.js',
                minChunks: Infinity
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'app',
                filename: 'app.js',
                minChunks: 4,
                chunks: [
                    'app'
                ]
            }),
            /*new webpack.optimize.UglifyJsPlugin({
                 compress: {
                    warnings: false
                 },
                 minimize: true,
                 mangle: false
             })*/
        ]
    }, 'public/js', 'resources/assets/typescript');

    /**
     * LiveReload
     **/
    mix.livereload([
        'public/css/**/*',
        'public/fonts/**/*',
        'public/js/**/*'
    ]);
});