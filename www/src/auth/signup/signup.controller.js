angular.module('temetAuth')

	.controller('SignupCtrl', function($scope, LoginService, $state) {


		$scope.signUp=function(){

			LoginService.signUp($scope.email,$scope.password)
				.then(function(){

					$scope.closeModal();

					$state.go('menu.client');

			});

		};

	});


