angular.module('listaTelefonicaApp').controller('listaTelefonicaCtrl', function($scope, $http, contatosAPI){

    $scope.hello = "Lista Telefônica";

    $scope.title = "teste teste";

    $scope.operadoras = [];

    // Ex: $filter("lowercase")("Michael")
    //O $filter irá retornar uma função!

    $scope.contatos = [];

    var carregarOperadoras = function(){
        $http.get("http://localhost:3412/operadoras").success(function(data, status){
            $scope.operadoras = data;
        });
    };

    var carregarContatos = function(){

        contatosAPI.getContatos().success(function(data, status){
          $scope.contatos = data;
        }).error(function (data, status) {
    			$scope.error = "Não foi possível carregar os dados!";
    		});
    };

    $scope.adicionarContato = function(contato){

      contato.data = new Date();

      contatosAPI.salvarContatos(contato).success(function(data, status){

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
    carregarOperadoras();

});
