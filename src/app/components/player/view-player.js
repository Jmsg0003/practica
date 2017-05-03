(function(angular) {

  angular.module('app').component('viewPlayer', {
    templateUrl:  'app/components/main/player/view-player-template.html',
    controller: ['$state','cardsFactory', viewPlayer],
    controllerAs: 'viewPlayer',
    bindings: {
      player: '<'
    }
  });

  function viewPlayer($state,cardsFactory) {
    var vm = this;


    vm.$onInit = function() { 
   
     // vm.starGame();
      
    };

    vm.starGame = function(){
      
      console.log ('Se ha iniciado el juego');
      vm.userPlayer();
      $state.go('start');
    }
    vm.endGame = function(){
      $state.go("main");
    }
    
    /*Vamos a coger los datos del usuario*/
     vm.userPlayer = function() {
       var userPlayer = {
         name: vm.playerName, 
         email: vm.playerEmail,
         avatar: vm.playerAvatar
       };
       console.log(userPlayer);
       cardsFactory.insertUserGame(userPlayer);
    };

   /* Muestro el usuario*/
    vm.showPlayer = function(userPlayer) {
        console.log(userPlayer);
    };
  }

})(angular);