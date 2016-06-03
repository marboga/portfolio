MyApp.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: './../views/splash.html',
		controller: 'scrollCtrl'
	})
	// .when('#about', {
	// 	templateUrl: './../views/splash.html',
	// 	controller: 'usersController'
	// })
	// //
	// .otherwise('/')
})
