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
		});

		$scope.title = 'TTT';

	})

	.controller('ClientPaiementsCtrl', function($scope, $ionicLoading, ClientService, $stateParams) {

		ClientService.getPaiementsByClient($stateParams.id).then(function(data){
			$scope.paiements = data;
		});

	})

	.controller('ClientTraitementsCtrl', function($scope, $ionicLoading, ClientService, $stateParams) {

		ClientService.getTraitementsByClient($stateParams.id).then(function(data){
			$scope.traitements = data;
		});

	})

	.controller('ClientEditCtrl', function($scope, $ionicLoading, ClientService, $stateParams) {

		console.log('toto')

	});	