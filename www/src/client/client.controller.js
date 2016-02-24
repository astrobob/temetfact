angular.module('temetfact')
	.controller('ClientsCtrl', function($scope, $ionicLoading, ClientService) {

		$ionicLoading.show({
			content: 'Loading...',
			showBackdrop: false
		});

		ClientService.getGroupedClients().then(function(data){
			$scope.grouped = data;
			$ionicLoading.hide();

		});

	})

	.controller('ClientDetailCtrl', function($scope, $ionicLoading, ClientService, $stateParams) {

		ClientService.getClient($stateParams.id).then(function(data){
			$scope.client = data;
			console.log($scope.client)
		});

	});
