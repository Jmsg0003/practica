(function(angular) {

  angular.module('app').component('footerCard', {
    templateUrl:  'app/components/commons/footer/footer-card-template.html',
    controller: ['$state', footerCard],
    controllerAs: 'footerCard'
  });

  function footerCard($state) {
    var vm = this;

    vm.goToAbout = function() {
      $state.go('aboutUs');
    };
  }

})(angular);