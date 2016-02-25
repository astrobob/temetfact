angular.module('temetfact').factory("HeaderService", function () {

	var title = 'Toto';
	var previousURL = 'login';

	return {

		setHeaderTitle: function(t) {
			title = t;
		},

		getHeaderTitle: function() {
			return title;
		},
		setHeaderBack: function(p) {
			previousURL = p;
		},
		getHeaderBack: function() {
			return previousURL;
		}
	}

});