 (function(){
   'use strict'
  angular.module('stoneBoard').factory('voteService', function($http){

    let urlBase = 'https://stone-board-api.herokuapp.com/api/vote';

    function saveVote(vote){

      return $http.post(urlBase, vote);
    }
   
    return {
      saveVote : saveVote
    };
  });
}());
