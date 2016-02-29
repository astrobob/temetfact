angular.module('temetPaiement')

	.factory("PaiementService", function ($firebaseArray, $firebaseObject, $filter, DATABASE_URL) {
		var ref = new Firebase('https://temetfacturation.firebaseio.com');

		return {

			getPaiement: function(paiementID) {
				var _paiement = $firebaseObject(ref.child('paiement').child(paiementID));
				return _paiement.$loaded().then(function (res) {
					return res;
				});
			},

			getGroupedPaiements: function(account, year) {
				return this.getPaiements().then(function(result) {
					return $filter('groupByMonth')(result, account, year);
				});
			},

			getPaiements: function() {
				var _paiements = $firebaseArray(ref.child('paiement'));
				return _paiements.$loaded().then(function (res) {
					return res;
				});
			},

		}

	});