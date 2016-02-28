// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('temetfact', ['ionic', 'firebase', 'ngCordova', 'ionic-datepicker'])

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
        templateUrl: "src/nav/menu/menu.html",
        controller: "MenuCtrl",

        // Check if authentificated
        resolve:{
          auth: authResolve
        }
      })

      .state('menu.client', {
        url: '/client',
        views: {
          'menu-content': {
            templateUrl: 'src/client/clients.html',
            controller: 'ClientsCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Clients');
          }
        }        
      })

      .state('menu.paiements', {
        url: '/paiements/:account',
        views: {
          'menu-content': {
            templateUrl: 'src/client/paiements.html',
            controller: 'PaiementsCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Paiements');
          }
        }        
      })

      .state('menu.clientdetail', {
        url: '/client-detail/:id',
        views: {
          'menu-content': {
            templateUrl: 'src/client/client-detail.html',
            controller:'ClientDetailCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Détail du client');
          },
          setBackURL : function(HeaderService) {
            HeaderService.setHeaderBack('menu.client');
          }
        }        
      })

      .state('menu.clientdetail.profil', {
        url: '/profil',
        views: {
          'profil': {
            templateUrl: 'src/client/client-profile.html',
            controller:'ClientDetailCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Détail du client');
          },
          setBackURL : function(HeaderService) {
            HeaderService.setHeaderBack('menu.client');
          }
        }

      })

      .state('menu.clientdetail.paiements', {
        url: '/paiements',
        views: {
          'paiements': {
            templateUrl: 'src/client/client-paiements.html',
            controller:'ClientPaiementsCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Paiements du client');
          },
          setBackURL : function(HeaderService) {
            HeaderService.setHeaderBack('menu.client');
          }
        }
      })

      .state('menu.clientdetail.traitements', {
        url: '/traitements',
        views: {
          'traitements': {
            templateUrl: 'src/client/client-traitements.html',
            controller:'ClientTraitementsCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Traitements du client');
          },
          setBackURL : function(HeaderService) {
            HeaderService.setHeaderBack('menu.client');
          }
        }
      })

      .state('menu.editclient', {
        url: '/edit-client/:id',
        views: {
          'menu-content': {
            templateUrl: 'src/client/client-edit.html',
            controller:'ClientDetailCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Edition du client');
          },
          setBackURL : function(HeaderService, $stateParams) {
            HeaderService.setHeaderBack('menu.clientdetail({id: ' + $stateParams.id + '})');
          }
        }
      })

      .state('menu.createclient', {
        url: '/create-client',
        views: {
          'menu-content': {
            templateUrl: 'src/client/client-edit.html',
            controller:'ClientDetailCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Créer un client');
          },
          setBackURL : function(HeaderService) {
            HeaderService.setHeaderBack('menu.client');
          }
        }
      })

      .state('menu.editpaiement', {
        url: '/edit-paiement/:account/:id',
        views: {
          'menu-content': {
            templateUrl: 'src/client/paiement-edit.html',
            controller:'PaiementDetailCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Edition du paiement');
          },
          setBackURL : function(HeaderService, $stateParams) {
            HeaderService.setHeaderBack('menu.paiements({account: ' + $stateParams.account + '})');
          }
        }
      })

      .state('menu.createpaiement', {
        url: '/create-paiement/:account',
        views: {
          'menu-content': {
            templateUrl: 'src/client/paiement-edit.html',
            controller:'PaiementDetailCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Créer un paiement');
          },
          setBackURL : function(HeaderService) {
            HeaderService.setHeaderBack('menu.paiements({account: ' + $stateParams.account + '})');
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
