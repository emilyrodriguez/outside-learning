var app = angular.module('minMax', []);

app.controller('minMaxCntrl', function ($scope, $http) {
	$scope.formModel = {};
	$scope.onSubmit = function (valid) {
		if (valid) {
			console.log("Form submitted");
			console.log($scope.formModel);
		} else {
			console.log("Invalid form");
		}
	};
	
});