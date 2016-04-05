angular.module("listaTelefonicaApp").service("operadorasAPI", function($http, configUtil){

  this.getOperadoras = function(){
    return $http.get(configUtil.baseUrl + "/operadoras");
  };

});
