var fApp = angular.module('flickrApp', ['ngMaterial']);

fApp.controller('ListController',['$scope', '$http', function($scope, $http) {

	$scope.results =[];
	$scope.isSearching = false;
	$scope.search = function() {
		$scope.isSearching = true;
		$http({
			method: 'GET',
			url: 'https://api.flickr.com/services/rest',
			params: { 
				method: 'flickr.photos.search',
				api_key: '1066f0327c1d4487cb351ea3c44662dc',
				text: $scope.searchTerm,
				format: 'json',
				nojsoncallback: 1,
				per_page: 10,
				page: 1
			}

		}).success(function(data) {

			$scope.results = data;
			$scope.isSearching = false;

		}).error(function(error) {

			console.error(error);
			$scope.isSearching = false;
		});

	};
	}]);