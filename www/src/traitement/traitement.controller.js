angular.module('temetClient')

	.controller('TraitementsCtrl', function($scope, $ionicLoading, TraitementService) {

	})

	.controller('TraitementDetailCtrl', function($scope, $stateParams, TraitementService) {

		$scope.discountList = {'0': 'Pas de rabais', '0.1' : '10%', '0.2' : '20%', '0.3' : '30%', '0.5' : '50%'};
		$scope.statusList = {0 : 'Brouillon', 1 : 'En cours', 2 : 'Terminé'};
		$scope.traitementsList = ['Hypnose', 'Sleep Talk'];

		if ($stateParams.id) {
			TraitementService.getTraitement($stateParams.id).then(function(data){
				$scope.traitement = data;
			});
		}

		console.log($stateParams)

	});