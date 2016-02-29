angular.module('temetPaiement')

	.controller('PaiementsCtrl', function($scope, $ionicLoading, ClientService, PaiementService, $stateParams) {

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
			PaiementService.getGroupedPaiements($stateParams.account, $scope.selected.year).then(function(data){
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

	.controller('PaiementDetailCtrl', function($scope, PaiementService, $stateParams) {

		$scope.currencyList = ['CHF', 'EUR'];
		$scope.accountList = {1000 : 'Cash', 1010 : 'Virement'};
		$scope.paiement = {
			_id: 0,
			account: "1000",
			amount: 0,
			changed: 0,
			client_id: 0,
			created: 0,
			currency: "CHF",
			date: new Date().toISOString()
		}

		if ($stateParams.id) {
			PaiementService.getPaiement($stateParams.id).then(function(data){
				$scope.paiement = data;
			});
		}

		$scope.currentDate = new Date();

	});