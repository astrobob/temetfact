angular.module('temetNav')

	.factory("HeaderService", function () {

		var title;
		var previousURL;

		return {

			setHeaderTitle: function(value) {
				title = value;
			},

			setHeaderBack: function(value) {
				previousURL = value;
			},

			getHeaderTitle: function() {
				var titleReturn = title;
				title = '';
				return titleReturn;
			},

			getHeaderBack: function() {
				var previousURLReturn = previousURL;
				previousURL = '';
				return previousURLReturn;
			},
		}

	});