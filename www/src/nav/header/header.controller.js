"use strict";

angular.module('temetNav')

	.controller('HeaderCtrl', function($rootScope, $scope, $state, HeaderService) {

		//properties
		$scope.enabled = _isEnabled();
		$scope.title = HeaderService.getHeaderTitle($state.$current.data);
		$scope.previousURL = HeaderService.getHeaderBack($state.$current.data);

		//events
		$rootScope.$on('$stateChangeSuccess',
			function(event, toState, toParams, fromState, fromParams) {

				$scope.enabled = _isEnabled();
				$scope.title = HeaderService.getHeaderTitle($state.$current.data);
				$scope.previousURL = HeaderService.getHeaderBack($state.$current.data);

		});

		//privates
		function _isEnabled(){
			return !$state.is("login");
		};

	});