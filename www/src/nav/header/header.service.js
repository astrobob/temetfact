angular.module('temetfact').factory("HeaderService", function () {

	var title;

	return {

		setHeaderTitle: function(value) {
			title = value;
		},

		getHeaderTitle: function(data) {
			var titleReturn = title;
			title = '';
			return titleReturn;
		},
/*
		getHeaderTitle: function(data) {
			return ('title' in data) ? data.title : "";
		},
*/
		getHeaderBack: function(data) {
			return ('previousURL' in data) ? data.previousURL : "";
		}
	}

});