"use strict";

angular.module('temetfact')
	.controller('HeaderCtrl', function($rootScope,$scope,$state, HeaderService) {

		//properties
		$scope.enabled = _isEnabled();
		$scope.title = _getTitle();
		$scope.previousURL = HeaderService.getHeaderBack();

		//events
		$rootScope.$on('$stateChangeSuccess',
			function(event, toState, toParams, fromState, fromParams){

				$scope.title = _getTitle();
				$scope.enabled = _isEnabled();

		});

		//privates
		function _isEnabled(){
			return !$state.is("login");
		};

		function _getTitle(){
			return ($state.$current.data) ? $state.$current.data.title : "";
		};

	});