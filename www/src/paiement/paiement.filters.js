angular.module('temetClient')

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