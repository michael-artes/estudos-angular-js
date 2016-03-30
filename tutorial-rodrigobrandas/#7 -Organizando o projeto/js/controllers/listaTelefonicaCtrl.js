angular.module('listaTelefonicaApp').controller('listaTelefonicaCtrl', function($scope, $filter, $http){

    $scope.hello = "Lista Telefônica";

    $scope.operadoras = [];

    // Ex: $filter("lowercase")("Michael")
    //O $filter irá retornar uma função!

    $scope.contatos = [];


    var carregarContatos = function(){

        $http.get("http://localhost:8080/contato/list").success(function(data, status){
          
          $scope.contatos = data;

          var t = new Array();
          t.push(data[0].operadora);

          $scope.operadoras = t;
        });
    };

    $scope.adicionarContato = function(contato){

      contato.data = new Date();

      $http.post("http://localhost:8080/contato/add", contato).success(function(data, status){

        delete $scope.contato;
        $scope.contatoForm.$setPristine();

        carregarContatos();
      });

    };

    $scope.apagarContato = function(contatos){

        $scope.contatos = contatos.filter(function(contato) {
            if (!contato.selecionado) {
                return contato;
            }
        });
    };

    $scope.isContatosSelecionados = function(contatos){

        var isSelecionado = contatos.some(function(contato) {
              return contato.selecionado;
        });

        return isSelecionado;
    };


    $scope.ordenarPor = function(campo){

        $scope.criteriaDeOrdenacao = campo;
        $scope.direcaoOrderBy = !$scope.direcaoOrderBy; //é true ou false essa direção

    };

    carregarContatos();

});
