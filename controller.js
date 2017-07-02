var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){ /*just like the $scope example, not compressing javascript, so no need [] and $routeProvider before*/
	$routeProvider
	.when('/', {
		template: 'Welcome user!'
	})
	.when('/anotherPage', {
		template: 'Welcome user, again!'
	})
	.otherwise({
		redirectTo: '/'
	});
});