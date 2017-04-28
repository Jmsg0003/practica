(function (angular) {

  angular.module('app').component('listCard', {
    templateUrl: 'app/components/main/listCard/list-card-template.html',
    controller: ['$state', 'cardsFactory', listCard],
    controllerAs: 'listCard'
  });

  /* Inyectamos aquí y arriba $state */
  function listCard($state, cardsFactory) {
    var vm = this;
    var rotate = false; // variable que controla si esta girada (true) o no (false)
    var cont_fail = 0; // contador de fallos
    var cont_success = 0; // contador de fallos
    vm.card1 = '';
    vm.card2 = '';
    vm.long_card = 0;

    vm.$onInit = function () {

      vm.allCardsRandom = cardsFactory.getAllCard(); //tengo lista con duplicados*/
      vm.long_card = vm.allCardsRandom.length;
    };

    /* Al clicar sobre un elemento de la lista,
    nos vamos al detalle con el método go de $state */
    vm.goToDetail = function () {
      $state.go('detail');
    };

    vm.removeCard = function (card) {

      var i = vm.long_card;
      while (i--) {
        console.log(card.name);
        console.log(vm.allCardsRandom[i].name);
        // debugger;
        if (card.name === vm.allCardsRandom[i].name) {
          console.log("carta que tengo que borrar",card);
          vm.allCardsRandom.splice(i, 1);
          console.log("borro la carta");
          vm.long_card--;
        }
        i++;
      }
    };

    vm.selectCard = function (item) {
      if (vm.long_card != 0) { // tengo cartas
        if (!vm.card1) {
          vm.card1 = item;
        } else {
          vm.card2 = item;
          if (vm.card1.name === vm.card2.name) {
            vm.removeCard(vm.card1);
            cont_success ++;
          }
          else {
           cont_fail ++;
           console.log("cartas elegidas no son iguales");
          }
          vm.card1 = '';
          vm.card2 = '';
        };
      }else{
         console.log("no hay mas cartas");
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
