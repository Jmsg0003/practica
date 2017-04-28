(function(angular) {

  angular.module('app').component('cardPlay', {
    templateUrl:  'app/components/main/card/card-template.html',
    controller: cardPlay,
    controllerAs: 'cardPlay',
    bindings: {
      itemCard: '<'
    }
  });

  function cardPlay() {
    var vm = this;
  }

})(angular);

