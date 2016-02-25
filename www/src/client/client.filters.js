angular.module('temetfact')

	.filter('groupByFirstLetter', function(){
		return function(array) {
			return _.groupBy(array, function(n) {
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
	    		console.log('toto')
	    		var d = new Date(Date.parse(input));
	    		console.log(d);
	    		var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
	    		return datestring;
	    	}
			//return (typeof input === 'string') ? input.substr(0, 10) : '';
	    }
	});	