angular.module("listaTelefonicaApp").factory("contatosAPI", function($http, configUtil){

  var _getContatos = function(){
    return $http.get(configUtil.baseUrl + "/contatos");
  };

  var _salvarContatos = function(contato){
    return $http.post(configUtil.baseUrl + "/contatos", contato);
  };

  return {
      getContatos: _getContatos,
      salvarContatos: _salvarContatos
  }

});
