angular.module('temetfact').factory("ClientService", function ($firebaseArray, $firebaseObject, $filter, DATABASE_URL) {
	var ref = new Firebase('https://temetfacturation.firebaseio.com');

	return {

		getGroupedClients: function () {
			return this.getClients().then(function(result){
				return $filter('groupByFirstLetter')(result);
			});

		},

		getClients: function() {
			var _clients = $firebaseArray(ref.child('client'));
			return _clients.$loaded().then(function (res) {
				return res;
			});
		},

		getClient: function(clientID) {
			var _client = $firebaseObject(ref.child('client').child(clientID));
			return _client.$loaded().then(function (res) {
				return res;
			});
		},

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

		getPaiement: function(paiementID) {
			var _paiement = $firebaseObject(ref.child('paiement').child(paiementID));
			return _paiement.$loaded().then(function (res) {
				return res;
			});
		}
	}

});