console.log('usersController loaded');

MyApp.controller('usersController', function($scope, userFactory, $location, $routeParams){
	$scope.user = {};
	$scope.select = {
  	  value: "Option1",
  	  choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
   };
	$(document).ready(function(){
		console.log("document ready")
		$('.parallax').parallax();
	});
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
})
