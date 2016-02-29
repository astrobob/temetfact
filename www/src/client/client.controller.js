angular.module('temetClient')

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

	.controller('ClientDetailCtrl', function($scope, ClientService, $stateParams) {

		$scope.civilStatusList = ['', 'Célibataire', 'Divorcé(e)', 'Marié(e)', 'Séparé', 'Veuf(ve)'];
		$scope.genderList = ['M.', 'Mme', 'Mlle', 'Dr.', 'Prof.'];
		$scope.countryList = {
			ch : 'Suisse',
			fr : 'France',
			de : 'Allemagne',
			au : 'Autriche',
			be : 'Belgique',
			dk : 'Danemark',
			es : 'Espagne',
			fi : 'Finlande',
			gb : 'Grande-Bretagne',
			it : 'Italie',
			li : 'Liechtenstein',
			lu : 'Luxembourg',
			no : 'Norvège',
			po : 'Portugal',
			se : 'Suède'    
		}

		if ($stateParams.id) {
			ClientService.getClient($stateParams.id).then(function(data){
				$scope.client = data;
			});
		}

		$scope.currentDate = new Date();

	})

	.controller('ClientPaiementsCtrl', function($scope, ClientService, PaiementService, $stateParams) {

		ClientService.getClient($stateParams.id).then(function(data){
			var client = data;
			if (client.treatment_id) {
				$scope.paiements = new Array();
				for(var k in client.treatment_id) {
					PaiementService.getPaiement(client.paiement_id[k]).then(function(data) {
						$scope.paiements.push(data);
					});
				}
			}
		})

	})

	.controller('ClientTraitementsCtrl', function($scope, ClientService, TraitementService, $stateParams) {

		ClientService.getClient($stateParams.id).then(function(data){
			var client = data;
			if (client.treatment_id) {
				$scope.traitements = new Array();
				for(var k in client.treatment_id) {
					TraitementService.getTraitement(client.treatment_id[k]).then(function(data) {
						var traitement = data;
						if (traitement.consultations) {
							traitement.consults = new Array();
							for(var k in traitement.consultations) {
								TraitementService.getConsultation(traitement.consultations[k]).then(function(data) {
									traitement.consults.push(data);
								});
							}
						}
						$scope.traitements.push(data);
					});
				}
			}
		})

		$scope.clientID = $stateParams.id;

	});