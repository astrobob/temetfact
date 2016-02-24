angular.module('temetfact').factory("ClientService", function ($firebaseArray, $filter, DATABASE_URL) {
	var ref = new Firebase('https://temet-facturation.firebaseio.com');

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
			var _client = $firebaseArray(ref.child('client').child(clientID));
			return _client.$loaded().then(function (res) {
				console.log(res)
				return res;
			});
		}
	}

});