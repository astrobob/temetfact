angular.module('temetClient')

	.factory("ClientService", function ($firebaseArray, $firebaseObject, $filter, DATABASE_URL) {
		var ref = new Firebase('https://temetfacturation.firebaseio.com');

		return {

			getGroupedClients: function() {
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

		}

	});