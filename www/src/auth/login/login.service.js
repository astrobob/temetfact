angular.module('temetfact').factory("LoginService", function ($rootScope, FirebaseService, $q) {

	return {

		userEmail : "",

		login: function(email, password) {
			var self = this;
			var promise = FirebaseService.login(email, password)
				.then(function(){
					self.userEmail = email;
					$rootScope.$broadcast("loginSuccess");
					return email;
				});
			return promise;
		},

		checkCredentials: function() {
			var userConnected = angular.fromJson(sessionStorage.userService);
			var defer = $q.defer();
			if (!_.isEmpty(userConnected)) {
				return FirebaseService.login(userConnected.email, userConnected.password)
					.then(function() {
						self.userEmail = userConnected.email;
						$rootScope.$broadcast("loginSuccess");
						return self.userEmail;
					});
			}
			else {
				defer.reject();
			}
			return defer.promise;
		},

		saveCredentials: function(email, password) {
			var userConnected = {
				email: email,
				password: password
			}
			sessionStorage.userService = angular.toJson(userConnected);
			var defer = $q.defer();
			defer.resolve();
			return defer.promise;

		},

		logout:function(){

			this.userEmail = "";
			FirebaseService.logout();
			delete sessionStorage.userService;

			//trigger promise because firebase logout doesn't return promise
			var defer = $q.defer();
			defer.resolve();
			return defer.promise;
		},

		signUp:function(email, password){
			var that = this;
			return FirebaseService.signUp(email,password)
			.then(function(){

				that.userEmail = email;
				$rootScope.$broadcast("loginSuccess");
				return email;
			});
		},

		requireAuth:function(){
			return FirebaseService.requireAuth();
		}
	}

});