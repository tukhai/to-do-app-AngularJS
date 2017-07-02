var app = angular.module('mainApp', []);

app.controller('people', function($scope, $http) {
	$http.get('database.json')
	.success(function(response){ /*whenever 200 do this*/
		$scope.persons = response.records; /*define variable array persons, records is the name of the json data*/
	});
});