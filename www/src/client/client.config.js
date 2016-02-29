angular.module('temetClient', [])

  .config(function ($stateProvider) {

    $stateProvider

      .state('menu.client', {
        url: '/client',
        views: {
          'menu-content': {
            templateUrl: 'templates/client/clients.html',
            controller: 'ClientsCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Clients');
          }
        }        
      })

      .state('menu.clientdetail', {
        url: '/client-detail/:id',
        views: {
          'menu-content': {
            templateUrl: 'templates/client/client-detail.html',
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
            templateUrl: 'templates/client/client-profile.html',
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
            templateUrl: 'templates/client/client-paiements.html',
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
            templateUrl: 'templates/client/client-traitements.html',
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
            templateUrl: 'templates/client/client-edit.html',
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
            templateUrl: 'templates/client/client-edit.html',
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
      });

  });