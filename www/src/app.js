// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('temetfact', ['ionic', 'firebase', 'ngCordova'])

  .constant('DATABASE_URL', 'https://temet-facturation.firebaseio.com/')

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
    var authResolve = function(LoginService,$state){
      var promise = LoginService.requireAuth()
        .catch(function(error){

          $state.go("login");

          return promise;
        });
      return promise;
    };

    $stateProvider

      // setup an abstract state for the tabs directive
      .state('menu', {
        url: "/menu",
        abstract: true,
        templateUrl: "src/nav/menu/menu.html",
        controller: "MenuCtrl"

        //disable resolve auth to test more quickly
        /*resolve:{
          auth: authResolve
        }*/
      })

      .state('menu.client', {
        url: '/client',
        data:{
          title:"Clients"
        },
        views: {
          'menu-content': {
            templateUrl: 'src/client/clients.html',
            controller: 'ClientsCtrl'
          }
        }
      })

      .state('menu.clientdetail', {
        url: '/client-detail/:id',
        data:{
          title:"Détail du client"
        },
        views: {
          'menu-content': {
            templateUrl: 'src/client/client-detail.html',
            controller:'ClientDetailCtrl'
          }
        }
      });      

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
