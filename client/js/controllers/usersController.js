console.log('usersController loaded');

MyApp.controller('usersController', function($scope, userFactory, $location, $smoothScroll, $routeParams){
	$scope.user = {};

	// Using defaults
	var element = document.getElementById('my-elem');
	smoothScroll(element);

	// With options
	var element = $elem[0];

	var options = {
	    duration: 700,
	    easing: 'easeInQuad',
	    offset: 120,
	    callbackBefore: function(element) {
	        console.log('about to scroll to element', element);
	    },
	    callbackAfter: function(element) {
	        console.log('scrolled to element', element);
	    }
	}

	smoothScroll(element, options);


	// In directive's link function
	link: function($scope, $elem, $attrs){
	    var options = $attrs;

	    smoothScroll($elem[0], options);
	}
})
