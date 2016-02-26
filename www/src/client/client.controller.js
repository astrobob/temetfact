angular.module('temetfact')
	.controller('ClientsCtrl', function($scope, $ionicLoading, ClientService, HeaderService) {

		$ionicLoading.show({
			content: 'Loading...',
			showBackdrop: false
		});

		ClientService.getGroupedClients().then(function(data){
			$scope.grouped = data;
			$ionicLoading.hide();
		});

		$scope.filterFunction = function(element) {
			return element.name.match(/^Ma/) ? true : false;
		};

	})

	.controller('ClientDetailCtrl', function($rootScope, $scope, $ionicLoading, ClientService, $stateParams, HeaderService) {

		if ($stateParams.id) {
			ClientService.getClient($stateParams.id).then(function(data){
				$scope.client = data;
			});
		}

		$scope.currentDate = new Date();

	})

	.controller('ClientPaiementsCtrl', function($scope, $ionicLoading, ClientService, $stateParams, HeaderService) {

		ClientService.getClient($stateParams.id).then(function(data){
			var client = data;
			if (client.treatment_id) {
				$scope.paiements = new Array();
				for(var k in client.treatment_id) {
					ClientService.getPaiement(client.paiement_id[k]).then(function(data) {
						$scope.paiements.push(data);
						console.log($scope.paiements)
					});
				}
			}
		})

	})

	.controller('ClientTraitementsCtrl', function($scope, $ionicLoading, ClientService, $stateParams) {

		ClientService.getClient($stateParams.id).then(function(data){
			var client = data;
			if (client.treatment_id) {
				$scope.traitements = new Array();
				for(var k in client.treatment_id) {
					ClientService.getTraitement(client.treatment_id[k]).then(function(data) {
						var traitement = data;
						if (traitement.consultations) {
							traitement.consults = new Array();
							for(var k in traitement.consultations) {
								ClientService.getConsultation(traitement.consultations[k]).then(function(data) {
									traitement.consults.push(data);
								});
							}
						}
						$scope.traitements.push(data);
					});
				}
			}
		})

	});