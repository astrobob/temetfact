angular.module('temetfact')

	.filter('groupByFirstLetter',function(){
		return function(array) {
			return _.groupBy(array, function(n) {
				return n.name.substring(0,1);
			});
		};
	})

	.filter('capitalize', function() {
	    return function(input) {
	      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
	    }
	});