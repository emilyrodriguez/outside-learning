var app = angular.module('minMax', []);

app.controller('minMaxCntrl', function ($scope, $http) {
	$scope.formModel = {};
	$scope.onSubmit = function () {
		console.log("Form submitted");
		console.log($scope.formModel);
		$http.post('https://mindmax-server.herokuapp.com/register/', $scope.formModel).success(function (data) {
				console.log("It works");
		}).error(function (data) {
			console.log("It's not working. Did you break it? >.<");
		});
	};
});