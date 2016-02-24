angular.module('temetfact').factory("ClientService", function ($http, $q, $filter, DATABASE_URL) {

	return {

		getGroupedClients: function () {
			return this.getClients().then(function(result){
				return $filter('groupByFirstLetter')(result.data);
			});

		},

		getClients: function() {
			return $http.get(DATABASE_URL . "/client");
		}
	}

});