angular.module('listaTelefonicaApp').controller('novoContatoCtrl', function($scope, $http, contatosAPI, serialGenerator, $location, operadoras){

    $scope.operadoras = operadoras.data;

    $scope.adicionarContato = function(contato){

      contato.data = new Date();
      contato.serial = serialGenerator.generator();

      contatosAPI.salvarContatos(contato).success(function(data, status){

        delete $scope.contato;
        $scope.contatoForm.$setPristine();

        $location.path("/contatos");
      });
    };

});
