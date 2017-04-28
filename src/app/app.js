'use strict';

(function (angular) {
  /* Declaramos el módulo e inyectamos el router */
  // https://github.com/angular-ui/ui-router
  // npm install --save angular-ui-router
  var dependenciasProyecto = ['ui.router', 'ngAnimate'];

  angular.module('app', dependenciasProyecto);

  /* Definimos la configuración del proyecto durante la fase config */
  /* Necesitamos inyectar algunos "providers" del router */
  angular.module('app').config(['$stateProvider', '$urlRouterProvider', appConfig]);

  function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };

    /*    var detail = {
          name: 'detail',
          url: '/detail/:idAnimal',
          params: {
            idAnimal: { squash: true, value: null }
          },
          template: '<view-detail></view-detail>'
        };*/
    var detail = {
      name: 'detail',
      url: '/detail/',
      template: '<view-detail></view-detail>'
    }


    var about = {
      name: 'aboutUs',
      url: '/aboutUs',
      template: '<h3 class="AboutUs">About Us: Meet me</h3>'
    };
/*
    var add = {
      name: 'addAnimal',
      url: '/addAnimal',
      template: '<view-add></view-add>'
    };*/

    var player = {
      name: 'player',
      url: '/player',
      template: '<view-player></view-player>'
    };

    var start = {
      name: 'start',
      url: '/start',
      template: '<list-card></list-card>'
    };

    var win = {
      name: 'win',
      url: '/win/',
      template: '<h3>Has Ganado <h3>'
    }
    /*  
        var edit = {
          name:'editAnimal',
          url: '/editAnimal',
          template: '<view-edit></view-edit>'
        };*/


    $stateProvider.state(main);
    $stateProvider.state(detail);
    $stateProvider.state(about);
    $stateProvider.state(player);
    $stateProvider.state(start);

    /* Definimos una ruta por defecto: */
    $urlRouterProvider.otherwise('/main');

    /* Quitamos el hash */
    /*$locationProvider.html5Mode(true);*/
  }

})(angular);