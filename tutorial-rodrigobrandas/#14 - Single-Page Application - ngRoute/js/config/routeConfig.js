angular.module('listaTelefonicaApp').config(function($routeProvider){

  $routeProvider.when("/contatos" , {
    templateUrl: "views/contatos.html",
    controller: "listaTelefonicaCtrl",
    resolve: {
      operadoras: function(operadorasAPI){
        return operadorasAPI.getOperadoras();
      }
    }    
  });

  $routeProvider.when("/novoContato", {
    templateUrl: "views/novoContato.html",
    controller: "novoContatoCtrl",
    resolve: {
      operadoras: function(operadorasAPI){
        return operadorasAPI.getOperadoras();
      }
    }
  });

  $routeProvider.otherwise({
    redirectTo: "/contatos"
  });

});
