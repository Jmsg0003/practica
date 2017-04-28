(function(angular) {

  angular.module('app').component('viewDetail', {
    templateUrl:  'app/components/detail/view-detail-template.html',
    controller: ['$stateParams', 'cardsFactory', viewDetail],
    controllerAs: 'viewDetail'
  });

  function viewDetail($stateParams, cardsFactory) {
    var vm = this;
 
    vm.$onInit = function() {
      //var idAnimal = $stateParams.idAnimal; 
 
      vm.cardDetail = cardsFactory.getAllCard(); 
      
    };
  }

})(angular);