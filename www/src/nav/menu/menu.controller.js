angular.module('temetfact')
	.controller('MenuCtrl', function($rootScope,$scope,LoginService,$state,$ionicSideMenuDelegate) {

		$scope.userName = LoginService.userEmail;

		$scope.logout=function(){

			LoginService.logout()
				.then(function(){
					
					$ionicSideMenuDelegate.toggleRight();
					$state.go('login');

				});

		};

		$scope.goTo=function(dest, args){
			$ionicSideMenuDelegate.toggleRight();
			$state.go(dest, args);
		};		

		$rootScope.$on("loginSuccess",function(){
			$scope.userName = LoginService.userEmail;
		});

	});


