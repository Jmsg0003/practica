(function(angular) {

  angular.module('app').component('viewMain', {
    templateUrl:  'app/components/main/view-main-template.html',
    controller: ['$state','$q','$http', viewMain],
    controllerAs: 'viewMain'
  });
  /*
    $q es para meter las promesas
    $http es para meter llamadas AJAX
  */

  function viewMain($state,$q,$http) {
    var vm = this;

    vm.$onInit = function() {
   
    };

 /*   vm.renders = {};*/

    vm.actions = {};

    vm.actions.goToPlay = function() {
     // $state.go('addAnimal');
      $state.go('player');
    };
  }

 

})(angular);