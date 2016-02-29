angular.module('temetAuth')

	.controller('LoginCtrl', function($scope, $ionicLoading,$ionicModal,LoginService,$state) {

		$scope.login=function(){

			$ionicLoading.show();

			LoginService.login($scope.email,$scope.password)
				.then(function(){
					if ($scope.savePassword) {
						LoginService.saveCredentials($scope.email, $scope.password)
					}
					$state.go('menu.client');
					$ionicLoading.hide();
				}, function()
				{
					$ionicLoading.hide();
				});
		};


		$scope.openSignUp= function(){
			$ionicModal.fromTemplateUrl('src/auth/signup/signup.modal.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.modal = modal;
				$scope.modal.show();
			});
		}
	});


