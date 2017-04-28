(function (angular) {

  /* Inyectamos $q para gestionar promesas y $http para las llamadas ajax */
  angular.module('app').factory('cardsFactory', ['$q', '$http', cardsFactory]);

  function cardsFactory($q, $http) {
    var module = {};
    var self = module;

    /*    module.allCard = [
          {"id": 0, , "img":"reverse.jpg"},
          {"id": 1, "name": "carta2", "img":"card1.jpg"},
          {"id": 2, "name": "carta3", "img":"card2.jpg"},
          {"id": 3, "name": "carta4", "img":"card3.jpg"},
          {"id": 4, "name": "carta5", "img":"card4.jpg"},
          {"id": 5, "name": "carta6", "img":"card5.jpg"}
        ];*/
    module.allCard = [
      { "name": "carta1", "img": "card1.jpg" },
      { "name": "carta2", "img": "card2.jpg" },
      { "name": "carta3", "img": "card3.jpg" },
      { "name": "carta4", "img": "card4.jpg" },
      { "name": "carta5", "img": "card5.jpg" }
    ];

    module.getAllCard = function () {
      self.allCard = self.allCard.concat(self.allCard.slice());

      for (let i = self.allCard.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [self.allCard[i - 1], self.allCard[j]] = [self.allCard[j], self.allCard[i - 1]];
      }
      return self.allCard;
    };

    return module;
  };

})(angular);


