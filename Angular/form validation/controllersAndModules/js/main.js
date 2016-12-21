var app = angular.module('minMax', []);

app.controller('minMaxCntrl', function ($scope) {
	$scope.formModel = {};
	$scope.onSubmit = function () {
		console.log("Form submitted");
		console.log($scope.formModel);
	};
});