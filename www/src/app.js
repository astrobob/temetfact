// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('temetfact', 
  ['ionic', 'firebase', 'ngCordova', 'ionic-datepicker',
   'temetCommon', 'temetAuth', 'temetNav', 'temetClient', 'temetTraitement', 'temetPaiement'])

  .constant('DATABASE_URL', 'https://temetfacturation.firebaseio.com/')

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })

  .config(function ($urlRouterProvider, $stateProvider) {

    //resolve to restrict access without authentification
    var authResolve = function(LoginService, $q, $state){
      return LoginService.requireAuth()
        .then(function(success) {
        }, function(error) {
           return LoginService.checkCredentials()
            .then(function() {
              return LoginService.requireAuth();
            }, function() {
              $state.go("login");
              var defer = $q.defer();
              return defer.reject();
         });
      });
    };

    $stateProvider

      // setup an abstract state for the tabs directive
      .state('menu', {
        url: "/menu",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "MenuCtrl",

        // Check if authentificated
        resolve:{
          auth: authResolve
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
