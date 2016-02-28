angular.module('temetfact')
	.controller('PaiementsCtrl', function($scope, $ionicLoading, ClientService, $stateParams) {

		// Initiate Ionic Loader
		$ionicLoading.show({
			content: 'Loading...',
			showBackdrop: false
		});

		// Initiate variables
		var thisYear = new Date().getFullYear();
		$scope.selected = {year: thisYear};
		$scope.account = $stateParams.account;

		// Show the last 5 years on the select list
		$scope.years = new Array();
		for(var i = thisYear; i>thisYear - 5; i--) {
			$scope.years.push(i);
		}

		// Load all selected year's paiements grouped by month
		$scope.update = function() {
			ClientService.getGroupedPaiements($stateParams.account, $scope.selected.year).then(function(data){
				$scope.groupedPaiements = data;
				for(var k in data) {
					for (var j in data[k]) {
						$scope.groupedPaiements[k][j].client = {lastname: 'toto', firstname: 'titi'};
						ClientService.getClient(data[k][j].client_id).then(function(data){
							$scope.groupedPaiements[k][j].client = {lastname: data.lastname, firstname : data.firstname};
						});
					}
				}
				$ionicLoading.hide();
			});
		}

		$scope.update();
	
	})

	.controller('PaiementDetailCtrl', function($rootScope, $scope, $ionicLoading, ClientService, $stateParams, HeaderService) {

		if ($stateParams.id) {
			ClientService.getPaiement($stateParams.id).then(function(data){
				$scope.paiement = data;
			});
		}

		$scope.currentDate = new Date();

	});