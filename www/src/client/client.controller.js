angular.module('temetfact')
	.controller('ClientCtrl', function($scope, $ionicLoading, ClientService, $stateParams) {

		$ionicLoading.show({
			content: 'Loading...',
			showBackdrop: false
		});

		ClientService.ClientService().then(function(data){

			$scope.grouped = data;
			$ionicLoading.hide();

		});

	});


angular.module('places')
	.controller('FriendsCtrl', function($scope, $ionicLoading,FriendsService) {

		$ionicLoading.show({
			content: 'Loading...',
			showBackdrop: false
		});

		FriendsService.getGroupedFriends().then(function(data){

			$scope.grouped = data;
			$ionicLoading.hide();

		});


	});
