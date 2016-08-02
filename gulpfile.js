var elixir = require('laravel-elixir');

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
    // mix.sass('app.scss');

    mix.styles([
    	'../dist/bootstrap/css/bootstrap.css',
    	'../dist/AdminLTE/css/AdminLTE.css',
    	'../dist/AdminLTE/css/skins/_all-skins.css',
    	'../dist/font-awesome/css/font-awesome.css'
	]);

	mix.copy('resources/assets/dist/font-awesome/fonts/', 'public/fonts/');
	mix.copy('resources/assets/dist/bootstrap/fonts/', 'public/fonts/');

	mix.scripts([
		'../dist/jQuery/jquery-2.2.3.min.js',
		'../dist/bootstrap/js/bootstrap.js',
		'../dist/AdminLTE/js/app.js'
	]);
});
