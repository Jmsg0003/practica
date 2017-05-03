(function (angular) {

  angular.module('app').component('listCard', {
    templateUrl: 'app/components/main/listCard/list-card-template.html',
    controller: ['$state', 'cardsFactory', listCard],
    controllerAs: 'listCard'
  });

  /* Inyectamos aquí y arriba $state */
  function listCard($state, cardsFactory) {
    var vm = this;
    vm.rotateCard1 = false; // variable que controla si esta girada (true) o no (false)
    vm.rotateCard2 = false; // variable que controla si esta girada (true) o no (false)
    vm.cont_fail = 0; // contador de fallos
    vm.cont_success = 0; // contador de fallos
    vm.card1 = '';
    vm.card2 = '';
    vm.long_card = 0;

    vm.$onInit = function () {
      vm.cont_fail = 0;
      vm.cont_success = 0;
      vm.allCardsRandom = cardsFactory.getAllCard(); //tengo lista con duplicados*/
      vm.userGame = cardsFactory.getUserGame();
      //  console.log(vm.userGame);
      vm.long_card = vm.allCardsRandom.length;
    };

    vm.endGame = function () {
      $state.go("main");
    };
    /* Al clicar sobre un elemento de la lista,
    nos vamos al detalle con el método go de $state */
    vm.goToDetail = function () {
      $state.go('detail');
    };

    vm.removeCard = function (card) {

      var i = vm.long_card - 1;
      var nameCardA = "";

      while (i >= 0) {
        nameCardA = cardsFactory.getNameCard(vm.allCardsRandom[i]);
        if (card.name === nameCardA) {
          vm.allCardsRandom.splice(i, 1);
          vm.long_card--;
        }
        i--;
      }
    };

    vm.selectCard = function (item) {

      if (vm.long_card != 0) { // tengo cartas??
        if (!vm.card1) { // si no hay alguna carta en card1
          vm.card1 = item;
          vm.rotateCard1 = true;
        } else { // hay carta1 y elijo la 2
          vm.card2 = item;
          vm.rotateCard2 = true;
          if (vm.card1.name === vm.card2.name) {
            vm.removeCard(vm.card1);
            vm.cont_success++;
          } else {
            vm.cont_fail++;
          }
          vm.rotateCard1 = false;
          vm.rotateCard2 = false;
          vm.card1 = "";
          vm.card2 = "";
        }
      } 
      if (vm.long_card===0){
        $state.go('win');
      }
    };

    /*compara una cadena*/
    vm.comparCard = function (cad1, cad2) {
      if (cad1 === cad2) {
        return true
      }
      return false;
    };

    /*devuelve true si las cartas son iguales
      devuelve False si las cartas son distintas*/
    vm.check = function (card1, card2) {
      console.log('estoy aqui');
      if (!comparCard(card1.name, card2.name)) {
        cont_fail++;
        return false;
      } else {
        cont_success++;
        return true;
      }
    };
  }
})(angular);
