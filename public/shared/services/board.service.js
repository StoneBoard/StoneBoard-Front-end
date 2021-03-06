 (function(){
   'use strict'
  angular.module('stoneBoard').factory('boardService', function($http){

    let urlBase = 'https://stone-board-api.herokuapp.com/api/board';

    function findById(id){
      return $http.get('https://stone-board-api.herokuapp.com/api/board/' + id);
    }

    function saveBoard(board){
      return $http.post(urlBase, board);
    }

    function addMembers(boardMembers){
      return $http.put('https://stone-board-api.herokuapp.com/api/board/addMember', boardMembers);
    }

    function update(board){
      return $http.put(urlBase, board);
    }
    
    return {
      saveBoard : saveBoard,
      findById : findById,
      addMembers : addMembers,
      update : update
    };
  });
}());
