angular.module('temetfact')

	.filter('groupByFirstLetter', function(){
		return function(array) {
            var results = _.orderBy(array, ['lastname'], ['asc'])
			return _.groupBy(results, function(n) {
				return ('lastname' in n) ? n.lastname.substring(0,1).toUpperCase() : '';
			});
		};
	})

	.filter('groupByMonth', function(){
		return function(array, account, year) {
            var results = _.orderBy(array, ['date'], ['desc']);
            var i = 0;
            var groupedResult = new Object();
            var mois = {'01' : 'Janvier', '02' : 'Février', '03' : 'Mars', '04' : 'Avril',
			            '05' : 'Mai', '06' : 'Juin', '07' : 'Juillet', '08' : 'Août',
			            '09' : 'Septembre', '10' : 'Octobre', '11' : 'Novembre', '12' : 'Décembre'};            
            var month;
            while (!_.has(results[i], 'date') || parseInt(results[i].date.substring(0,4)) >= year) {
               	if (_.has(results[i], 'date') && results[i].date.substring(0,4) == year && results[i].account == account) {
            		month = mois[results[i].date.substring(5,7)];
            		groupedResult[month] || (groupedResult[month] = []);
            		groupedResult[month].push(results[i]);
            	}
            	i++;
            }
            return groupedResult;
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