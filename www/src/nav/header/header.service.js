angular.module('temetfact').factory("HeaderService", function () {

	return {

		getHeaderTitle: function(data) {
			return ('title' in data) ? data.title : "";
		},

		getHeaderBack: function(data) {
			return ('previousURL' in data) ? data.previousURL : "";
		}
	}

});