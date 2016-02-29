angular.module('temetPaiement')

	.factory("TraitementService", function ($firebaseArray, $firebaseObject, $filter, DATABASE_URL) {
		var ref = new Firebase('https://temetfacturation.firebaseio.com');

		return {

			getTraitement: function(traitementID) {
				var _traitement = $firebaseObject(ref.child('traitement').child(traitementID));
				return _traitement.$loaded().then(function (res) {
					return res;
				});
			},

			getConsultation: function(consultationID) {
				var _consultations = $firebaseObject(ref.child('consultation').child(consultationID));
				return _consultations.$loaded().then(function (res) {
					return res;
				});
			},		

		}

	});