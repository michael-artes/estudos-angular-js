angular.module("listaTelefonicaApp").service("operadorasAPI", function($http){

  this.getOperadoras = function(){
    return $http.get("http://localhost:3412/operadoras");
  };

});
