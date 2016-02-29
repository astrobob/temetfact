angular.module('temetClient')

	.filter('groupByFirstLetter', function(){
		return function(array) {
            var results = _.orderBy(array, ['lastname'], ['asc'])
			return _.groupBy(results, function(n) {
				return ('lastname' in n) ? n.lastname.substring(0,1).toUpperCase() : '';
			});
		};
	})

	.filter('capitalize', function() {
	    return function(input) {
	      	return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
	    }
	})

	.filter('dateFormat', function() {
	    return function(input) {
	    	if (typeof input === 'string') {
	    		var d = new Date(Date.parse(input));
	    		var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
	    		return datestring;
	    	}
			//return (typeof input === 'string') ? input.substr(0, 10) : '';
	    }
	});	