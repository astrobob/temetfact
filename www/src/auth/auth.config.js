angular.module('temetAuth', [])

	.config(function ($stateProvider) {

	    //resolve to restrict access without authentification
	    var authResolved = function(LoginService, $q, $state){
          var defer = $q.defer();
	      return promise = LoginService.requireAuth()
	        .then(function(success) {
	        	$state.go('menu.client');
	        }, function(error) {
	           return LoginService.checkCredentials()
	            .then(function() {
	              $state.go('menu.client');
	            }, function() {
	              return defer.resolve();
	        	});
	      	});
	    };

		$stateProvider.state('login', {
			url: '/login',
			templateUrl: 'src/auth/login/login.html',
			controller:'LoginCtrl',
	        // Check if authentificated
	        resolve:{
	          auth: authResolved
	        }			
		});

	});