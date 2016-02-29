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

      .state('menu.edittraitement', {
        url: '/edit-traitement/:id',
        params: {
          clientId: null,
        },
        views: {
          'menu-content': {
            templateUrl: 'templates/traitement/traitement-edit.html',
            controller:'TraitementDetailCtrl'
          }
        },
        resolve: {
          setTitle : function(HeaderService) {
            HeaderService.setHeaderTitle('Edition du traitement');
          },
          setBackURL : function(HeaderService, $stateParams) {
            HeaderService.setHeaderBack('menu.clientdetail({id: ' + $stateParams.clientId + '})');
          }
        }
      })

      .state('menu.createtraitement', {
        url: '/create-traitement',
        params: {
          clientId: null,
        },
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
          setBackURL : function(HeaderService, $stateParams) {
            HeaderService.setHeaderBack('menu.clientdetail({id: ' + $stateParams.clientId + '})');
          }
        }
      });

  });