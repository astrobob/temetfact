angular.module('temetPaiement', [])

  .config(function ($stateProvider) {

    $stateProvider

      .state('menu.paiements', {
        url: '/paiements/:account',
        views: {
          'menu-content': {
            templateUrl: 'templates/paiement/paiements.html',
            controller: 'PaiementsCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Paiements');
          }
        }        
      })

      .state('menu.editpaiement', {
        url: '/edit-paiement/:account/:id',
        views: {
          'menu-content': {
            templateUrl: 'templates/paiement/paiement-edit.html',
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
            templateUrl: 'templates/paiement/paiement-edit.html',
            controller:'PaiementDetailCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Créer un paiement');
          },
          setBackURL : function(HeaderService, $stateParams) {
            HeaderService.setHeaderBack('menu.paiements({account: ' + $stateParams.account + '})');
          }
        }
      });

  });