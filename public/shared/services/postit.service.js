 (function(){
   'use strict'
  angular.module('stoneBoard').factory('postitService', function($http){

    let urlBase = 'http://stone-board-api.herokuapp.com/api/card';

    function saveCard(card){

      return $http.post(urlBase, card);
    }
    function editCard(card){

      return $http.put(urlBase, card);
    }
    function deleteCard(id){
      return $http.delete('http://stone-board-api.herokuapp.com/api/card/' + id);
    }
    function getCardsOutsideResultGroup(idBoard) {
      return $http.get(urlBase + '/cardsOutsideResultGroup/' + idBoard)
    }

    return {
      saveCard : saveCard,
      editCard : editCard,
      deleteCard : deleteCard,
      getCardsOutsideResultGroup : getCardsOutsideResultGroup
    };
  });
}());
