var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){ /*just like the $scope example, not compressing javascript, so no need [] and $routeProvider before*/
	$routeProvider
	/*.when('/', {
		template: 'Welcome user!'
	})
	.when('/anotherPage', {
		template: 'Welcome user, again!'
	})
	.otherwise({
		redirectTo: '/'
	});*/	
	
	/*templateUrl is different from template*/
	.when('/', {
		templateUrl: 'page.html', /*the framework launch ajax request to this html file*/
		/*template: '<b>This is template</b>'*/ /*the order is not important, always show to template*/
	})
	.when('/helloUser', {
		templateUrl: 'hello.html'
	})
	.otherwise({
		redirectTo: '/'
	});
	
});