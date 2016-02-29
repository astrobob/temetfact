angular.module('temetTraitement', [])

  .config(function ($stateProvider) {

    $stateProvider

      .state('menu.traitements', {
        url: '/traitements',
        views: {
          'menu-content': {
            templateUrl: 'templates/traitement/traitements.html',
            controller: 'TraitementsCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Traitements');
          }
        }        
      })

      .state('menu.editraitement', {
        url: '/edit-traitement/:id',
        views: {
          'menu-content': {
            templateUrl: 'templates/traitement/traitement-edit.html',
            controller:'TraitementDetailCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Edition du paiement');
          },
          setBackURL : function(HeaderService) {
            HeaderService.setHeaderBack('menu.traitements');
          }
        }
      })

      .state('menu.createtraitement', {
        url: '/create-traitement',
        views: {
          'menu-content': {
            templateUrl: 'templates/traitement/traitement-edit.html',
            controller:'TraitementDetailCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Créer un traitement');
          },
          setBackURL : function(HeaderService) {
            HeaderService.setHeaderBack('menu.traitements');
          }
        }
      });

  });